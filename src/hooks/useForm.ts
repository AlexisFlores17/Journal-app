import { useEffect, useMemo, useState } from 'react';

interface FormState {
    email: string;
    password: string;
    displayName?: string;
}

interface FormValidations {
    [key: string]: [(value: string) => boolean, string?];
}

export const useForm = ( initialForm: FormState, formValidations: FormValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setFormValidation] = useState<Record<string, string | null>>({});

    useEffect(() => {
      
        createValidators();
    
      return () => {
        
      }
    }, [formState])


    const isFormValid = useMemo(() => {


        for (const formValue of Object.keys( formValidation)) {
            if( formValidation[formValue] !==null ) return false;
        }

        return true;

    },[formValidation])
    

    const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {
        const formCheckedValues: Record<string, string | null> = {};

        for (const formField of Object.keys(formValidations)) {
            const [ fn , errorMessage ="Este campo es requerido" ] = formValidations[ formField];
            
            formCheckedValues[`${formField}Valid`] =  fn(formState[formField as keyof FormState] || '') ? null: errorMessage;
        }

        setFormValidation( formCheckedValues );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid,
        displayNameValid: formValidations.displayName?.[0](formState.displayName || '') ? null : formValidations.displayName?.[1],
        emailValid: formValidations.email?.[0](formState.email) ? null : formValidations.email?.[1],
        passwordValid: formValidations.password?.[0](formState.password) ? null : formValidations.password?.[1],
    }
}
import { Grid2, TextField, Button, Typography, Link, Alert } from "@mui/material";
import {  Link as RouterLink } from "react-router";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useMemo, useState } from "react";
import { startCreatingUserWithEmailPAssword } from "../../store/auth";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { RootState } from '../../store/store';

const formData = {
  email: "alex@google.com",
  password: "123456",
  displayName: "Nombre de usuario",
};
interface FormState {
  email: string;
  password: string;
  displayName: string;
}

const formValidations: Record<string, [(value: string) => boolean, string?]> = {
  email: [(value: string) => value.includes("@"), "El correo debe de tener un @"],
  password: [(value: string) => value.length >= 6, "El password debe de tener más de 6 letras"],
  displayName: [(value: string) => value.length >= 1, "El nombre es obligatorio"],
};

export const RegisterPage = () => {

  const dispatch: AppDispatch  = useDispatch();

  const [formSubmited, setFormSubmited] = useState(false)

  const { status, errorMessage} = useSelector( (state: RootState) => state.auth );
  const isCheckingAuthentication = useMemo( () => status === "checking", [status]);

  const { displayName, email, password, onInputChange, formState , displayNameValid, emailValid, passwordValid , isFormValid} =
  useForm(formData, formValidations);


  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if( !isFormValid ) return;
    setFormSubmited(true);

      dispatch(startCreatingUserWithEmailPAssword(formState as FormState ));

  };

  return (
    <AuthLayout title="Register">
      <form onSubmit= {onSubmit}>
        <Grid2 container>
          <Grid2 size={{ xs: 12 }} sx={{ mb: 2 }}>
            <TextField
              variant="filled"
              label="Nombre"
              type="text"
              placeholder="Usuario"
              fullWidth
              name="displayName"
              value={displayName}
              onChange = {onInputChange}
              error={!!displayNameValid && formSubmited}
              helperText={displayNameValid}

            />
          </Grid2>
          <Grid2 size={{ xs: 12 }} sx={{ mb: 2 }}>
            <TextField
              variant="filled"
              label="Correo"
              type="email"
              placeholder="correo@mail.com"
              fullWidth
              name="email"
              value={email}
              onChange = {onInputChange }
              error={!!emailValid  && formSubmited}
              helperText={emailValid}
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }} sx={{ mb: 2 }}>
            <TextField
              variant="filled"
              label="Password"
              type="password"
              placeholder="Contraseña"
              autoComplete="off"
              fullWidth
              name="password"
              value={password}
              onChange = {onInputChange}
              error={!!passwordValid  && formSubmited}
              helperText={passwordValid}
            />
          </Grid2>
          <Grid2 spacing={2} sx={{ mb: 2, mt: 1 }} size={12}>
            <Grid2 size={{ xs: 12 }} sx={{marginBottom:2}} display={errorMessage ? 'block' : 'none'}>
              <Alert severity="error" >
                {errorMessage}
              </Alert>
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <Button disabled={isCheckingAuthentication}  variant="contained" fullWidth type="submit">
                Crear cuenta
              </Button>
            </Grid2>
          </Grid2>
          <Grid2
            container
            size={{ xs: 12 }}
            direction="row"
            justifyContent="end"
          >
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} to="/auth/login">
              ingresar
            </Link>
          </Grid2>
        </Grid2>
      </form>
    </AuthLayout>
  );
};

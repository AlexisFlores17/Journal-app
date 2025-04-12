import { Google } from "@mui/icons-material";
import {
  Button,
  Grid2,
  Link,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { Link as RouterLink } from "react-router";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { RootState } from "../../store/store";
import { useMemo } from "react";

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state: RootState) => state.auth);
  

  const dispatch: AppDispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  });

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
    console.log("Google Sign In");
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}      className= "animate__animated animate__fadeIn animate__faster">
        <Grid2 container>
          <Grid2 size={{ xs: 12 }} sx={{ mb: 2 }}>
            <TextField
              variant="filled"
              label="Correo"
              type="email"
              placeholder="correo@mail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
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
              onChange={onInputChange}
            />
          </Grid2>

          <Grid2 container spacing={2} sx={{ mb: 2, mt: 1 }} size={12}>
            <Grid2
              size={{ xs: 12 }}
              sx={{ marginBottom: 0 }}
              display={errorMessage ? "block" : "none"}
            >
              <Alert severity="error">{errorMessage}</Alert>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Button
                disabled={isAuthenticating}
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Button
                disabled={isAuthenticating}
                variant="contained"
                fullWidth
                onClick={onGoogleSignIn}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid2>
          </Grid2>
          <Grid2 container direction="row" justifyContent="end" size={12}>
            <Link color="inherit" to="/auth/register" component={RouterLink}>
              Crear una cuenta
            </Link>
          </Grid2>
        </Grid2>
      </form>
    </AuthLayout>
  );
};

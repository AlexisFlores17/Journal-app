import { Grid2, TextField, Button, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form action="">
        <Grid2 container>
          <Grid2 size={{ xs: 12 }} sx={{ mb: 2 }}>
            <TextField
              variant="filled"
              label="Nombre"
              type="text"
              placeholder="Usuario"
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }} sx={{ mb: 2 }}>
            <TextField
              variant="filled"
              label="Correo"
              type="email"
              placeholder="correo@mail.com"
              fullWidth
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
            />
          </Grid2>
          <Grid2  spacing={2} sx={{ mb: 2, mt: 1 }} size={12}>
            <Grid2 size={{ xs: 12 }}>
              <Button variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid2>
          </Grid2>
          <Grid2 container size={{ xs: 12 }} direction="row" justifyContent="end">
            <Typography sx={{mr:1}} >¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} to="/auth/login">
              ingresar
            </Link>
          </Grid2>
        </Grid2>
      </form>
    </AuthLayout>
  );
};

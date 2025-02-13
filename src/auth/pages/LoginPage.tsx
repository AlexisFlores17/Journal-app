import { Google } from "@mui/icons-material";
import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import {Link as RouterLink} from "react-router";

export const LoginPage = () => {
  return (
    <Grid2
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid2
        className="box-shadow"
        size={{ xs: 12, sm: 8, md: 5 }}
        sx={{ backgroundColor: "white", padding: 3, borderRadius: 2 }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          Login
        </Typography>

        <form action="">
          <Grid2 container>
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
                fullWidth
              />
            </Grid2>

            <Grid2 container spacing={2} sx={{ mb: 2, mt:1 }} size={12}>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <Button variant="contained" fullWidth>
                  Login
                </Button>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <Button variant="contained" fullWidth>
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
      </Grid2>
    </Grid2>
  );
};

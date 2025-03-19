import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 1 }}
      >
        <Grid item>
          <Typography fontSize={39} fontWeight="light" sx={{mb:2}}>
            28 de Agosto de 2025
          </Typography>
        </Grid>
        <Grid item>
          <Button sx={{ p: 2 }}>
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Guardar
          </Button>
        </Grid>
        <Grid container sx={{mb:2}}>
          <TextField
            type="text"
            variant="filled"
            fullWidth
            placeholder="Ingrese un titulo"
            label="Titulo"
            sx={{ border: "none", mb: 1 }}
          />
          <TextField
            type="text"
            variant="filled"
            fullWidth
            multiline
            placeholder="¿Qué pasó hoy?"
            minRows={5}
          />
        </Grid>

        <ImageGallery />
      </Grid>
    </>
  );
};


import { Grid2, Typography } from "@mui/material"



import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
}

export const AuthLayout = ({ children, title }: AuthLayoutProps) => {
  return (
    <Grid2
 
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", padding: 4 }}
    >
      <Grid2
        className="box-shadow"
        size={{ xs: 12}}
        sx={{ backgroundColor: "#373737", padding: 3, borderRadius: 2, width: { sm:450} }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>
        {
            children
        }
      </Grid2>
    </Grid2>
  )
}

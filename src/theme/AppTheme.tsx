
import { ThemeProvider } from '@mui/material/styles';
import  CssBaseline  from '@mui/material/CssBaseline';
import { ReactNode } from 'react';
import { purpleTheme } from './purpleTheme';

export const AppTheme = ({children}: {children: ReactNode}) => {
  return (
    <ThemeProvider theme={purpleTheme}>
        <CssBaseline />
        {children}
    </ThemeProvider>
  )
}

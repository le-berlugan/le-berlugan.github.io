import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#009688',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: ['Nunito', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(',')
  }
});

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default theme;

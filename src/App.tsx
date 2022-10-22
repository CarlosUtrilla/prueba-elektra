import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.scss'
import { Login } from './pages/Login/Login'
import AuthProvider from './context/AuthProvider';
import Router from './router/router';

import type {} from '@mui/x-date-pickers/themeAugmentation';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiDatePicker: {
      styleOverrides: {
        root: {
          backgroundColor: 'red',
        },
      },
    },
  },
});

function App() {

  return (
   <AuthProvider>
      <ThemeProvider theme={darkTheme}>
        <Router/>
      </ThemeProvider>
   </AuthProvider>
  )
}

export default App

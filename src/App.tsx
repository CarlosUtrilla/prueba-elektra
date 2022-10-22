import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.scss'
import { Login } from './pages/Login/Login'
import AuthProvider from './context/AuthProvider';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  return (
   <AuthProvider>
      <ThemeProvider theme={darkTheme}>
        <Login/>
      </ThemeProvider>
   </AuthProvider>
  )
}

export default App

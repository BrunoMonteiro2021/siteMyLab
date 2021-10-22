import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#4482FF"
    },
    secondary: {
      main: "#c51162",
    },
    //tema dark, testes posteriores
    // type: 'dark',
  },
  background: {
    default: "#fff"
  }
})

export default theme;
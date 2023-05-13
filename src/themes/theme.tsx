import { purple } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const purpleTheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: purple["A400"],
      contrastText: '#FFFFFF'

    },
    background: {
      default: purple[50],
    },
  },
  typography: {
    fontFamily: 'Quicksand',
    fontSize: 14
  },
})

export default purpleTheme

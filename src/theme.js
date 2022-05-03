/* eslint-disable linebreak-style */
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['Dosis', 'sans-serif'].join(','),
  },
  palette: {
    primary: { main: '#069c58' },
  },
});

export default theme;

import { createTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

export const theme = createTheme({
  palette: {
    primary: { main: grey[900] },
    secondary: { main: grey[600] },
    type: 'light',
  },
});

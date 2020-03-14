import INDIGO from '@material-ui/core/colors/indigo';
import DEEPORANGE from '@material-ui/core/colors/deepOrange';

export default {
  palette: {
    primary: {
      main: INDIGO[400],
    },
    secondary: {
      main: DEEPORANGE[300],
    }
  },
  // Enable typography v2: https://material-ui.com/style/typography/#migration-to-typography-v2
  typography: {
    useNextVariants: true
  },
  flexColumnCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  flexRowCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
}

import { createTheme } from '@mui/material';

/* fonts
font-family: 'Montserrat', sans-serif;
font-family: 'Quicksand', sans-serif;
*/

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // height: "100%",
          textRendering: "optimizeSpeed",
          // color: "rgb(35, 35, 35)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          // fontFamily: 'Manrope',
          // borderWidth: 2,
          // borderRadius: 0,
          // fontWeight: 600,
          // letterSpacing: .95,
          // ":hover": {
          //   borderRadius: 0,
          //   borderWidth: 2,
          // }
        },
        
      },
    },

  },
  palette: {
    mode: 'dark',
    primary: {
      // main: '#DC8C24',
      main: '#036b91',
    },
    secondary: {
      // main: '#9da5f7',
      main: 'rgb(145, 53, 3)',
    },
    info: {
      main: '#18ecbe',
    },
    error: {
      main: '#f8713f',
    },
    success: {
      main: '#91f574',
    },
    lightColor: {
      main: "#F9F6EE",
    },
    darkColor: {
      main: "rgb(35, 35, 35)"
    },
    // background: {
    //   default: 'rgb(38,37,37)',
    //   lighter: 'rgba(239,235,229,0.8)',
    //   paper: '#24242b',
    // },
    // text: {
    //   primary: '#efebe5',
    //   secondary: 'rgba(239,235,229,0.8)',
    //   disabled: 'rgba(239,235,229,0.55)',
    // },
  },
  typography: {
    fontFamily: 'Quicksand',
    h1: {
      fontFamily: 'Montserrat',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Montserrat',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Montserrat',
      fontWeight: 700,
      // letterSpacing: 1
    },
    h4: {
      fontFamily: 'Montserrat',
      // letterSpacing: 15,
      // fontWeight: 800,

    },
    h5: {
      fontFamily: 'Montserrat',
      // letterSpacing: 7,
      // fontWeight: 800,
    },
    h6: {
      fontFamily: 'Montserrat',
      // letterSpacing: 3,
      // fontWeight: 400,
    },
    subtitle1: {
      fontWeight: 300,
    },
    subtitle2: {
      fontWeight: 300,
    },
    body1: {
      fontWeight: 300,
    },
    body2: {
      fontWeight: 300,
    },
    button: {
      // fontFamily: 'Noto Sans Lao',
    },
  },
});
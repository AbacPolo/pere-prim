import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#232730",
      dark: "#15161B",
      contrastText: "#F5AC10",
    },
    secondary: {
      main: "#F5AC10",
      dark: "#FF890A",
      contrastText: "#15161B",
    },
    text: {
      primary: "#fff",
      secondary: "#F5AC10",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          boxSizing: "border-box",
          fontSize: "16px",
          lineHeight: "18px",
          padding: "8px 16px",
          border: 0,
          boxShadow:
            "0px 0px 5px 0px #000, inset 0px 0px 2px 0px rgba(255,255,255,0.8)",
          borderRadius: "12px",
          "&:hover": {
            backgroundColor: "#15161B",
            boxShadow: "0px 0px 5px 0px #000",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: '"Nunito Sans", "Arial", sans-serif',
    fontSize: 16,
    h1: {
      fontSize: "4rem",
      fontWeight: 500,
      letterSpacing: "10px",
      color: "#fff",
      marginLeft: '10px'
    },
    h2: {
      fontSize: "4rem",
      fontWeight: 500,
      letterSpacing: "10px",
      color: "#fff",
      marginLeft: '10px'
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 500,
      letterSpacing: "6px",
      color: "#F5AC10",
      marginLeft: '10px'
    },
    h4: {
      fontSize: "20px",
      fontWeight: 500,
      letterSpacing: "5px",
      color: "#F5AC10",
      marginLeft: '10px'
    },
    h5: {
      fontSize: "20px",
      fontWeight: 400,
      letterSpacing: "5px",
      color: "#F5AC10",
      marginLeft: '10px'
    },
  },
});

export default responsiveFontSizes(theme);

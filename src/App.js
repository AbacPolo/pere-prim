import React from "react";
import "./App.css";
import { Outlet } from "react-router";
import Header from "./components/header/Header";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import Footer from "./components/footer/Footer";

import ReactGA from 'react-ga4';

export const muiCache = createCache({
  key: "mui",
  prepend: true,
});
function App() {
    ReactGA.initialize('G-WE3T1RSH7L');

  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>
        <div className="App_Container">
          <div className="App_Wrapper">
            <Header />
            <Outlet />
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;

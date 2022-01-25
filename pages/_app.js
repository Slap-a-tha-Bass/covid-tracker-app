import React, { useState } from "react";
import { GlobalStyle } from "../theme/globalStyles.js";
import { darkTheme, lightTheme, styles } from "../theme/themes.js";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout.js";
import "../theme/styles.css";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Layout setTheme={setTheme} theme={theme}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;

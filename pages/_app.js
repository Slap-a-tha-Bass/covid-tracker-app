import React, { useState } from "react";
import { GlobalStyle } from "../theme/globalStyles.js";
import { darkTheme, lightTheme, styles } from "../theme/themes.js";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout.js";
import "../theme/styles.css";

function MyApp({ Component, pageProps }) {
  console.log(
    "%c Used NextJS and Styled Components for this project.",
    "border: 1px solid red; padding: 10px; border-radius: 5px; color: red; background-color: rgb(60,60,60); font-size: 20px; font-family: monospace"
  );
  console.log(
    "%c corey@deloach.dev",
    "border: 1px solid red; padding: 10px; border-radius: 5px; color: red; background-color: rgb(60,60,60); font-size: 20px; font-family: monospace"
  );
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

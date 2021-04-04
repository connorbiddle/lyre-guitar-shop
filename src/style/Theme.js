import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    black: "#111111",
    darkGrey: "#828282",
    midGrey: "#B2B2B2",
    lightGrey: "#EBEBEB",
    white: "#FFFFFF",
  },
  breakpoints: {
    sm: "500px",
    md: "750px",
    lg: "1100px",
    xl: "1400px",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;

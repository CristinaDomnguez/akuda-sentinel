import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "./theme";
import { useThemeStore } from "./store/themeStore";

// Necesitamos un componente wrapper para acceder al hook
const AppWithTheme = () => {
  const mode = useThemeStore((state) => state.mode);
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppWithTheme />
  </StrictMode>
);

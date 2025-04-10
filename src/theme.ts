import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            //Tema claro
            primary: { main: "#1976d2" },
            secondary: { main: "#9c27b0" },
            background: {
              default: "#f5f6fa",
              paper: "#ffffff",
            },
            text: {
              primary: "#111111",
              secondary: "#555555",
            },
            divider: "#e0e0e0",
          }
        : {
            //Tema oscuro estilo VS Code
            primary: { main: "#90caf9" },
            secondary: { main: "#ce93d8" },
            background: {
              default: "#1e1e1e",
              paper: "#252526",
            },
            text: {
              primary: "#d4d4d4",
              secondary: "#aaaaaa",
            },
            divider: "#3c3c3c",
          }),
    },
    typography: {
      fontFamily: "Inter, Roboto, sans-serif",
      h4: { fontWeight: 600 },
      h6: { fontWeight: 500 },
      body2: { fontSize: "0.9rem" },
    },
    shape: {
      borderRadius: 4,
    },
  });

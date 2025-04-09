import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#9c27b0",
      },
      background: {
        default: '#1e1e1e', // más suave que negro
        paper: '#252526',   // igual que el panel lateral de VSCode
      },
      text: {
        primary: '#d4d4d4',
        secondary: '#aaaaaa',
      },
      divider: '#3c3c3c',      
      error: {
        main: "#d32f2f",
      },
      warning: {
        main: "#ffa726",
      },
      success: {
        main: "#4caf50",
      },
    },
    typography: {
      fontFamily: "Inter, Roboto, sans-serif",
      h4: {
        fontWeight: 600,
      },
      h6: {
        fontWeight: 500,
      },
      body2: {
        fontSize: "0.9rem",
      },
    },
    shape: {
      borderRadius: 4,
    },
  });

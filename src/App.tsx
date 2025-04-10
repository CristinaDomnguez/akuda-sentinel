import Dashboard from "./pages/Dashboard";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "./theme";
import { useThemeStore } from "./store/themeStore";

export default function App() {
  const mode = useThemeStore((state) => state.mode);
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Dashboard />;
    </ThemeProvider>
  );
}

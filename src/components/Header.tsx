import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
  FormControlLabel,
  Box,
} from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import { useThemeStore } from "../store/themeStore";

/**
 * Header de la aplicación con opción de cambiar entre modo claro/oscuro.
 */
const Header = () => {
  const mode = useThemeStore((state) => state.mode);
  const toggleMode = useThemeStore((state) => state.toggleMode);

  return (
    <AppBar position="static" color="primary" elevation={1}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center" gap={1}>
          <SecurityIcon />
          <Typography variant="h6" component="div">
            Akuda Sentinel
          </Typography>
        </Box>
        <FormControlLabel
          control={
            <Switch
              checked={mode === "dark"}
              onChange={toggleMode}
              color="default"
            />
          }
          label="Dark mode"
          labelPlacement="start"
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

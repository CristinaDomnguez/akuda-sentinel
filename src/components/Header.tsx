import { AppBar, Toolbar, Typography } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';

/**
 * Header fijo superior de la aplicación, con el título y un icono representativo.
 */
const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <SecurityIcon sx={{ mr: 1 }} />
        <Typography variant="h6" component="div">
          Akuda Sentinel
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

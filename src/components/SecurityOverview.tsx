import { Card, CardContent, Typography, Button, Grid, Box } from '@mui/material';
import { Security, History, Shield } from '@mui/icons-material';

const SecurityOverview = () => {
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Seguridad del sistema
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Scanner
              </Typography>
              <Typography variant="body2">Último escaneo: hace 14 días</Typography>
              <Button variant="outlined" sx={{ mt: 2 }}>Escanear</Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Historial de Detecciones
              </Typography>
              <Typography variant="body2">Resumen global</Typography>
              <Button variant="outlined" sx={{ mt: 2 }}>Ver historial</Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Protección en Tiempo Real
              </Typography>
              <Typography color="error">Inactiva</Typography>
              <Button variant="contained" color="warning" sx={{ mt: 2 }}>Actualizar</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SecurityOverview;

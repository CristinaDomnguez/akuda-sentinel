import { Grid, Box, Container, Typography } from "@mui/material";
import Header from "../components/Header";
import StatusCard from "../components/StatusCard";
import DetectionChart from "../components/DetectionChart";
import ThreatsList from "../components/ThreatsList";
import LogsConsole from "../components/LogsConsole";
import QuickActions from "../components/QuickActions";
import SystemStatus from "../components/SystemStatus";
import { useAntivirusStore } from "../store/antivirusStore";

const Dashboard = () => {
  const { lastScanDaysAgo, realTimeProtection, scanNow, toggleProtection } =
    useAntivirusStore();

  return (
    <>
      <Header />

      <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
        {/* Título y estado general */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <Typography variant="h4" fontWeight={600}>
            Panel de Control
          </Typography>
          <SystemStatus status={realTimeProtection ? "safe" : "warning"} />
        </Box>

        {/* Tarjetas principales */}
        <Box mb={7}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <StatusCard
                title="Escáner"
                value={`Último escaneo: hace ${lastScanDaysAgo} días`}
                onAction={scanNow}
                actionLabel="Escanear ahora"
                color="#1976d2"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <StatusCard
                title="Protección en Tiempo Real"
                value={realTimeProtection ? "Activa" : "Inactiva"}
                onAction={toggleProtection}
                actionLabel={realTimeProtection ? "Desactivar" : "Activar"}
                color={realTimeProtection ? "#4caf50" : "#d32f2f"}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <StatusCard
                title="Actualización"
                value="Última actualización: hace 2 días"
                onAction={() => alert("Buscando actualizaciones...")}
                actionLabel="Buscar ahora"
                color="#ff9800"
              />
            </Grid>
          </Grid>
        </Box>

        {/* Gráfico de detecciones */}
        <Box mb={9}>
          <DetectionChart />
        </Box>

        {/* Acciones rápidas */}
        <Box mb={9}>
          <QuickActions />
        </Box>

        {/* Amenazas recientes */}
        <Box mb={7}>
          <ThreatsList />
        </Box>

        {/* Consola del sistema */}
        <Box mb={7}>
          <LogsConsole />
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;

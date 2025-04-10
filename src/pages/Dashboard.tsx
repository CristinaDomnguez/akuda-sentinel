import { Grid, Box, Container, Typography } from "@mui/material";
import Header from "../components/Header";
import StatusCard from "../components/StatusCard";
import DetectionChart from "../components/DetectionChart";
import ThreatsList from "../components/ThreatsList";
import LogsConsole from "../components/LogsConsole";
import QuickActions from "../components/QuickActions";
import SystemStatus from "../components/SystemStatus";
import ThreatsPieChart from "../components/ThreatsPieChart";
import { useAntivirusStore } from "../store/antivirusStore";

const Dashboard = () => {
  const { lastScanDaysAgo, realTimeProtection, scanNow, toggleProtection } =
    useAntivirusStore();

  return (
    <>
      <Header />

      <Container maxWidth="xl" sx={{ pt: 6, pb: 6 }}>
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

        <Grid container spacing={4}>
          {/* Columna izquierda */}
          <Grid item xs={12} md={8}>
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

              <Grid item xs={12}>
                <DetectionChart />
              </Grid>

              <Grid item xs={12}>
                <ThreatsList />
              </Grid>
            </Grid>
          </Grid>

          {/* Columna derecha */}
          <Grid item xs={12} md={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <ThreatsPieChart />
              </Grid>

              <Grid item xs={12}>
                <QuickActions />
              </Grid>

              <Grid item xs={12}>
                <LogsConsole />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;

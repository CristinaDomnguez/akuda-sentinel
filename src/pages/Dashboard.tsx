import { Grid } from "@mui/material";
import Header from "../components/Header";
import StatusCard from "../components/StatusCard";
import DetectionChart from "../components/DetectionChart";
import SystemStatus from "../components/SystemStatus";
import ThreatsList from "../components/ThreatsList";
import LogsConsole from "../components/LogsConsole";
import QuickActions from "../components/QuickActions";

import { useAntivirusStore } from "../store/antivirusStore";

const Dashboard = () => {
  const { lastScanDaysAgo, realTimeProtection, scanNow, toggleProtection } =
    useAntivirusStore();

  return (
    <>
      <Header />

      {/* Sección con título + estado */}
      <Grid container justifyContent="space-between" alignItems="center" p={2}>
        <Grid item>
          <h2 style={{ margin: 0 }}>Panel de Control</h2>
        </Grid>
        <Grid item>
          <SystemStatus status={realTimeProtection ? "safe" : "warning"} />
        </Grid>
      </Grid>

      <Grid container spacing={2} p={2}>
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

        <Grid item xs={12}>
          <DetectionChart />
        </Grid>

        <Grid item xs={12}>
          <QuickActions />
        </Grid>

        <Grid item xs={12}>
          <ThreatsList />
        </Grid>

        <Grid item xs={12}>
          <LogsConsole />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;

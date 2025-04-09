import { Grid } from '@mui/material';
import Header from '../components/Header';
import StatusCard from '../components/StatusCard';
import DetectionChart from '../components/DetectionChart';
import { useAntivirusStore } from '../store/antivirusStore';

const Dashboard = () => {
  const { lastScanDaysAgo, realTimeProtection, scanNow, toggleProtection } = useAntivirusStore();

  return (
    <>
      <Header />
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
            value={realTimeProtection ? 'Activa' : 'Inactiva'}
            onAction={toggleProtection}
            actionLabel={realTimeProtection ? 'Desactivar' : 'Activar'}
            color={realTimeProtection ? '#4caf50' : '#d32f2f'}
          />
        </Grid>

        <Grid item xs={12}>
          <DetectionChart />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;

import { PieChart } from '@mui/x-charts';
import { Box, Typography } from '@mui/material';

const DetectionChart = () => {
  const data = [
    { id: 0, value: 57.6, label: 'Web Protection' },
    { id: 1, value: 20.3, label: 'Malware / PUP' },
    { id: 2, value: 1.3, label: 'Exploits' },
    { id: 3, value: 0.0077, label: 'Ransomware' }
  ];

  return (
    <Box p={4}>
      <Typography variant="h5" gutterBottom>
        Detecciones globales (últimos 30 días)
      </Typography>
      <PieChart
        series={[{ data, innerRadius: 50 }]}
        width={400}
        height={250}
      />
    </Box>
  );
};

export default DetectionChart;

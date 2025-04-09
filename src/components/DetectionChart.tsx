import { ResponsiveBar } from '@nivo/bar';

const data = [
  { tipo: 'Web', valor: 57.6 },
  { tipo: 'Malware', valor: 20.3 },
  { tipo: 'Exploits', valor: 1.3 },
  { tipo: 'Ransomware', valor: 0.0077 },
];

/**
 * Gráfico de barras que muestra detecciones globales simuladas.
 */
const DetectionChart = () => (
  <div style={{ height: 300 }}>
    <ResponsiveBar
      data={data}
      keys={['valor']}
      indexBy="tipo"
      margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
      padding={0.3}
      colors={{ scheme: 'set2' }}
      axisBottom={{ tickRotation: -45 }}
      labelSkipWidth={12}
    />
  </div>
);

export default DetectionChart;

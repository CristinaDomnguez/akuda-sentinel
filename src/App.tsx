import "./App.css";
import { Container } from '@mui/material';
import SecurityOverview from './components/SecurityOverview';
import DetectionChart from './components/DetectionChart';

function App() {
  return (
    <Container maxWidth="lg">
      <SecurityOverview />
      <DetectionChart />
    </Container>
  );
}

export default App;


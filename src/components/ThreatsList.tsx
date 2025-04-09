import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';

/**
 * Datos simulados de amenazas detectadas recientemente.
 */
const threatData = [
  {
    id: 1,
    type: 'Malware',
    date: '2025-04-08',
    severity: 'Alta',
    status: 'Bloqueado',
  },
  {
    id: 2,
    type: 'PUP',
    date: '2025-04-07',
    severity: 'Media',
    status: 'En cuarentena',
  },
  {
    id: 3,
    type: 'Ransomware',
    date: '2025-04-05',
    severity: 'Crítica',
    status: 'Bloqueado',
  },
  {
    id: 4,
    type: 'Exploit',
    date: '2025-04-04',
    severity: 'Baja',
    status: 'Permitido',
  },
];

/**
 * Columnas de la tabla.
 */
const columns: GridColDef[] = [
  { field: 'type', headerName: 'Tipo de amenaza', flex: 1 },
  { field: 'date', headerName: 'Fecha', flex: 1 },
  { field: 'severity', headerName: 'Severidad', flex: 1 },
  { field: 'status', headerName: 'Estado', flex: 1 },
];

/**
 * Tabla con amenazas recientes. Usa MUI DataGrid.
 */
export default function ThreatsList() {
  return (
    <Box mt={4}>
      <Typography variant="h6" gutterBottom>
        Amenazas recientes
      </Typography>
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid
          rows={threatData}
          columns={columns}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </div>
    </Box>
  );
}

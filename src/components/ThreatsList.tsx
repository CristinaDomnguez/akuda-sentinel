import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Typography, Paper, useTheme } from "@mui/material";

const threatData = [
  {
    id: 1,
    type: "Malware",
    date: "2025-04-08",
    severity: "Alta",
    status: "Bloqueado",
  },
  {
    id: 2,
    type: "PUP",
    date: "2025-04-07",
    severity: "Media",
    status: "En cuarentena",
  },
  {
    id: 3,
    type: "Ransomware",
    date: "2025-04-05",
    severity: "Crítica",
    status: "Bloqueado",
  },
  {
    id: 4,
    type: "Exploit",
    date: "2025-04-04",
    severity: "Baja",
    status: "Permitido",
  },
];

const columns: GridColDef[] = [
  { field: "type", headerName: "Tipo de amenaza", flex: 1 },
  { field: "date", headerName: "Fecha", flex: 1 },
  {
    field: "severity",
    headerName: "Severidad",
    flex: 1,
    renderCell: (params) => (
      <span
        style={{
          color:
            params.value === "Crítica"
              ? "#f44336"
              : params.value === "Alta"
              ? "#fb8c00"
              : "#1976d2",
          fontWeight: 600,
        }}
      >
        {params.value}
      </span>
    ),
  },
  {
    field: "status",
    headerName: "Estado",
    flex: 1,
    display: "flex",
    renderCell: (params) => (
      <Box
        sx={{
          backgroundColor:
            params.value === "Bloqueado"
              ? "#e53935"
              : params.value === "En cuarentena"
              ? "#ffb300"
              : "#64b5f6",
          color: "#fff",
          px: 1,
          height: 24,
          borderRadius: "999px",
          fontWeight: 500,
          fontSize: "0.75rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBlock: "auto",
          width: "100%",
        }}
      >
        {params.value}
      </Box>
    ),
  },
];

export default function ThreatsList() {
  const theme = useTheme();

  return (
    <Box mt={4}>
      <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
        Amenazas recientes
      </Typography>

      <Paper elevation={2} sx={{ p: 2, borderRadius: 2 }}>
        <div style={{ height: 300, width: "100%" }}>
          <DataGrid
            rows={threatData}
            columns={columns}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
            sx={{
              border: "none",
              rowHeight: 48,
              headerHeight: 50,
              ".MuiDataGrid-columnHeaders": {
                backgroundColor:
                  theme.palette.mode === "dark" ? "#2a2a2a" : "#f0f0f0",
                color: theme.palette.text.primary,
                fontWeight: 600,
              },
              ".MuiDataGrid-row:nth-of-type(even)": {
                backgroundColor:
                  theme.palette.mode === "dark" ? "#1e1e1e" : "#fafafa",
              },
              ".MuiDataGrid-cell": {
                color: theme.palette.text.primary,
              },
            }}
          />
        </div>
      </Paper>
    </Box>
  );
}

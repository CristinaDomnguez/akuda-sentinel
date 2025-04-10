import { Typography, Paper, Stack } from "@mui/material";

/**
 * Lista de eventos simulados del sistema (tipo consola técnica).
 */
const logs = [
  "[12:03] Escaneo completo iniciado.",
  "[12:04] Analizando archivos del sistema...",
  "[12:07] 3 amenazas detectadas.",
  "[12:08] Malware eliminado con éxito.",
  "[12:08] Protección en tiempo real: ACTIVADA.",
  "[12:09] Base de datos de virus actualizada.",
  "[12:10] Escaneo programado en 7 días.",
  "[12:11] Comprobación de integridad completada.",
  "[12:12] No se detectaron cambios sospechosos.",
  "[12:13] Monitor de red iniciado.",
  "[12:14] Revisión de puertos: OK.",
  "[12:15] Limpieza de caché completada.",
];

export default function LogsConsole() {
  return (
    <Stack spacing={2} mt={4}>
      <Typography variant="h6" fontWeight={700}>
        Consola del sistema
      </Typography>
      <Paper
        variant="outlined"
        sx={{
          backgroundColor: "#121212",
          color: "#90ee90",
          fontFamily: "monospace",
          padding: 2,
          maxHeight: 350,
          overflowY: "auto",
        }}
      >
        {logs.map((line, index) => (
          <Typography key={index} variant="body2">
            {line}
          </Typography>
        ))}
      </Paper>
    </Stack>
  );
}

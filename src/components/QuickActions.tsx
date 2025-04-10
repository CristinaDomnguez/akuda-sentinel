import { Box, Button, Stack, Typography, Snackbar } from "@mui/material";
import { useRef, useState } from "react";

/**
 * Componente con botones de acciones rápidas del antivirus.
 */
export default function QuickActions() {
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const handleAction = (action: string) => {
    setSnackbarMessage(`Acción iniciada: ${action}`);
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setSnackbarMessage(null);
      timeoutRef.current = null;
    }, 3000) as unknown as number;
  };

  return (
    <Box mt={4}>
      <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
        Acciones rápidas
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleAction("Escaneo profundo")}
        >
          Escaneo profundo
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleAction("Actualizar base de datos")}
        >
          Actualizar base
        </Button>

        <Button
          variant="contained"
          color="warning"
          onClick={() => handleAction("Limpiar archivos sospechosos")}
        >
          Limpiar sospechosos
        </Button>
      </Stack>

      <Snackbar
        open={!!snackbarMessage}
        message={snackbarMessage}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
    </Box>
  );
}

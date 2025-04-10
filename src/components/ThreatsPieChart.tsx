import { Box, Typography, useTheme, Paper } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import { Theme as NivoTheme } from "@nivo/core";

const data = [
  { id: "Malware", label: "Malware", value: 20 },
  { id: "Ransomware", label: "Ransomware", value: 10 },
  { id: "PUP", label: "PUP", value: 8 },
  { id: "Exploit", label: "Exploit", value: 5 },
];

export default function ThreatsPieChart() {
  const theme = useTheme();

  const nivoTheme: NivoTheme = {
    text: {
        color: theme.palette.text.primary,
    },
    tooltip: {
      container: {
        background: theme.palette.background.paper,
        color: theme.palette.text.primary,
        fontSize: 12,
      },
    },
    legends: {
      text: {
        fill: theme.palette.text.primary,
      },
    },
  };

  return (
    <Paper
      elevation={2}
      sx={{
        p: 2,
        backgroundColor: theme.palette.background.paper,
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        sx={{ color: "text.primary", mb: 2 }}
      >
        Distribución de amenazas
      </Typography>

      <Box sx={{ height: 300 }}>
        <ResponsivePie
          data={data}
          margin={{ top: 30, right: 60, bottom: 50, left: 60 }}
          innerRadius={0.5}
          padAngle={1}
          cornerRadius={3}
          colors={{ scheme: "nivo" }}
          borderWidth={1}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          enableArcLabels={false}
          arcLinkLabelsColor={theme.palette.text.primary}
          arcLinkLabelsTextColor={theme.palette.text.primary}
          theme={nivoTheme}
        />
      </Box>
    </Paper>
  );
}

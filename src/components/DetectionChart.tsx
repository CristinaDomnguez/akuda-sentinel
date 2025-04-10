import { Typography, Paper, Box, useTheme, Stack } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { Theme as NivoTheme } from "@nivo/core";

const data = [
  { type: "Web", Valor: 57.6 },
  { type: "Malware", Valor: 20.3 },
  { type: "Exploits", Valor: 2.3 },
  { type: "Ransomware", Valor: 1.2 },
];

export default function DetectionChart() {
  const theme = useTheme();

  const nivoTheme: NivoTheme = {
    text: {
      color: theme.palette.text.primary,
    },
    axis: {
      ticks: {
        text: {
          fill: theme.palette.text.primary,
        },
      },
      legend: {
        text: {
          fill: theme.palette.text.primary,
        },
      },
    },
    grid: {
      line: {
        stroke: theme.palette.divider,
      },
    },
  };

  return (
    <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
      <Stack spacing={2}>
        <Typography variant="h6" fontWeight={700}>
          Detecciones globales (últimos 30 días)
        </Typography>

        <Box sx={{ height: 400 }}>
          <ResponsiveBar
            data={data}
            keys={["Valor"]}
            indexBy="type"
            margin={{ top: 20, right: 30, bottom: 60, left: 60 }}
            padding={0.4}
            layout="vertical"
            axisBottom={{
              tickRotation: 0,
              tickPadding: 8,
            }}
            axisLeft={{
              tickValues: 5,
              legend: "Cantidad",
              legendPosition: "middle",
              legendOffset: -40,
            }}
            labelSkipHeight={12}
            enableLabel={false}
            theme={nivoTheme}
          />
        </Box>
      </Stack>
    </Paper>
  );
}

import { Typography, Paper, Box, useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { Theme } from "@nivo/core";

const data = [
  { tipo: "Web", valor: 57.6 },
  { tipo: "Malware", valor: 20.3 },
  { tipo: "Exploits", valor: 2.3 },
  { tipo: "Ransomware", valor: 1.2 },
];

const DetectionChart = () => {
  const theme = useTheme();

  const nivoTheme: Theme = {
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
    <Paper
      elevation={2}
      sx={{
        p: 3,
        backgroundColor: theme.palette.background.paper,
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        sx={{ color: "text.primary", mb: 2 }}
      >
        Detecciones globales (últimos 30 días)
      </Typography>

      <Box sx={{ height: 400 }}>
        <ResponsiveBar
          data={data}
          keys={["valor"]}
          indexBy="tipo"
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
    </Paper>
  );
};

export default DetectionChart;

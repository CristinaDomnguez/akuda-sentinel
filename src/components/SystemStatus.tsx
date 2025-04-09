import { Chip } from "@mui/material";
import ShieldIcon from "@mui/icons-material/Shield";
import WarningIcon from "@mui/icons-material/Warning";
import ErrorIcon from "@mui/icons-material/Error";

type Props = {
  status: "safe" | "warning" | "danger";
};

const statusMap = {
  safe: {
    label: "Protegido",
    color: "success",
    icon: <ShieldIcon fontSize="small" />,
  },
  warning: {
    label: "Precaución",
    color: "warning",
    icon: <WarningIcon fontSize="small" />,
  },
  danger: {
    label: "En Riesgo",
    color: "error",
    icon: <ErrorIcon fontSize="small" />,
  },
};

export default function SystemStatus({ status }: Props) {
  const data = statusMap[status];

  return (
    <Chip
      icon={data.icon}
      label={data.label}
      color={data.color as "success" | "warning" | "error"}
      variant="filled"
      sx={{
        fontWeight: "bold",
        fontSize: "1rem",
        height: 40,
        padding: "0 8px",
      }}
    />
  );
}

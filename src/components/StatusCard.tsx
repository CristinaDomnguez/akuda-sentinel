import { Card, CardContent, Typography, Button } from '@mui/material';
import { ReactNode } from 'react';

type StatusCardProps = {
  title: string;
  value: string;
  onAction?: () => void;
  actionLabel?: string;
  icon?: ReactNode;
  color?: string;
};

/**
 * Componente de tarjeta reutilizable para mostrar el estado de un módulo del antivirus.
 */
const StatusCard = ({
  title,
  value,
  onAction,
  actionLabel,
  icon,
  color = 'default',
}: StatusCardProps) => {
  return (
    <Card sx={{ minWidth: 250, borderLeft: `6px solid ${color}`, m: 1 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {value}
        </Typography>
        {onAction && (
          <Button onClick={onAction} size="small" sx={{ mt: 1 }}>
            {actionLabel}
          </Button>
        )}
        {icon && <div style={{ marginTop: 8 }}>{icon}</div>}
      </CardContent>
    </Card>
  );
};

export default StatusCard;

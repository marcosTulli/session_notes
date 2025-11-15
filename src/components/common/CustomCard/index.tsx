import React from 'react';
import { Card, CardContent, SxProps, Theme } from '@mui/material';

type Size = number | string;
export type MaxWidth = Size | { xs?: Size; sm?: Size; md?: Size; lg?: Size; xl?: Size };
export type Height = Size | { xs?: Size; sm?: Size; md?: Size; lg?: Size; xl?: Size };

export interface CustomCardProps {
  maxWidth?: MaxWidth;
  height?: Height;
  children: React.ReactNode;
  disableAutoMargin?: boolean;
  sx?: SxProps<Theme>;
  id?: string;
}

export const CustomCard: React.FC<CustomCardProps> = ({
  children,
  maxWidth,
  height,
  disableAutoMargin = false,
  id,
}) => {
  return (
    <Card
      id={id}
      elevation={3}
      variant="outlined"
      sx={{
        maxWidth,
        height,
        mx: disableAutoMargin ? 0 : 'auto',
        borderRadius: 3,
        overflow: 'hidden',
        bgColor: 'background.paper',
      }}
      aria-labelledby="custom-card"
    >
      <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 } }}>{children}</CardContent>
    </Card>
  );
};

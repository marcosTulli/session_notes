import React from 'react';
import { SxProps, Theme } from '@mui/material/styles';

export interface OverlayTriggerProps {
  id?: string;
  title?: React.ReactNode;
  openDialogButtonLabel: React.ReactNode;
  children?: React.ReactNode;
  isOpen: boolean;
  showButton?: boolean;
  buttonDisabled?: boolean;
  buttonTooltip?: string;
  maxWidth?: 'lg' | 'md' | 'sm' | 'xs' | false;
  toggle: () => void;
  renderContent: () => React.ReactNode;
  triggerButtonSx?: SxProps<Theme>;
  dialogSx?: SxProps<Theme>;
  dialogTitleSx?: SxProps<Theme>;
  dialogContentSx?: SxProps<Theme>;
}

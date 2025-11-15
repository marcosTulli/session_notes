import React from 'react';
import { Button, Dialog, DialogContent, DialogTitle, Tooltip } from '@mui/material';
import { OverlayTriggerProps } from '@/models';

export const OverlayTrigger: React.FC<OverlayTriggerProps> = ({
  id,
  title,
  isOpen,
  children,
  showButton,
  buttonDisabled,
  buttonTooltip,
  openDialogButtonLabel,
  maxWidth = 'sm',
  toggle,
  renderContent,
  triggerButtonSx,
  dialogSx,
  dialogTitleSx,
  dialogContentSx,
}) => {
  const triggerButton = (
    <Button
      sx={{ color: 'text.contrast', ...triggerButtonSx }}
      variant="contained"
      onClick={toggle}
      disabled={buttonDisabled}
    >
      {openDialogButtonLabel}
    </Button>
  );

  return (
    <>
      {showButton &&
        (buttonTooltip && buttonDisabled ? (
          <Tooltip
            title={buttonTooltip}
            slotProps={{
              tooltip: {
                sx: {
                  fontSize: '16px',
                },
              },
            }}
          >
            <span>{triggerButton}</span>
          </Tooltip>
        ) : (
          triggerButton
        ))}
      <Dialog
        open={isOpen}
        onClose={toggle}
        aria-labelledby={`${id}-dialog-title`}
        maxWidth={maxWidth}
        fullWidth
        sx={dialogSx}
      >
        {title && (
          <DialogTitle
            sx={{ bgcolor: 'background.paper', ...dialogTitleSx }}
            id={`${id}-dialog-title`}
          >
            {title}
          </DialogTitle>
        )}
        <DialogContent sx={{ bgcolor: 'background.paper', ...dialogContentSx }} dividers>
          {renderContent ? renderContent() : children}
        </DialogContent>
      </Dialog>
    </>
  );
};

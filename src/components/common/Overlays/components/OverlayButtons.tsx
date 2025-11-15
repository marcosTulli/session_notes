import React from 'react';
import { Button, Box, Tooltip } from '@mui/material';
import { DialogButtonsProps } from '@models';

export const OverlayButtons: React.FC<DialogButtonsProps> = ({
  disabled = false,
  tooltip,
  cancelButtonVariant,
  cancelButtonLabel,
  acceptButtonLabel,
  acceptButtonVariant = 'contained',
  acceptButtonColor = 'primary',
  onClickCancel,
  onClickAccept,
}) => {
  const submitButton = (
    <Button
      variant={acceptButtonVariant}
      type={onClickAccept ? 'button' : 'submit'}
      disabled={disabled}
      color={acceptButtonColor}
      onClick={onClickAccept}
    >
      {acceptButtonLabel}
    </Button>
  );

  return (
    <Box display="flex" justifyContent="flex-end" mt={4} gap={2}>
      <Button variant={cancelButtonVariant} onClick={onClickCancel} color="error">
        {cancelButtonLabel}
      </Button>
      {tooltip && disabled ? (
        <Tooltip title={tooltip}>
          <span>{submitButton}</span>
        </Tooltip>
      ) : (
        submitButton
      )}
    </Box>
  );
};

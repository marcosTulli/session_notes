import { OverlayTrigger } from './OverlayTrigger';
import { useOverlays } from '@hooks';
import React from 'react';

interface CreateItemDialogProps {
  title: string;
  acceptButtonLabel: string;
  cancelButtonLabel: string;
  openDialogButtonLabel: string;
  buttonDisabled?: boolean;
  buttonTooltip?: string;
  customContent: () => React.ReactNode;
  maxWidth?: 'lg' | 'md' | 'sm' | 'xs';
}

export const CreateItemOverlay = ({
  title,
  openDialogButtonLabel,
  buttonDisabled,
  buttonTooltip,
  customContent,
  maxWidth = 'sm',
}: CreateItemDialogProps) => {
  const { toggleCreateItemOverlay, isOpenCreateOverlay } = useOverlays();
  return (
    <OverlayTrigger
      title={title}
      openDialogButtonLabel={openDialogButtonLabel}
      toggle={toggleCreateItemOverlay}
      isOpen={isOpenCreateOverlay}
      showButton
      buttonDisabled={buttonDisabled}
      buttonTooltip={buttonTooltip}
      maxWidth={maxWidth}
      renderContent={() => customContent()}
    />
  );
};

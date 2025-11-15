import React from 'react';
import { OverlayTrigger } from './OverlayTrigger';
import { useOverlays } from '@hooks';
import { Alert } from './Alert';

interface DeleteItemOverlayProps {
  id: string;
  content: { alertMessage: string };
  acceptButtonLabel: string;
  cancelButtonLabel: string;
  onSubmit: () => void;
}

export const DeleteItemOverlay: React.FC<DeleteItemOverlayProps> = ({
  id,
  content,
  acceptButtonLabel,
  cancelButtonLabel,
  onSubmit,
}) => {
  const { toggleDeleteItemOverlay, isOpendeleteOverlay } = useOverlays();

  const toggle = () => {
    toggleDeleteItemOverlay();
  };

  return (
    <OverlayTrigger
      id={id}
      toggle={toggle}
      isOpen={isOpendeleteOverlay}
      openDialogButtonLabel="delete"
      renderContent={() => (
        <Alert
          content={content}
          toggle={toggle}
          onSubmit={onSubmit}
          acceptButtonLabel={acceptButtonLabel}
          cancelButtonLabel={cancelButtonLabel}
        />
      )}
    />
  );
};

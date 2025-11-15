import React from 'react';
import { Box } from '@mui/material';
import { TitleXLarge } from '@components/common/Text/components';
import { CreateItemOverlay } from '@components/common/Overlays';
import { useOverlays } from '@hooks';
import { CreateNoteForm } from './CreateNoteForm';
import { useNotes } from '../hooks/useNotes';

export const NotesPageHeader: React.FC = () => {
  const { handleCreateNote } = useNotes();
  const { toggleCreateItemOverlay } = useOverlays();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      maxWidth="1200px"
    >
      <TitleXLarge>Notes</TitleXLarge>
      <CreateItemOverlay
        title="Create New Note"
        openDialogButtonLabel="Add Note"
        acceptButtonLabel="Create"
        cancelButtonLabel="Cancel"
        maxWidth="sm"
        customContent={() => (
          <CreateNoteForm onSubmit={handleCreateNote} onCancel={toggleCreateItemOverlay} />
        )}
      />
    </Box>
  );
};

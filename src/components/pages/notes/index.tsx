import React from 'react';
import { DeleteItemOverlay } from '@components/common/Overlays';
import { NotesPageContainer } from './components/NotesPageContainer';
import { NotesPageHeader } from './components/NotesPageHeader';
import { useNotes } from './hooks/useNotes';
import { NotesPageBody } from './components/NotesPagesBody';

export const NotesPageContent: React.FC = () => {
  const { noteToDelete, handleConfirmDelete } = useNotes();

  return (
    <NotesPageContainer>
      <NotesPageHeader />

      <NotesPageBody />
      {noteToDelete && (
        <DeleteItemOverlay
          id="delete-note-dialog"
          content={{
            alertMessage:
              'Are you sure you want to delete this note? This action cannot be undone.',
          }}
          acceptButtonLabel="Delete"
          cancelButtonLabel="Cancel"
          onSubmit={handleConfirmDelete}
        />
      )}
    </NotesPageContainer>
  );
};

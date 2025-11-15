import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { TitleXLarge } from '@components/common/Text/components';
import { useGetNoteById } from '../../hooks/useGetNoteById';
import { NoteCard } from '../NoteCard';
import { BackToNotesButton } from './BackToNotesButton';

export const NoteDetailPageContent: React.FC = () => {
  const { noteId } = useParams<{ noteId: string }>();
  const { note, isLoading } = useGetNoteById(noteId || '');

  if (isLoading) {
    return (
      <Box width="100%" display="flex" justifyContent="center" alignItems="center" py={8}>
        <CircularProgress />
      </Box>
    );
  }

  if (!note) {
    return (
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={3}
        px={{ xs: 2, sm: 3, md: 4 }}
        py={3}
      >
        <BackToNotesButton />
        <TitleXLarge sx={{ color: 'text.secondary', mt: 4 }}>Note not found</TitleXLarge>
      </Box>
    );
  }

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={3}
      px={{ xs: 2, sm: 3, md: 4 }}
      py={3}
    >
      <Box width="100%" maxWidth="800px">
        <BackToNotesButton />
        <NoteCard note={note} displayFullNotes={true} />
      </Box>
    </Box>
  );
};

import React from 'react';
import { EmptyNotes } from './EmptyNotes';
import { NotesGrid } from './NotesGrid';
import { useNotes } from '../hooks/useNotes';

export const NotesPageBody: React.FC = () => {
  const { notes } = useNotes();

  if (notes.length === 0) {
    return <EmptyNotes />;
  }
  return <NotesGrid />;
};

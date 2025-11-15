import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from '@models/enums';

export function useNoteCard() {
  const navigate = useNavigate();

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return `${text.substring(0, maxLength)}...`;
  };

  const handleCardClick = (e: React.MouseEvent, displayFullNotes: boolean, noteId: string) => {
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    if (!displayFullNotes) {
      const path: string = Routes.NoteDetail.replace(':noteId', noteId);
      navigate(path);
    }
  };

  const handleDeleteClick = (
    e: React.MouseEvent,
    onDelete: (id: string) => void,
    noteId: string,
  ) => {
    e.stopPropagation();
    if (onDelete) {
      onDelete(noteId);
    }
  };

  return {
    handleDeleteClick,
    handleCardClick,
    truncateText,
  };
}

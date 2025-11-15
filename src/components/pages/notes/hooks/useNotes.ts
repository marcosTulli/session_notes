import { useOverlays } from '@/hooks';
import { notesStore } from '../store/notesStore';
import { NoteDTO } from '@/models/domain/note/noteDTO';
import { useGetNotes } from './useGetNotes';
import { useCreateNote } from './useCreateNote';
import { useDeleteNote } from './useDeleteNote';

export function useNotes() {
  const { noteToDelete, setNoteToDelete } = notesStore();
  const { toggleCreateItemOverlay, toggleDeleteItemOverlay } = useOverlays();
  const { createNote } = useCreateNote();
  const { deleteNote } = useDeleteNote();

  const { notes, isLoading, error } = useGetNotes();

  const handleCreateNote = (noteData: Omit<NoteDTO, 'id'>) => {
    createNote(noteData);
    toggleCreateItemOverlay();
  };

  const handleDeleteClick = (id: string) => {
    setNoteToDelete(id);
    toggleDeleteItemOverlay();
  };

  const handleConfirmDelete = () => {
    if (noteToDelete) {
      deleteNote(noteToDelete);
      setNoteToDelete(null);
    }
    toggleDeleteItemOverlay();
  };

  const getNoteById = (id: string) => {
    return notes.find((note) => note.id() === id);
  };

  return {
    notes,
    isLoading,
    error,
    noteToDelete,
    handleCreateNote,
    deleteNote,
    getNoteById,
    setNoteToDelete,
    handleDeleteClick,
    handleConfirmDelete,
  };
}

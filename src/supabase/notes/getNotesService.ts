import supabase from '@/config/app/supabase';
import { NoteDTO } from '@/models/domain/note/noteDTO';
import { enqueueSnackbar } from 'notistack';

export const getNotesService = async (): Promise<{
  data: NoteDTO[] | null;
  error: Error | null;
}> => {
  const { data, error } = await supabase.from('session_notes').select();

  if (error) {
    enqueueSnackbar(error.message, {
      variant: 'error',
    });
    return { data: null, error: new Error(error.message) };
  }

  return { data: data as NoteDTO[], error: null };
};

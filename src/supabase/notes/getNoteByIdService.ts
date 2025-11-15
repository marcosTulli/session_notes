import supabase from '@/config/app/supabase';
import { NoteDTO } from '@/models/domain/note/noteDTO';

export const getNoteByIdService = async (
  id: string,
): Promise<{
  data: NoteDTO | null;
  error: Error | null;
}> => {
  const { data, error } = await supabase.from('session_notes').select().eq('id', id).single();

  if (error) {
    return { data: null, error: new Error(error.message) };
  }

  return { data: data as NoteDTO, error: null };
};

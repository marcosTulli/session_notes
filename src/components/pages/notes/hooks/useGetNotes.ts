import { getNotesService } from '@/supabase/notes/getNotesService';
import { QueryKeys } from '@config';
import { useQuery } from '@tanstack/react-query';
import { Note } from '@/models/domain/note';

export function useGetNotes() {
  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKeys.Notes],
    queryFn: getNotesService,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    staleTime: 5 * 60 * 1000,
  });

  const notes = data?.data?.map((noteDTO) => Note.FromJSON(noteDTO)) ?? [];

  return { notes, isLoading, error };
}

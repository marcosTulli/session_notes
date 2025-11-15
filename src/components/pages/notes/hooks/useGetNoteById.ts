import { getNoteByIdService } from '@/supabase/notes/getNoteByIdService';
import { QueryKeys } from '@config';
import { useQuery } from '@tanstack/react-query';
import { Note } from '@/models/domain/note';

export function useGetNoteById(id: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKeys.Notes, id],
    queryFn: () => getNoteByIdService(id),
    enabled: !!id,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    staleTime: 5 * 60 * 1000,
  });

  const note = data?.data ? Note.FromJSON(data.data) : undefined;

  return { note, isLoading, error };
}

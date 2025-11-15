import { useMutation, useQueryClient } from '@tanstack/react-query';
import { mutationHandlers } from '@utils/index';
import { deleteNoteService } from '@/supabase/notes/deleteNoteService';
import { QueryKeys } from '@config';

export function useDeleteNote() {
  const queryClient = useQueryClient();

  const buildSuccessMessage = () => {
    return 'Note deleted successfully';
  };

  const { onSuccess } = mutationHandlers({
    queryClient,
    queryKey: [QueryKeys.Notes],
    buildSuccessMessage,
  });

  const { mutateAsync: deleteNote, isPending } = useMutation({
    mutationFn: (id: string) => deleteNoteService(id),
    onSuccess,
  });

  return { deleteNote, isPending };
}

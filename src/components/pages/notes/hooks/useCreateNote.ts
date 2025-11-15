import { useMutation, useQueryClient } from '@tanstack/react-query';
import { mutationHandlers } from '@utils/index';
import { createNoteService } from '@/supabase/notes/createNoteService';
import { QueryKeys } from '@config';
import { NoteDTO } from '@/models/domain/note/noteDTO';

export function useCreateNote() {
  const queryClient = useQueryClient();

  const buildSuccessMessage = () => {
    return `Note created successfully`;
  };

  const { onSuccess } = mutationHandlers({
    queryClient,
    queryKey: [QueryKeys.Notes],
    buildSuccessMessage,
  });

  const { mutateAsync: createNote, isPending } = useMutation({
    mutationFn: (values: Omit<NoteDTO, 'id'>) => createNoteService(values),
    onSuccess,
  });

  return { createNote, isPending };
}

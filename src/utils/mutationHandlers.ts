import { QueryClient } from '@tanstack/react-query';
import { enqueueSnackbar } from 'notistack';

interface MutationHandlerOptions<TSuccessArgs = unknown, TErrorArgs = unknown> {
  queryClient: QueryClient;
  queryKey: string[];
  successMessage?: string;
  errorMessage?: string;
  onSuccessCallback?: (args: TSuccessArgs) => void;
  onErrorCallback?: (args: TErrorArgs) => void;
  buildSuccessMessage?: (args: Record<string, string>) => void;
}

export function mutationHandlers<TSuccessArgs = unknown, TErrorArgs = unknown>({
  queryKey,
  queryClient,
  successMessage,
  onErrorCallback,
  onSuccessCallback,
  buildSuccessMessage,
}: MutationHandlerOptions<TSuccessArgs, TErrorArgs>) {
  const getSuccessMessage = (args: TSuccessArgs) => {
    if (successMessage) {
      return successMessage;
    } else if (buildSuccessMessage) {
      return buildSuccessMessage(args as Record<string, string>);
    } else {
      return 'Succcess';
    }
  };

  const onSuccess = async (args: TSuccessArgs) => {
    await queryClient.invalidateQueries({ queryKey });
    const message = getSuccessMessage(args);
    enqueueSnackbar(message ?? 'Success', { variant: 'success' });
    if (onSuccessCallback) {
      onSuccessCallback(args);
    }
  };

  const onError = async (args: TErrorArgs) => {
    await queryClient.invalidateQueries({ queryKey });
    if (onErrorCallback) {
      onErrorCallback(args);
    }
  };

  return { onSuccess, onError };
}

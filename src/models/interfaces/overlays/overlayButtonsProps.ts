export interface DialogButtonsProps {
  disabled?: boolean;
  tooltip?: string;
  cancelButtonVariant?: 'text' | 'outlined' | 'contained';
  cancelButtonLabel: string;
  acceptButtonLabel: string;
  acceptButtonVariant?: 'text' | 'outlined' | 'contained';
  acceptButtonColor?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
  onClickCancel: () => void;
  onClickAccept?: () => void;
}

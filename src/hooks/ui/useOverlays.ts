import { overlayStore, overlays } from '@store';

export function useOverlays() {
  const toggle = overlayStore((state) => state.toggle);
  const isOpenAlertOverlay = overlayStore((state) => state.isOpenAlertOverlay);
  const isOpenCreateOverlay = overlayStore((state) => state.isOpenCreateOverlay);
  const isOpendeleteOverlay = overlayStore((state) => state.isOpendeleteOverlay);

  const toggleCreateItemOverlay = () => {
    toggle({ overlay: overlays.create });
  };
  const toggleDeleteItemOverlay = () => {
    toggle({ overlay: overlays.delete });
  };
  const toggleAlertOverlay = () => {
    toggle({ overlay: overlays.alert });
  };

  return {
    isOpenAlertOverlay,
    isOpenCreateOverlay,
    isOpendeleteOverlay,
    toggle,
    toggleAlertOverlay,
    toggleCreateItemOverlay,
    toggleDeleteItemOverlay,
  };
}

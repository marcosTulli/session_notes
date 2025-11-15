import { create } from 'zustand';

export const overlays = {
  alert: 'isOpenAlertOverlay',
  create: 'isOpenCreateOverlay',
  delete: 'isOpendeleteOverlay',
} as const;

type OverlayKey = keyof typeof overlays;
type OverlayStateKeys = (typeof overlays)[OverlayKey];

type OverlayState = {
  [K in OverlayStateKeys]: boolean;
} & {
  toggle: (params: { overlay: OverlayStateKeys }) => void;
};

const initialState = Object.values(overlays).reduce(
  (state, key) => {
    state[key] = false;
    return state;
  },
  {} as Record<OverlayStateKeys, boolean>,
);

export const overlayStore = create<OverlayState>((set) => ({
  ...initialState,
  toggle: ({ overlay }) =>
    set((state) => ({
      [overlay]: !state[overlay],
    })),
}));

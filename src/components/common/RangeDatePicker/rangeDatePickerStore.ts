import { create } from 'zustand';

export interface DateRange {
  from: Date | null;
  to: Date | null;
}

export interface ListingsFilter {
  date: DateRange;
}

interface ListingsFilterState extends ListingsFilter {
  setDateRange: (from: Date | null, to: Date | null) => void;
  resetFilters: () => void;
}

export const rangeDatePickerStore = create<ListingsFilterState>((set) => ({
  date: { from: null, to: null },

  setDateRange: (from, to) =>
    set(() => ({
      date: { from, to },
    })),

  resetFilters: () =>
    set(() => ({
      date: { from: null, to: null },
    })),
}));

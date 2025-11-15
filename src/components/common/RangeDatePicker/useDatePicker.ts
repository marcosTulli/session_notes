import { rangeDatePickerStore } from './rangeDatePickerStore';

export function useRangeDatePicker() {
  const date = rangeDatePickerStore((state) => state.date);
  const setDateRange = rangeDatePickerStore((state) => state.setDateRange);
  const resetFilters = rangeDatePickerStore((state) => state.resetFilters);

  return {
    date,
    setDateRange,
    resetFilters,
  };
}

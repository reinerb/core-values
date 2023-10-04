import { create } from "zustand";
import { baseValues, type Value } from "../Values";

type CoreValuesState = {
  index: number;
  values: Value[];
  yesValues: Value[];
  noValues: Value[];
  acceptValue: () => void;
  refuseValue: () => void;
  skipValue: () => void;
};

export const useCoreValuesStore = create<CoreValuesState>((set) => ({
  index: 0,
  values: [...baseValues],
  yesValues: [],
  noValues: [],
  // Move a Value to the yesValues array
  acceptValue: () =>
    set((state) => ({
      yesValues: [...state.yesValues, state.values[0]],
      values: [
        ...state.values.slice(0, state.index),
        ...state.values.slice(state.index + 1),
      ],
    })),
  // Move a Value to the NoValues array
  refuseValue: () =>
    set((state) => ({
      noValues: [...state.noValues, state.values[0]],
      values: [
        ...state.values.slice(0, state.index),
        ...state.values.slice(state.index + 1),
      ],
      index: state.index >= state.values.length ? 0 : state.index,
    })),
  // Increment the index to skip a Value for now
  // Return to 0 when passing end of values array
  skipValue: () =>
    set((state) => ({
      index: state.index >= state.values.length - 1 ? 0 : state.index + 1,
    })),
}));

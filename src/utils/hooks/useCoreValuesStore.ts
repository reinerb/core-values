import { create } from "zustand";
import { baseValues, type Value } from "../Values";
import { randomizeArray } from "../functions/randomizeArray";

type CoreValuesState = {
  index: number;
  stage: number;
  values: Value[];
  yesValues: Value[];
  advance: () => void;
  skipValue: () => void;
  rejectValue: () => void;
  acceptValue: () => void;
};

export const useCoreValuesStore = create<CoreValuesState>((set) => ({
  index: 0,
  stage: 0,
  values: randomizeArray(baseValues),
  yesValues: [],

  // Advance to the next stage
  advance: () => set((state) => ({ stage: state.stage + 1 })),

  // Increment the index to skip a Value for now
  // Return to 0 when passing end of values array
  skipValue: () =>
    set((state) => ({
      index: state.index >= state.values.length - 1 ? 0 : state.index + 1,
    })),

  // Remove a Value
  rejectValue: () => {
    set((state) => ({
      values: [
        ...state.values.slice(0, state.index),
        ...state.values.slice(state.index + 1),
      ],
    }));
    set((state) => {
      if (state.values.length === 0) {
        return {
          stage: state.stage + 1,
        };
      } else {
        return {
          index: state.index >= state.values.length ? 0 : state.index,
        };
      }
    });
  },

  // Move a Value to the yesValues array
  acceptValue: () => {
    set((state) => ({
      yesValues: [...state.yesValues, state.values[state.index]],
    }));
    set((state) => ({
      values: [
        ...state.values.slice(0, state.index),
        ...state.values.slice(state.index + 1),
      ],
    }));
    set((state) => {
      // If the array of Values is empty,
      // proceed to the next stage.
      if (state.values.length === 0) {
        return {
          stage: state.stage + 1,
        };
      } else {
        return {
          index: state.index >= state.values.length ? 0 : state.index,
        };
      }
    });
  },
}));

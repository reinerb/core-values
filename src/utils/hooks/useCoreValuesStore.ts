import { create } from "zustand";
import { baseValues, type Value } from "../Values";
import { randomizeArray } from "../functions/randomizeArray";

type CoreValuesState = {
  index: number;
  stage: number;
  values: Value[];
  yesValues: Value[];
  topTen: Value[];
  topFive: Value[];
  advance: () => void;
  skipValue: () => void;
  rejectValue: () => void;
  acceptValue: () => void;
  toggleTopTen: (value: Value) => void;
  toggleTopFive: (value: Value) => void;
};

export const useCoreValuesStore = create<CoreValuesState>((set) => ({
  index: 0,
  stage: 2,
  values: randomizeArray(baseValues),
  yesValues: [],
  topTen: [],
  topFive: [],

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

  // Toggles a value in the top 10 list
  toggleTopTen: (value) => {
    set((state) => {
      const index = state.topTen.map((value) => value.name).indexOf(value.name);
      return index >= 0
        ? {
            topTen: [
              ...state.topTen.slice(0, index),
              ...state.topTen.slice(index + 1),
            ],
          }
        : {
            topTen: [...state.topTen, value],
          };
    });
  },

  // Toggles a value in the top 5 list
  toggleTopFive: (value) => {
    set((state) => {
      const index = state.topFive
        .map((value) => value.name)
        .indexOf(value.name);
      return index >= 0
        ? {
            topFive: [
              ...state.topFive.slice(0, index),
              ...state.topFive.slice(index + 1),
            ],
          }
        : {
            topFive: [...state.topFive, value],
          };
    });
  },
}));

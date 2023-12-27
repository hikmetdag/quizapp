import { createSlice } from "@reduxjs/toolkit";

export const questionReducer = createSlice({
  name: "questions",
  initialState: {
    questions: {
      queue: {},
      answer:[],
      trace: 0,
    }
  },
  reducer: {
    startExamAction: (state, action) => {
      return {
        ...state,
        queue: action.payload,
      };
    },
  },
});

export const { startExamAction } = questionReducer.actions;
export default questionReducer.reducer;

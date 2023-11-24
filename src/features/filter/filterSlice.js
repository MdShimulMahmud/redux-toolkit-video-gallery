const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  tags: [],
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const indexOfTagToRemove = state.tags.indexOf(action.payload);

      if (indexOfTagToRemove !== -1) {
        state.tags.splice(indexOfTagToRemove, 1);
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { tagSelected, searched, tagRemoved } = filterSlice.actions;

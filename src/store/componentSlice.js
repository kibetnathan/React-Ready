// src/store/componentSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchComponents = createAsyncThunk(
  "components/fetchComponents",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("/data/components.json");
      if (!res.ok) throw new Error("Failed to fetch components");
      const data = await res.json();
      return data.components;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const componentsSlice = createSlice({
  name: "components",
  initialState: {
    items: [],
    status: "idle",
    error: null,
    searchQuery: "", // add search query state
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComponents.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchComponents.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchComponents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setSearchQuery } = componentsSlice.actions;
export default componentsSlice.reducer;

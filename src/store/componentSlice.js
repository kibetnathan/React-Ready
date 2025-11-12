import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchComponents = createAsyncThunk(
  'components/fetchComponents',
  async () => {
    const response = await fetch('/src/data/components.json');
    const data = await response.json();
    return data.components;
  }
);

const componentsSlice = createSlice({
  name: 'components',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComponents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchComponents.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchComponents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default componentsSlice.reducer;

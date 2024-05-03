import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Chart {
  id: string;
  // Define the rest of properties according to your Chart model
  // ...
}

let initialState: Chart[] = [];

try {
  const storedData = localStorage.getItem('charts');
  if (storedData) {
    initialState = JSON.parse(storedData);
  }
} catch (e) {
  console.warn("Failed to parse charts data from localStorage", e);
}

const chartsSlice = createSlice({
  name: 'charts',
  initialState,
  reducers: {
    addChart: (state: Chart[], action: PayloadAction<Chart>) => {
      state.push(action.payload);
    },
    updateChart: (state: Chart[], action: PayloadAction<Chart>) => {
      const { id, ...updatedChart } = action.payload;
      const chartIndex = state.findIndex(chart => chart.id === id);
      if (chartIndex >= 0) {
        state[chartIndex] = { id, ...updatedChart };
      }
    },
    removeChart: (state: Chart[], action: PayloadAction<string>) => {
      const chartIndex = state.findIndex(chart => chart.id === action.payload);
      if (chartIndex >= 0) {
        state.splice(chartIndex, 1);
      }
    },
  },
});

export const { addChart, updateChart, removeChart } = chartsSlice.actions;

export default chartsSlice.reducer;

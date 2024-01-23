import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVacations = createAsyncThunk(
  "vacations/fetchVacations",
  async ({ pageSize, pageIndex }) => {
    const response = await axios.get(
      `http://localhost:8000/vacation/get-all-vacations?pageSize=${pageSize}&pageIndex=${pageIndex}`
    );
    return response.data.data;
  }
);

export const createVacation = createAsyncThunk(
  "vacation/createVacation",
  async (vacationData) => {
    const response = await axios.post(
      "http://localhost:8000/vacation/create/658839433bd62f956a2f0876",
      vacationData
    );
    return response.data.data;
  }
);
const vacationSlice = createSlice({
  name: "vacation",
  initialState: {
    vacations: [],
    status: "idle",
    error: null,
    pageIndex: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createVacation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createVacation.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.vacations = [...state.vacations, action.payload];
      })
      .addCase(createVacation.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchVacations.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchVacations.fulfilled, (state, action) => {
        state.status = "succeeded";
        const tempArrayObj = {};
        const tempArray = [];
        // state.vacations = action.payload;
        [...state.vacations, ...action.payload].forEach((item) => {
          tempArrayObj[item._id] = item;
        });
        for (const key in tempArrayObj) {
          const element = tempArrayObj[key];
          tempArray.push(element);
        }
        state.vacations = [...tempArray];
        // state.vacations = [...state.vacations, ...action.payload];
        // state.vacations.sort(
        //   (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        // );
        state.pageIndex += 1;
      })
      .addCase(fetchVacations.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default vacationSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVacations = createAsyncThunk(
  "vacation/fetchVacations",
  async ({ pageSize, pageIndex }) => {
    const response = await axios.get(
      `${process.env.API_URL}vacation/get-all-vacations?pageSize=${pageSize}&pageIndex=${pageIndex}`,
      {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      }
    );
    return response.data.data;
  }
);
export const createVacation = createAsyncThunk(
  "vacation/createVacation",
  async ({ vacationData, userId }) => {
    const response = await axios.post(
      `${process.env.API_URL}vacation/create/`,
      vacationData,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    return response.data.data;
  }
);

export const fetchVacationDetail = createAsyncThunk(
  "vacation/fetchDetail",
  async (id) => {
    const response = await axios.get(
      `${process.env.API_URL}vacation/detail/${id}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    return response.data.data;
  }
);

export const fetchInProgressVacations = createAsyncThunk(
  "vacation/fetchInProgress",
  async () => {
    const response = await axios.get(
      `${process.env.API_URL}vacation/in-progess/`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    return response.data.data;
  }
);

const vacationSlice = createSlice({
  name: "vacation",
  initialState: {
    vacations: [],
    inProgressVacations: [],
    status: "idle",
    error: null
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
      // .addCase(fetchVacations.pending, (state) => {
      //   state.status = "loading";
      // })
      // .addCase(fetchVacations.fulfilled, (state, action) => {
      //   state.status = "succeeded";
      //   state.vacations = [...state.vacations, ...action.payload];
      // })
      // .addCase(fetchVacations.rejected, (state, action) => {
      //   state.status = "failed";
      //   state.error = action.error.message;
      // })
      .addCase(fetchVacations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.vacations = [...state.vacations, ...action.payload];
        state.currentPage += 1;
        state.hasMore = state.currentPage < state.totalPages;
      })
      .addCase(fetchVacationDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchVacationDetail.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (state.detail !== action.payload) {
          state.detail = action.payload;
        }
        
      })
      .addCase(fetchVacationDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchInProgressVacations.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchInProgressVacations.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.inProgressVacations = action.payload;
      })
      .addCase(fetchInProgressVacations.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  },
});

export default vacationSlice.reducer;

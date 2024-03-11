import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  users: null,
  error: null,
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: () => {},
    setUser: () => {},
  },
  extraReducers: (builder) => {
    const obj = builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.users = null;
        state.error = action.payload;
      });

    return obj;
  },
});

export const { getUser } = userSlice.actions;

export default userSlice.reducer;

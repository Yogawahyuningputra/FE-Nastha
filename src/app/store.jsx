import { configureStore } from "@reduxjs/toolkit";
import mahasiswaReducer from "../features/mahasiswa/mahasiswaSlice";

export const store = configureStore({
  reducer: {
    mahasiswa: mahasiswaReducer,
  },
});

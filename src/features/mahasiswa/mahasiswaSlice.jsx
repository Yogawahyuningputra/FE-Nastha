import { createSlice } from "@reduxjs/toolkit";

const mahasiswaReducer = createSlice({
  name: "mahasiswa",
  initialState: {
    list: [],
    isLoading: false,
  },
  reducers: {
    addMahasiswa: (state, action) => {
      state.list.push(action.payload);
      state.isLoading = false;
    },

    updateMahasiswa: (state, action) => {
      const { id, name } = action.payload;
      const listMahasiswa = state.list.find((mahasiswa) => mahasiswa.id === id);
      if (listMahasiswa) {
        listMahasiswa.name = name;
      }
      state.isLoading = false;
    },
    removeMahasiswa: (state, action) => {
      const id = action.payload;
      state.list = state.list.filter((mahasiswa) => mahasiswa.id !== id);
      state.isLoading = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { addMahasiswa, updateMahasiswa, removeMahasiswa, setLoading } =
  mahasiswaReducer.actions;
export default mahasiswaReducer.reducer;

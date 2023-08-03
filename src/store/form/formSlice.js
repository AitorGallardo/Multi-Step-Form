import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    email: '',
    phone: '',
    selectedPlan: '',
    billingPlan: '',
  },
  reducers: {
    setFirstFormData: (state,{payload}) => {
      state.name = payload.name;
      state.email = payload.email;
      state.phone = payload.phone;
    },
  },
});

export const { setFirstFormData } = formSlice.actions;

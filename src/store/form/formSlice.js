import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    email: '',
    phone: '',
    selectedPlan: '',
    billingPlan: '',
    addons: [],
  },
  reducers: {
    setFirstFormData: (state,{payload}) => {
      state.name = payload.name;
      state.email = payload.email;
      state.phone = payload.phone;
    },
    setSecondFormData: (state,{payload}) => {
      state.selectedPlan = payload.selectedPlan;
      state.billingPlan = payload.billingPlan;
    },
    setThirdFormData: (state,{payload}) => {
      state.addons = [...payload.addons];
    },
  },
});

export const { setFirstFormData,setSecondFormData,setThirdFormData } = formSlice.actions;

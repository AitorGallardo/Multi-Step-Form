import { createSlice } from '@reduxjs/toolkit';
import { SUBSCRIPTION_TIERS,BILLING_PLANS } from '../../constants/consts';

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    email: '',
    phone: '',
    selectedPlan: SUBSCRIPTION_TIERS.ARCADE,
    billingPlan: BILLING_PLANS.MONTHLY,
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

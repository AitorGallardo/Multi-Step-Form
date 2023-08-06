import { createSlice } from '@reduxjs/toolkit';
import { INIT_FIRST_FORM, SUBSCRIPTION_TIERS,BILLING_PLANS } from '../../constants/consts';

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    personalInfo: INIT_FIRST_FORM,
    selectedPlan: SUBSCRIPTION_TIERS.ARCADE,
    billingPlan: BILLING_PLANS.MONTHLY,
    addons: [],
  },
  reducers: {
    setFirstFormData: ({personalInfo},{payload}) => {
      personalInfo.name = payload.name;
      personalInfo.email = payload.email;
      personalInfo.phone = payload.phone;
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

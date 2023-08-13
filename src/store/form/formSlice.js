import { createSlice } from '@reduxjs/toolkit';
import { INIT_FIRST_FORM, SUBSCRIPTION_TIERS,BILLING_PLANS } from '../../constants/consts';

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    personalInfo: INIT_FIRST_FORM,
    validPersonalInfo: false,
    selectedPlan: SUBSCRIPTION_TIERS.ARCADE.VALUE,
    billingPlan: BILLING_PLANS.MONTHLY,
    addons: [],
    firstStepCompleted: false,
    secondStepCompleted: false,
    thirdStepCompleted: false,
  },
  reducers: {
    setFirstFormData: (state,{payload}) => {
      state.personalInfo.name = payload.formState.name;
      state.personalInfo.email = payload.formState.email;
      state.personalInfo.phone = payload.formState.phone;
      state.validPersonalInfo = payload.isFormValid;
      state.firstStepCompleted = true;
    },
    setSecondFormData: (state,{payload}) => {
      state.selectedPlan = payload.selectedPlan;
      state.billingPlan = payload.billingPlan;
    },
    setThirdFormData: (state,{payload}) => {
      state.addons = [...payload.addons];
    },
    setFirstStepCompleted: (state,{payload}) => {
      state.firstStepCompleted = payload;
    },
    setSecondStepCompleted: (state,{payload}) => {
      state.secondStepCompleted = payload;
    },
    setThirdStepCompleted: (state,{payload}) => {
      state.thirdStepCompleted = payload;
    },
  },
});

export const { setFirstFormData,setSecondFormData,setThirdFormData,setFirstStepCompleted,setSecondStepCompleted,setThirdStepCompleted } = formSlice.actions;

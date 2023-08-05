import { useState } from 'react';
import { BillingCard } from '../components/BillingCard';
import { ToggleIcon } from '../components/ToggleIcon';
import {
  BUTTONS_TEXT,
  FORMS,
  SUBSCRIPTION_TIERS,
  TIME_TYPES,
} from '../constants/consts';
import { FormLayout } from '../layout/FormLayout';
import { useDispatch } from 'react-redux';
import { setSecondFormData } from '../store/form';
import CheckOption from '../components/CheckOption';

const { ADDONS } = FORMS;

export const AddonsPage = () => {
  const dispatch = useDispatch();

  const [selectedPlan, setSelectedPlan] = useState(SUBSCRIPTION_TIERS.ARCADE);
  const [timeType, setTimeType] = useState(TIME_TYPES.MONTHLY);


  const handleSelectedPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const handleSubmit = () => {
    console.log('Second form submitted', {
      selectedPlan,
      billingPlan: timeType,
    });
    dispatch(setSecondFormData({ selectedPlan, billingPlan: timeType }));
  };

  return (
    <FormLayout
      title={ADDONS.TITLE}
      description={ADDONS.DESCRIPTION}
      activeNumber={ADDONS.NUMBER}
    >
      <section className='flex flex-col'>
        <CheckOption

        />
        <CheckOption

        />
        <CheckOption
 
        />
      </section>
      <footer className='flex justify-between'>
        <button
          onClick={handleSubmit}
          className='w-fit self-end text-coolGray hover:text-marineBlue focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5'
        >
          {BUTTONS_TEXT.GO_BACK}
        </button>

        <button
          onClick={handleSubmit}
          className='w-fit self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5'
        >
          {BUTTONS_TEXT.NEXT_STEP}
        </button>
      </footer>
    </FormLayout>
  );
};

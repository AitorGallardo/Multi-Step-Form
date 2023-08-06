import { useState } from 'react';
import { BillingCard } from '../components/BillingCard';
import { ToggleIcon } from '../components/ToggleIcon';
import {
  BUTTONS_TEXT,
  FORMS,
  SUBSCRIPTION_TIERS,
  BILLING_PLANS,
} from '../constants/consts';
import { FormLayout } from '../layout/FormLayout';
import { useDispatch, useSelector } from 'react-redux';
import { setSecondFormData } from '../store/form';
import { useNavigateForms } from '../hooks/useNavigateForms';

const { PLAN } = FORMS;

export const PlanPage = () => {
  const backNavigation = '/firstStep', nextNavigation = '/thirdStep';
  const {goBack,goNext} = useNavigateForms({backNavigation,nextNavigation});

  const dispatch = useDispatch();
  const { selectedPlan: statePlan, billingPlan } = useSelector(
    (state) => state.form
  );
  const [selectedPlan, setSelectedPlan] = useState(statePlan);
  const [billingType, setBillingType] = useState(billingPlan);

  const handleChecked = (value) => {
    const timeType = value ? BILLING_PLANS.YEARLY : BILLING_PLANS.MONTHLY;
    setBillingType(timeType);
  };
  const handleSelectedPlan = (plan) => {
    setSelectedPlan(plan);
  };


  const handleSubmit = () => {
    console.log('Second form submitted', {
      selectedPlan,
      billingPlan: billingType,
    });
    dispatch(setSecondFormData({ selectedPlan, billingPlan: billingType }));
    goNext()
  };

  return (
    <FormLayout
      title={PLAN.TITLE}
      description={PLAN.DESCRIPTION}
      activeNumber={PLAN.NUMBER}
    >
      <section className='flex justify-between w-full '>
        <BillingCard
          title={SUBSCRIPTION_TIERS.ARCADE}
          price={'90'}
          timeType={billingType}
          iconImg={'src/assets/images/icon-arcade.svg'}
          selected={selectedPlan === SUBSCRIPTION_TIERS.ARCADE}
          onSelect={() => handleSelectedPlan(SUBSCRIPTION_TIERS.ARCADE)}
        />
        <BillingCard
          title={SUBSCRIPTION_TIERS.ADVANCED}
          price={'120'}
          timeType={billingType}
          iconImg={'src/assets/images/icon-advanced.svg'}
          selected={selectedPlan === SUBSCRIPTION_TIERS.ADVANCED}
          onSelect={() => handleSelectedPlan(SUBSCRIPTION_TIERS.ADVANCED)}
        />
        <BillingCard
          title={SUBSCRIPTION_TIERS.PRO}
          price={'150'}
          timeType={billingType}
          iconImg={'src/assets/images/icon-pro.svg'}
          selected={selectedPlan === SUBSCRIPTION_TIERS.PRO}
          onSelect={() => handleSelectedPlan(SUBSCRIPTION_TIERS.PRO)}
        />
      </section>
      <footer className='flex flex-col gap-28 '>
        <section className='bg-magnolia p-3'>
          <ToggleIcon
            handleChecked={handleChecked}
            initialValue={billingPlan === BILLING_PLANS.YEARLY}
          />
        </section>
        <div className='flex justify-between'>
          <button onClick={goBack} className='w-fit self-end text-coolGray hover:text-marineBlue font-medium rounded-lg text-sm px-5 py-2.5'>
            {BUTTONS_TEXT.GO_BACK}
          </button>
          <button
            onClick={handleSubmit}
            className='w-fit self-end text-white bg-blue-700 hover:bg-blue-800font-medium rounded-lg text-sm px-5 py-2.5'
          >
            {BUTTONS_TEXT.NEXT_STEP}
          </button>
        </div>
      </footer>
    </FormLayout>
  );
};

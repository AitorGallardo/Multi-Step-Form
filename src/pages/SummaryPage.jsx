import { useMemo, useState } from 'react';
import {
  FORMS,
  BUTTONS_TEXT,
  BILLING_PLANS,
  SUBSCRIPTION_TIERS,
  ADDONS_OPTIONS,
  SUCCESSFUL_FORM
} from '../constants/consts';
import { FormLayout } from '../layout/FormLayout';
import { useSelector } from 'react-redux';
import { useNavigateForms } from '../hooks/useNavigateForms';
import { Link } from 'react-router-dom';

const { SUMMARY } = FORMS;

export const SummaryPage = () => {
  const backNavigation = '/thirdStep';
  const { goBack } = useNavigateForms({
    backNavigation,
  });

  const { selectedPlan, billingPlan, addons } = useSelector(
    (state) => state.form
  );

  const [isConfirmed, setIsConfirmed] = useState(false);

  const selectedPlanFormatted = useMemo(() => {
    return selectedPlan?.toUpperCase();
  }, [selectedPlan]);

  const billingPlanFormatted = useMemo(() => {
    return billingPlan === BILLING_PLANS.MONTHLY ? 'MONTHLY' : 'YEARLY';
  }, [billingPlan]);

  const planPrice = useMemo(() => {
    return SUBSCRIPTION_TIERS[selectedPlanFormatted][
      `PRICE_${billingPlanFormatted}`
    ];
  }, [selectedPlanFormatted, billingPlanFormatted]);

  const selectedAddonsFormatted = useMemo(() => {
    return addons.map((addon) => {
      const key = addon.toUpperCase();
      const title = ADDONS_OPTIONS[key].TITLE;
      const price = ADDONS_OPTIONS[key].PRICE[billingPlanFormatted];
      return { title, price };
    });
  }, [addons, billingPlanFormatted]);

  const totaPrice = useMemo(() => {
    return selectedAddonsFormatted.reduce((acc, addon) => {
      return acc + addon.price;
    }, planPrice);
  }, [planPrice, selectedAddonsFormatted]);

  const handleConfirm = () => {
    // validPersonalInfo
    setIsConfirmed(true);
  };

  const footerConfig = {
    showBack: true,
    showNext: false,
    showConfirm: true,
    onClickBack: goBack,
    handleConfirm: handleConfirm,
  };

  return !isConfirmed ? (
    <FormLayout
      title={SUMMARY.TITLE}
      description={SUMMARY.DESCRIPTION}
      activeNumber={SUMMARY.NUMBER}
      footerConfig={footerConfig}
    >
      <section className='flex flex-col'>
        <div className='resume p-4 pb-0 bg-magnolia rounded-md'>
          <div className='resume__plan pb-4 flex justify-between items-center border-b border-lightGray'>
            <div className='flex flex-col'>
              <div className='resume__plan__title text-marineBlue font-medium'>
                {selectedPlan} (
                {billingPlan === BILLING_PLANS.MONTHLY ? 'Monthly' : 'Yearly'})
              </div>
              {/* TODO :: Poner un Link de react-router-dom para ir a addons form*/}
              <Link
                to='/secondStep'
                className='w-fit resume__plan__change-option text-coolGray hover:text-purpishBlue underline decoration-2 cursor-pointer'
              >
                Change
              </Link>
            </div>
            <span className='text-marineBlue font-bold'>
              ${planPrice}/{billingPlan}
            </span>
          </div>
          <ul className='resume__addons flex flex-col gap-3 py-4'>
            {selectedAddonsFormatted.map((addon) => {
              return (
                <li key={addon.title} className='flex justify-between text-xs'>
                  <span className='text-coolGray text-base'>{addon.title}</span>
                  <span className='text-marineBlue text-base'>
                    +${addon.price}/{billingPlan}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='resume__total flex justify-between px-4 pt-4'>
          <span className='text-coolGray'>
            Total (per{' '}
            {billingPlan === BILLING_PLANS.MONTHLY ? 'month' : 'year'})
          </span>
          <span className='text-purpishBlue text-lg font-bold'>
            +${totaPrice}/{billingPlan}
          </span>
        </div>
      </section>
      {/* <footer className='flex justify-between'>
        <button
          onClick={goBack}
          className='w-fit self-end text-coolGray hover:text-marineBlue font-medium rounded-lg text-sm px-5 py-2.5'
        >
          {BUTTONS_TEXT.GO_BACK}
        </button>

        <button
          onClick={handleConfirm}
          className='w-fit self-end text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5'
        >
          {BUTTONS_TEXT.CONFIRM}
        </button> 
      </footer> */}
    </FormLayout>
  ) : (
    <FormLayout activeNumber={SUMMARY.NUMBER} showHeader={false}>
      <section className='flex flex-col gap-4 h-full justify-center items-center'>
        <img className='mb-4' width={70} height={70} src={SUCCESSFUL_FORM.IMG.SRC} alt={SUCCESSFUL_FORM.IMG.ALT} />
        <h1 className='text-3xl font-bold text-marineBlue'>{SUCCESSFUL_FORM.TITLE}</h1>
        <p className='text-coolGray text-center text-sm'>{SUCCESSFUL_FORM.DESCRIPTION}</p>
      </section>
    </FormLayout>
  );
};

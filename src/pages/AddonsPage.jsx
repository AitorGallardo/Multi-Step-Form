import { useState } from 'react';
import {
  FORMS,
  BUTTONS_TEXT,
  ADDONS_OPTIONS,
  BILLING_PLANS,
} from '../constants/consts';
import { FormLayout } from '../layout/FormLayout';
import { useDispatch, useSelector } from 'react-redux';
import { setThirdFormData } from '../store/form';
import CheckOption from '../components/CheckOption';
import { useNavigateForms } from '../hooks/useNavigateForms';

const { ADDONS } = FORMS;
const { ONLINE, STORAGE, CUSTOM } = ADDONS_OPTIONS;

export const AddonsPage = () => {
  const backNavigation = '/secondStep',
    nextNavigation = '/fourthStep';
  const { goBack, goNext } = useNavigateForms({
    backNavigation,
    nextNavigation,
  });

  const dispatch = useDispatch();
  const { billingPlan, addons } = useSelector((state) => state.form);

  const [selectedAddons, setSelectedAddons] = useState(addons);

  const handleSelectedAddons = (addon, isSelected) => {
    let addons = [];
    if (isSelected) {
      addons = addAddon(addon);
    } else {
      addons = removeAddon(addon);
    }
    dispatch(setThirdFormData({ addons }));
  };
  const addAddon = (newAddon) => {
    let newAddons = [...selectedAddons, newAddon];
    setSelectedAddons(newAddons);
    return newAddons;
  };
  const removeAddon = (removingAddon) => {
    let newAddons = selectedAddons.filter((addon) => addon !== removingAddon);
    setSelectedAddons(newAddons);
    return newAddons;
  };

  const footerConfig = {
    showBack: true,
    showNext: true,
    onClickBack: goBack,
    onClickNext: goNext,
  };

  return (
    <FormLayout
      title={ADDONS.TITLE}
      description={ADDONS.DESCRIPTION}
      activeNumber={ADDONS.NUMBER}
      footerConfig={footerConfig}
    >
      <section className='flex flex-col gap-4'>
        <CheckOption
          title={ONLINE.TITLE}
          description={ONLINE.DESCRIPTION}
          price={
            billingPlan === BILLING_PLANS.MONTHLY
              ? ONLINE.PRICE.MONTHLY
              : ONLINE.PRICE.YEARLY
          }
          time={billingPlan}
          selected={selectedAddons.includes(ONLINE.VALUE)}
          handleSelectedOption={(isSelected) =>
            handleSelectedAddons(ONLINE.VALUE, isSelected)
          }
        />
        <CheckOption
          title={STORAGE.TITLE}
          description={STORAGE.DESCRIPTION}
          price={
            billingPlan === BILLING_PLANS.MONTHLY
              ? STORAGE.PRICE.MONTHLY
              : STORAGE.PRICE.YEARLY
          }
          time={billingPlan}
          selected={selectedAddons.includes(STORAGE.VALUE)}
          handleSelectedOption={(isSelected) =>
            handleSelectedAddons(STORAGE.VALUE, isSelected)
          }
        />
        <CheckOption
          title={CUSTOM.TITLE}
          description={CUSTOM.DESCRIPTION}
          price={
            billingPlan === BILLING_PLANS.MONTHLY
              ? CUSTOM.PRICE.MONTHLY
              : CUSTOM.PRICE.YEARLY
          }
          time={billingPlan}
          selected={selectedAddons.includes(CUSTOM.VALUE)}
          handleSelectedOption={(isSelected) =>
            handleSelectedAddons(CUSTOM.VALUE, isSelected)
          }
        />
      </section>
      {/* <footer className='flex justify-between'>
        <button onClick={goBack} className='w-fit self-end text-coolGray hover:text-marineBlue font-medium rounded-lg text-sm px-5 py-2.5'>
          {BUTTONS_TEXT.GO_BACK}
        </button>

        <button onClick={goNext}  className='w-fit self-end text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5'>
          {BUTTONS_TEXT.NEXT_STEP}
        </button>
      </footer> */}
    </FormLayout>
  );
};

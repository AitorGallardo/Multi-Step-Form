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
import { toast } from 'sonner';
import { useNavigationToast } from '../hooks/useNavigationToast';

const { ADDONS } = FORMS;
const { ONLINE, STORAGE, CUSTOM } = ADDONS_OPTIONS;



export const AddonsPage = () => {
  const backNavigation = '/secondStep',
  nextNavigation = '/fourthStep',
  toastNavigation = '/thirdStep',
  textDescription = 'You did not select any addon',
  textButton = 'Select!';
  const { goBack, goNext } = useNavigateForms({
    backNavigation,
    nextNavigation,
  });

const {createToast} = useNavigationToast({navigateTo:toastNavigation, textDescription, textButton});

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
  const handleGoNext = () => {
    if(addons.length === 0){
      createToast()
    }
    goNext();
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
    onClickNext: handleGoNext,
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
    </FormLayout>
  );
};

import { useState } from 'react';
import { FORMS, BUTTONS_TEXT, ADDONS_OPTIONS } from '../constants/consts';
import { FormLayout } from '../layout/FormLayout';
import { useDispatch } from 'react-redux';
import { setThirdFormData } from '../store/form';
import CheckOption from '../components/CheckOption';

const { ADDONS } = FORMS;
const { ONLINE, STORAGE, CUSTOM } = ADDONS_OPTIONS;

export const AddonsPage = () => {
  const dispatch = useDispatch();

  const [selectedAddons, setSelectedAddons] = useState([]);

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
    return newAddons
  };

  return (
    <FormLayout
      title={ADDONS.TITLE}
      description={ADDONS.DESCRIPTION}
      activeNumber={ADDONS.NUMBER}
    >
      <section className='flex flex-col'>
        <CheckOption
          title={ONLINE.TITLE}
          description={ONLINE.DESCRIPTION}
          price={ONLINE.PRICE.MONTHLY}
          time={'mo'}
          handleSelectedOption={(isSelected) =>
            handleSelectedAddons(ONLINE.VALUE, isSelected)
          }
        />
        <CheckOption
          title={STORAGE.TITLE}
          description={STORAGE.DESCRIPTION}
          price={STORAGE.PRICE.MONTHLY}
          time={'mo'}
          handleSelectedOption={(isSelected) =>
            handleSelectedAddons(STORAGE.VALUE, isSelected)
          }
        />
        <CheckOption
          title={CUSTOM.TITLE}
          description={CUSTOM.DESCRIPTION}
          price={CUSTOM.PRICE.MONTHLY}
          time={'mo'}
          handleSelectedOption={(isSelected) =>
            handleSelectedAddons(CUSTOM.VALUE, isSelected)
          }
        />
      </section>
      <footer className='flex justify-between'>
        <button className='w-fit self-end text-coolGray hover:text-marineBlue focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5'>
          {BUTTONS_TEXT.GO_BACK}
        </button>

        <button className='w-fit self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5'>
          {BUTTONS_TEXT.NEXT_STEP}
        </button>
      </footer>
    </FormLayout>
  );
};

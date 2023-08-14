import { useForm } from '../hooks/useForm';
import { FormLayout } from '../layout/FormLayout';
import { BUTTONS_TEXT, FIRST_FORM_LABELS, FORMS } from '../constants/consts';
import { formValidations } from '../helpers/validations';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFirstFormData, setFirstStepCompleted } from '../store/form';
import { useNavigateForms } from '../hooks/useNavigateForms';



const { INFO } = FORMS;

export const InfoPage = () => {
  const nextNavigation = '/secondStep';
  const {goNext} = useNavigateForms({nextNavigation});
  const {personalInfo} = useSelector(state => state.form)

  const dispatch = useDispatch();
  const {
    formState,
    name,
    email,
    phone,
    onInputChange,
    nameValidation,
    emailValidation,
    phoneValidation,
    isFormValid,
  } = useForm(personalInfo, formValidations);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleSubmit = (e) => {
    console.log('Form Submitted', formState);
    e.preventDefault();
    setFormSubmitted(true);
    dispatch(setFirstStepCompleted(false));
    if (!isFormValid) return;

    console.log('Form is Valid==> Dispatching data');

    dispatch(setFirstFormData({formState,isFormValid}));
    console.log('First form submitted',formState);

    goNext()
  };
  return (
    <FormLayout
      title={INFO.TITLE}
      description={INFO.DESCRIPTION}
      activeNumber={INFO.NUMBER}
    >
      <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
        <fieldset className='flex flex-col gap-2'>
          <label className='input__label text-xs text-marineBlue' htmlFor={'name'}>
            {FIRST_FORM_LABELS.NAME}
          </label>
          <input
            className={`border py-1 px-2 border-solid rounded-lg outline-0 hover:border-purpishBlue focus:border-purpishBlue cursor-pointer 
            ${
              nameValidation?.length > 0 && formSubmitted
                ? 'border-strawberryRed'
                : ''
            }`}
            type='text'
            id='name'
            name='name'
            value={name}
            onChange={onInputChange}
          />
          {nameValidation?.length > 0 && formSubmitted && (
            <span className='text-xs text-strawberryRed'>{nameValidation}</span>
          )}
        </fieldset>
        <fieldset className='flex flex-col gap-2'>
          <label className='input__label text-xs text-marineBlue' htmlFor={'email'}>
          {FIRST_FORM_LABELS.EMAIL}
          </label>
          <input
            className={`border py-1 px-2 border-solid rounded-lg outline-0 hover:border-purpishBlue focus:border-purpishBlue cursor-pointer 
            ${
              emailValidation?.length > 0 && formSubmitted
                ? 'border-strawberryRed'
                : ''
            }`}
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={onInputChange}
          />
          {emailValidation?.length > 0 && formSubmitted && (
            <span className='text-xs text-strawberryRed'>
              {emailValidation}
            </span>
          )}
        </fieldset>
        <fieldset className='flex flex-col gap-2'>
          <label className='input__label text-xs text-marineBlue' htmlFor={'phone'}>
          {FIRST_FORM_LABELS.PHONE}
          </label>
          <input
            className={`border py-1 px-2 border-solid rounded-lg outline-0 hover:border-purpishBlue focus:border-purpishBlue cursor-pointer 
            ${
              phoneValidation?.length > 0 && formSubmitted
                ? 'border-strawberryRed'
                : ''
            }`}
            type='text'
            id='phone'
            name='phone'
            value={phone}
            onChange={onInputChange}
          />
          {phoneValidation?.length > 0 && formSubmitted && (
            <span className='text-xs text-strawberryRed'>
              {phoneValidation}
            </span>
          )}
        </fieldset>
        <button
          type='submit'
          className='w-fit self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-20'
        >
          {BUTTONS_TEXT.NEXT_STEP}
        </button>
      </form>
    </FormLayout>
  );
};

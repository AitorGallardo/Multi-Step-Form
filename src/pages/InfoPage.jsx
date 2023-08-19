import { useForm } from '../hooks/useForm';
import { FormLayout } from '../layout/FormLayout';
import { BUTTONS_TEXT, FIRST_FORM_LABELS, FORMS } from '../constants/consts';
import { formValidations } from '../helpers/validations';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFirstFormData, setFirstStepCompleted } from '../store/form';
import { useNavigateForms } from '../hooks/useNavigateForms';
import { toast } from 'sonner'


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
    if (!isFormValid){
      toast.error('Ups! Form has some error!')
      return;
    } 

    console.log('Form is Valid==> Dispatching data');

    dispatch(setFirstFormData({formState,isFormValid}));
    toast.success('Personal info correctly submitted!',{duration: 1500})
    console.log('Personal info correctly submitted!',formState);

    goNext()
  };
  const footerConfig = {
    onClickNext: handleSubmit,
  }
  return (
    <FormLayout
      title={INFO.TITLE}
      description={INFO.DESCRIPTION}
      activeNumber={INFO.NUMBER}
      footerConfig={footerConfig}
    >
      <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
        <fieldset className='flex flex-col gap-2'>
          <label className='input__label text-sm font-normal text-marineBlue' htmlFor={'name'}>
            {FIRST_FORM_LABELS.NAME}
          </label>
          <input
            className={`border py-3 px-4 border-solid border-lightGray placeholder:font-medium font-medium text-marineBlue placeholder:text-coolGray rounded-lg outline-0 hover:border-purpishBlue focus:border-purpishBlue cursor-pointer 
            ${
              nameValidation?.length > 0 && formSubmitted
                ? 'border-strawberryRed'
                : ''
            }`}
            type='text'
            id='name'
            name='name'
            placeholder='e.g. Stephen King'
            value={name}
            onChange={onInputChange}
          />
          {nameValidation?.length > 0 && formSubmitted && (
            <span className='text-xs font-medium text-strawberryRed'>{nameValidation}</span>
          )}
        </fieldset>
        <fieldset className='flex flex-col gap-2'>
          <label className='input__label text-sm font-normal text-marineBlue' htmlFor={'email'}>
          {FIRST_FORM_LABELS.EMAIL}
          </label>
          <input
            className={`border py-3 px-4 border-solid border-lightGray placeholder:font-medium font-medium text-marineBlue placeholder:text-coolGray rounded-lg outline-0 hover:border-purpishBlue focus:border-purpishBlue cursor-pointer 
            ${
              emailValidation?.length > 0 && formSubmitted
                ? 'border-strawberryRed'
                : ''
            }`}
            type='email'
            id='email'
            name='email'
            placeholder='e.g. stephenking@lorem.com'
            value={email}
            onChange={onInputChange}
          />
          {emailValidation?.length > 0 && formSubmitted && (
            <span className='text-xs font-medium text-strawberryRed'>
              {emailValidation}
            </span>
          )}
        </fieldset>
        <fieldset className='flex flex-col gap-2'>
          <label className='input__label text-sm font-normal text-marineBlue' htmlFor={'phone'}>
          {FIRST_FORM_LABELS.PHONE}
          </label>
          <input
            className={`border py-3 px-4 border-solid border-lightGray placeholder:font-medium placeholder:text-coolGray font-medium text-marineBlue rounded-lg outline-0 hover:border-purpishBlue focus:border-purpishBlue cursor-pointer 
            ${
              phoneValidation?.length > 0 && formSubmitted
                ? 'border-strawberryRed'
                : ''
            }`}
            type='text'
            id='phone'
            name='phone'
            placeholder='+34 68682151'
            value={phone}
            onChange={onInputChange}
          />
          {phoneValidation?.length > 0 && formSubmitted && (
            <span className='text-xs font-medium text-strawberryRed'>
              {phoneValidation}
            </span>
          )}
        </fieldset>
        {/* <button
          type='submit'
          className='w-fit self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-20'
        >
          {BUTTONS_TEXT.NEXT_STEP}
        </button> */}
      </form>
    </FormLayout>
  );
};

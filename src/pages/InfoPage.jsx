import { FormLayout } from '../layout/FormLayout';

const pageData = {
  title: 'Personal info',
  description: 'Please provide your name, email address, and phone number.',
};

const formData = {};

export const InfoPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };
  return (
    <FormLayout title={pageData.title} description={pageData.description}>
      <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
        <fieldset className='flex flex-col gap-2'>
          <label className='input__label text-xs' htmlFor={'name'}>
            Name
          </label>
          <input className='border py-1 px-2 border-solid rounded-lg outline-0 hover:border-purpishBlue focus:border-purpishBlue cursor-pointer' type='text' id='name' name='name' />
        </fieldset>
        <fieldset className='flex flex-col gap-2'>
          <label className='input__label text-xs' htmlFor={'email'}>
            Email Address
          </label>
          <input className='border py-1 px-2 border-solid rounded-lg outline-0 hover:border-purpishBlue focus:border-purpishBlue cursor-pointer' type='email' id='email' name='email' />
        </fieldset>
        <fieldset className='flex flex-col gap-2'>
          <label className='input__label text-xs' htmlFor={'phone'}>
            Phone Number
          </label>
          <input className='border py-1 px-2 border-solid rounded-lg outline-0 hover:border-purpishBlue focus:border-purpishBlue cursor-pointer' type='text' id='phone' name='phone' />
        </fieldset>

      </form>
    </FormLayout>
  );
};

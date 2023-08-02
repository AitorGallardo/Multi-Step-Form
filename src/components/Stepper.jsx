
export const Stepper = () => {
  return (
    <ol className='items-center flex flex-col gap-6'>
      <li className='flex w-full justify-start gap-4 items-center text-blue-600 dark:text-blue-500 '>
        <span className='flex items-center justify-center w-8 h-8 border border-lightBlue bg-lightBlue rounded-full shrink-0 text-marineBlue'>
          1
        </span>
        <span>
          <h3 className='text-xs leading-tight text-coolGray'>STEP 1</h3>
          <p className='font-medium text-sm text-white'>YOUR INFO</p>
        </span>
      </li>
      <li className='flex w-full justify-start gap-4 items-center text-gray-500 dark:text-gray-400 '>
        <span className='flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400'>
          2
        </span>
        <span>
          <h3 className='text-xs leading-tight text-coolGray'>STEP 2</h3>
          <p className='font-medium text-sm text-white'>SELECT PLAN</p>
        </span>
      </li>
      <li className='flex w-full justify-start gap-4 items-center text-gray-500 dark:text-gray-400 '>
        <span className='flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400'>
          3
        </span>
        <span>
          <h3 className='text-xs leading-tight text-coolGray'>STEP 3</h3>
          <p className='font-medium text-sm text-white'>ADD-ONS</p>
        </span>
      </li>
      <li className='flex w-full justify-start gap-4 items-center text-gray-500 dark:text-gray-400 '>
        <span className='flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400'>
          4
        </span>
        <span>
          <h3 className='text-xs leading-tight text-coolGray'>STEP 4</h3>
          <p className='font-medium text-sm text-white'>SUMMARY</p>
        </span>
      </li>
    </ol>
  );
};

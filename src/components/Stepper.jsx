import { STEPS } from '../constants/consts';

const { FIRST, SECOND, THIRD, FOURTH } = STEPS;

export const Stepper = (active) => {
  return (
    <ol className='items-center flex flex-col gap-6'>
      <li className='flex w-full justify-start gap-4 items-center text-blue-600 dark:text-blue-500 '>
        <span
          className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${
            active === FIRST.NUMBER
              ? 'border-lightBlue bg-lightBlue text-marineBlue'
              : 'border-white text-white'
          } `}
        >
          {FIRST.NUMBER}
        </span>
        <span>
          <h3 className='text-xs leading-tight text-coolGray'>
            STEP {FIRST.NUMBER}
          </h3>
          <p className='font-medium text-sm text-white'>{FIRST.TEXT}</p>
        </span>
      </li>
      <li className='flex w-full justify-start gap-4 items-center text-gray-500 dark:text-gray-400 '>
        <span
          className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${
            active === SECOND.NUMBER
              ? 'border-lightBlue bg-lightBlue text-marineBlue'
              : 'border-white text-white'
          } `}
        >
          {SECOND.NUMBER}
        </span>
        <span>
          <h3 className='text-xs leading-tight text-coolGray'>
            STEP {SECOND.NUMBER}
          </h3>
          <p className='font-medium text-sm text-white'>{SECOND.TEXT}</p>
        </span>
      </li>
      <li className='flex w-full justify-start gap-4 items-center text-gray-500 dark:text-gray-400 '>
        <span
          className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${
            active === THIRD.NUMBER
              ? 'border-lightBlue bg-lightBlue text-marineBlue'
              : 'border-white text-white'
          } `}
        >
          {THIRD.NUMBER}
        </span>
        <span>
          <h3 className='text-xs leading-tight text-coolGray'>
            STEP {THIRD.NUMBER}
          </h3>
          <p className='font-medium text-sm text-white'>{THIRD.TEXT}</p>
        </span>
      </li>
      <li className='flex w-full justify-start gap-4 items-center text-gray-500 dark:text-gray-400 '>
        <span
          className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${
            active === FOURTH.NUMBER
              ? 'border-lightBlue bg-lightBlue text-marineBlue'
              : 'border-white text-white'
          } `}
        >
          {FOURTH.NUMBER}
        </span>
        <span>
          <h3 className='text-xs leading-tight text-coolGray'>
            STEP {FOURTH.NUMBER}
          </h3>
          <p className='font-medium text-sm text-white'>{FOURTH.TEXT}</p>
        </span>
      </li>
    </ol>
  );
};

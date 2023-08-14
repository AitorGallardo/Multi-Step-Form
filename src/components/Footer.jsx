import { BUTTONS_TEXT } from '../constants/consts';

export default function Footer({
  showBack = false,
  showNext = true,
  showConfirm = false,
  onClickBack,
  onClickNext,
  handleConfirm,
}) {

  return (
    <footer className='flex justify-between items-center'>
      {showBack && (
        <button
          onClick={onClickBack}
          className='w-fit self-end text-coolGray hover:text-marineBlue font-medium rounded-lg text-sm px-5 py-2.5'
        >
          {BUTTONS_TEXT.GO_BACK}
        </button>
      )}

      <div className='flex w-full justify-end'>
        {showNext && (
          <button
            onClick={onClickNext}
            className='w-fit self-end text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5'
          >
            {BUTTONS_TEXT.NEXT_STEP}
          </button>
        )}
        {showConfirm && (
          <button
            onClick={handleConfirm}
            className='w-fit self-end text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5'
          >
            {BUTTONS_TEXT.CONFIRM}
          </button>
        )}
      </div>
    </footer>
  );
}

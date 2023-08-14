export default function Footer() {
  return (
    <footer className='flex justify-between'>
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
  </footer>
  );
}

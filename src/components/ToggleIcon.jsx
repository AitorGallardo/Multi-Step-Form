import { useState } from "react";

export const ToggleIcon = ({handleChecked}) => {
    const [checked, setChecked] = useState(false)

    const onInputChange = ({checked}) => {
        setChecked(checked)
        handleChecked(checked)
    }
  return (
    <div className="flex justify-center items-center">
      <span className={`text-sm font-medium ${checked ? 'text-coolGray': 'text-marineBlue'}`}>
        Monthly
      </span>
      <label className='relative inline-flex items-center cursor-pointer mx-3'>
        <input type='checkbox' value='' className='sr-only peer' onChange={({target})=> onInputChange(target)} />
        <div className="w-9 h-5 bg-marineBlue peer-focus:outline-none  rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-marineBlue after:border after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
      </label>
      <span className={`text-sm font-medium ${checked ? 'text-marineBlue': 'text-coolGray'}`}>
        Yearly
      </span>
    </div>
  );
};

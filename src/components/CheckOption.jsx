import { useState } from "react";

export default function CheckOption({title, description, price,time,handleSelectedOption}) {
  const [selected, setSelected] = useState(false);

  const handleOnChange = () => {
    handleSelectedOption(!selected)
    setSelected(!selected)
  }
  return (
    <div className={`flex gap-3 items-center px-4 border border-gray-200 rounded-lg hover:border-purpishBlue cursor-pointer ${selected ? 'bg-magnolia border-purpishBlue': ''}`}>
      <input
        id='bordered-checkbox-1'
        type='checkbox'
        name='bordered-checkbox'
        value={selected}
        onChange={handleOnChange}
        className="w-5 h-5 text-purpishBlue bg-gray-100 border-gray-300 rounded focus:ring-0 focus:ring-transparent cursor-pointer"
      />
      <label
        htmlFor='bordered-checkbox-1'
        className='w-full py-4 ml-2 text-sm font-medium '
      >
        <p className="text-marineBlue">{title}</p>
        <p className="text-coolGray">{description}</p>
      </label>
        <span className="text-purpishBlue">+${price}/{time}</span>
    </div>
  );
}

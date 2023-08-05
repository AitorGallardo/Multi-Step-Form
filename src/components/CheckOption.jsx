import { useState } from "react";

export default function CheckOption() {
  const [selected, setSelected] = useState(false);
  return (
    <div className={`flex gap-3 items-center px-4 border border-gray-200 rounded-lg hover:border-purpishBlue cursor-pointer ${selected ? 'bg-magnolia border-purpishBlue': ''}`}>
      <input
        id='bordered-checkbox-1'
        type='checkbox'
        name='bordered-checkbox'
        value={selected}
        onChange={() => setSelected(!selected)}
        className="w-5 h-5 text-purpishBlue bg-gray-100 border-gray-300 rounded focus:ring-0 focus:ring-transparent cursor-pointer"
      />
      <label
        htmlFor='bordered-checkbox-1'
        className='w-full py-4 ml-2 text-sm font-medium '
      >
        <p className="text-marineBlue">Online Service</p>
        <p className="text-coolGray">Acces to multiplayer games</p>
      </label>
        <span className="text-purpishBlue">+$1/mo</span>
    </div>
  );
}

import { TIME_TYPES } from "../constants/consts";

export const BillingCard = ({ title, price,timeType, iconImg}) => {
  return (
    <article className='flex flex-col justify-between gap-10 w-28 bg-white border border-coolGray rounded-lg hover:border-purpishBlue cursor-pointer px-3 py-3'>
      <img width={40} src={iconImg}></img>
      <footer>
        <h5 className='text-sm text-marineBlue font-bold'>{title}</h5>
        <p className='text-xs text-coolGray'>{`${price}/${timeType}`}</p>
        {timeType===TIME_TYPES.YEARLY && <p className='text-xs text-marineBlue'>2 months free</p>}
      </footer>
    </article>
  );
};

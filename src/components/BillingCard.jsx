import { TIME_TYPES } from '../constants/consts';
export const BillingCard = ({ title, price, timeType, iconImg }) => {
  return (
    <article
      className={`flex flex-col justify-between gap-10 w-32 bg-white border border-coolGray rounded-lg hover:border-purpishBlue cursor-pointer px-3 py-3 } transition-all`}
    >
      <img width={40} src={iconImg}></img>
      <footer>
        <h5 className='text-sm text-marineBlue font-bold'>
          {title}
        </h5>
        <p className='text-xs text-coolGray'>{`${price}/${timeType}`}</p>
        <div
          className={`grid grid-rows-[0fr] transition-all ${
            timeType === TIME_TYPES.YEARLY
              ? 'grid-rows-[1fr]'
              : 'grid-rows-[0fr]'
          }`}
        >
          <p className={`text-xs text-marineBlue overflow-hidden`}>
            2 months free
          </p>
        </div>

      </footer>
    </article>
  );
};

import { BILLING_PLANS } from '../constants/consts';
export const BillingCard = ({ title, price, timeType, iconImg,selected=false,onSelect }) => {
  return (
    <article
      className={`flex flex-col justify-between gap-10 w-32  border  rounded-lg hover:border-purpishBlue ${selected ? 'border-purpishBlue bg-magnolia': 'border-coolGray bg-white'} cursor-pointer px-3 py-3 transition-all`}
      onClick={onSelect}
    >
      <img width={40} src={iconImg}></img>
      <footer>
        <h5 className='text-sm text-marineBlue font-bold'>
          {title}
        </h5>
        <p className='text-xs text-coolGray'>{`$${price}/${timeType}`}</p>
        <div
          className={`grid grid-rows-[0fr] transition-all ${
            timeType === BILLING_PLANS.YEARLY
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

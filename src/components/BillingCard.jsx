import PropTypes from 'prop-types';

import { BILLING_PLANS, PLAN_BILLING_CARD_ICON } from '../constants/consts';


export const BillingCard = ({ title, price, timeType, iconImg,selected=false,onSelect }) => {
  return (
    <article
      className={`flex sm:flex-col sm:justify-between gap-4 sm:gap-10 sm:w-32 border rounded-lg hover:border-purpishBlue ${selected ? 'border-purpishBlue bg-magnolia': 'border-lightGray bg-white'} cursor-pointer p-4 transition-all`}
      onClick={onSelect}
    >
      <img width={PLAN_BILLING_CARD_ICON.SIZE} src={iconImg}></img>
      <footer>
        <h5 className='text-sm text-marineBlue font-bold'>
          {title}
        </h5>
        <p className='text-xs text-coolGray mt-1'>{`$${price}/${timeType}`}</p>
        <div
          className={`grid grid-rows-[0fr] transition-all ${
            timeType === BILLING_PLANS.YEARLY
              ? 'grid-rows-[1fr]'
              : 'grid-rows-[0fr]'
          }`}
        >
          <p className={`text-xs mt-1 text-marineBlue overflow-hidden`}>
            {BILLING_PLANS.FREE_TIER_TIME}
          </p>
        </div>

      </footer>
    </article>
  );
};

BillingCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  timeType: PropTypes.string,
  iconImg: PropTypes.string,
  selected: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
};

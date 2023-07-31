import PropTypes from 'prop-types';
export const FormLayout = ({ title, description, children }) => {
  return (
    <div className='flex shadow-lg rounded-xl p-3 w-3/6 bg-white'>
      <div className="sidePanel basis-1/3 bg-[url('src/assets/images/bg-sidebar-desktop.svg')] bg-bottom bg-cover rounded-md"> </div>
      <div className='main flex grow flex-col px-24 pt-9 pb-4'>
        <h1 className='text-3xl font-bold mb-3'>{title}</h1>
        <p className=' text-slate-400 text-md whitespace-nowrap mb-8'>{description}</p>
        {children}
      <button className='w-fit self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-20'>Next Step</button>
      </div>
    </div>
  );
};

// Prop types validation
FormLayout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

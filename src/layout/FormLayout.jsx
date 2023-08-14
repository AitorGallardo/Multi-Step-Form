import PropTypes from 'prop-types';
import { Stepper } from '../components/Stepper';
import Footer from '../components/Footer';
export const FormLayout = ({ title='', description='', activeNumber=1, showHeader=true, children }) => {
  return (
    <main className='flex h-screen sm:justify-center sm:items-center bg-magnolia'>
      <article className='flex sm:flex-row flex-col shadow-lg sm:rounded-xl sm:p-3 sm:w-3/6 sm:bg-white sm:min-h-[600px] sm:max-h-[600px] bg-magnolia relative w-full'>
        <div className="sidePanel basis-1/3 sm:bg-[url('src/assets/images/bg-sidebar-desktop.svg')] sm:rounded-md sm:bg-bottom bg-[url('src/assets/images/bg-sidebar-mobile.svg')] bg-cover p-10 bg-right-bottom">
          <Stepper active={activeNumber} />
        </div>
        <section className='flex grow flex-col sm:w-3/6 sm:static justify-between px-24 pt-9 pb-4 mx-10 bg-white absolute top-28 rounded-xl'>
          <header className={`${showHeader ? 'flex flex-col':'hidden'}`}>
            <h1 className='text-3xl text-marineBlue font-bold mb-3'>{title}</h1>
            <p className=' text-coolGray text-md whitespace-nowrap'>
              {description}
            </p>
          </header>
          {children}
          {/* <button
          type='submit'
          className='w-fit self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-20'
        >
          Next Step
        </button> */}
        <Footer/>
        </section>
      </article>
    </main>
  );
};

// Prop types validation
FormLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  activeNumber: PropTypes.number,
  showHeader: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

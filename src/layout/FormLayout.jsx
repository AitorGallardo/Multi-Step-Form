import PropTypes from 'prop-types';
import { Stepper } from '../components/Stepper';
import Footer from '../components/Footer';
export const FormLayout = ({
  title = '',
  description = '',
  activeNumber = 1,
  showHeader = true,
  children,
  showFooter = true,
  footerConfig,
}) => {
  return (
    <main className='flex h-screen sm:justify-center sm:items-center bg-magnolia'>
      <article className='flex sm:flex-row flex-col shadow-lg sm:rounded-xl sm:p-3 sm:w-3/6 sm:bg-white sm:min-h-[600px] sm:max-h-[600px] bg-magnolia relative w-full'>
        <div className="sidePanel basis-1/3 sm:bg-[url('/bg-sidebar-desktop.svg')] sm:rounded-md sm:bg-bottom bg-[url('/bg-sidebar-mobile.svg')] bg-cover p-10 bg-right-bottom">
          <Stepper active={activeNumber} />
        </div>
        <section className='flex grow flex-col shadow-lg w-11/12 sm:w-3/6 sm:shadow-none sm:static sm:translate-x-0 justify-between sm:px-24 px-8 pt-9 pb-4  bg-white absolute top-28 left-1/2 -translate-x-1/2 rounded-xl'>
          <header className={`${showHeader ? 'flex flex-col' : 'hidden'}`}>
            <h1 className='text-3xl text-marineBlue font-bold mb-2'>{title}</h1>
            <p className='text-coolGray mb-5 text-base text-md sm:whitespace-nowrap'>
              {description}
            </p>
          </header>
          <div className='py-4 h-full'>{children}</div>
          {showFooter && (
            <div className='hidden sm:inline-block'>
              <Footer {...footerConfig} />
            </div>
          )}
        </section>
        {showFooter && (
          <div className='sm:hidden absolute p-4 bg-white w-full bottom-0'>
            <Footer {...footerConfig} />
          </div>
        )}
        {/* <div className='sm:hidden absolute p-4 bg-white w-full bottom-0'>
          <Footer {...footerConfig} />
        </div> */}
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
  footerConfig: PropTypes.object,
};

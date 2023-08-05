import PropTypes from 'prop-types';
import { Stepper } from '../components/Stepper';
export const FormLayout = ({ title='', description='', activeNumber=1, children }) => {
  return (
    <main className='flex h-screen justify-center items-center bg-magnolia'>
      <article className='flex shadow-lg rounded-xl p-3 w-3/6 bg-white min-h-[600px] max-h-[600px]'>
        <div className="sidePanel basis-1/3 bg-[url('src/assets/images/bg-sidebar-desktop.svg')] bg-bottom bg-cover rounded-md p-10">
          <Stepper active={activeNumber} />
        </div>
        <section className='flex grow flex-col justify-between px-24 pt-9 pb-4'>
          <header>
            <h1 className='text-3xl text-marineBlue font-bold mb-3'>{title}</h1>
            <p className=' text-coolGray text-md whitespace-nowrap'>
              {description}
            </p>
          </header>
          {children}
        </section>
      </article>
    </main>
  );
};

// Prop types validation
FormLayout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  activeNumber: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

import ImageSlider from './ImageSlider';
import { SectionTitle } from '../layout/sections';

const Inform = ({ side, imageUrls, title, time, children }) => {
  return (
    <section className='container my-8 space-y-4 md:space-y-8 text-slate-800'>
      <div className='w-full flex flex-col md:flex-row justify-between items-center'>
        {side === 'left' && (
          <div className='w-full md:w-1/2 ml-8 md:ml-0'>
            <ImageSlider imageUrls={imageUrls} alt={title} time={time} />
          </div>
        )}
        <div className='md:w-1/2 md:px-8 text-center'>
          <SectionTitle title={title} />
          {children}
        </div>
        {side === 'right' && (
          <div className='w-full md:w-1/2 mt-4 md:mt-0 ml-8 md:ml-0'>
            <ImageSlider imageUrls={imageUrls} alt={title} time={time} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Inform;

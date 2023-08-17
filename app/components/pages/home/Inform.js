import ImageSlider from './ImageSlider';
import { SectionTitle } from '../../../components/layout/sections';

const Inform = ({ side, imageUrls, title, children }) => {
  return (
    <section className='container my-8 space-y-4 md:space-y-8 text-slate-800'>
      <div className='w-full flex flex-row justify-between items-center'>
        {side === 'left' && (
          <div className='w-1/2'>
            <ImageSlider imageUrls={imageUrls} alt={title} />
          </div>
        )}
        <div className='w-1/2 px-8 text-center'>
          <SectionTitle title={title} />
          {children}
        </div>
        {side === 'right' && (
          <div className='w-1/2'>
            <ImageSlider imageUrls={imageUrls} alt={title} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Inform;

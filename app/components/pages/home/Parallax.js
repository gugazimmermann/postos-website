import ParallaxItems from './ParallaxItems';
import ParallaxWhatWeDo from './ParallaxWhatWeDo';

const Parallax = () => {
  return (
    <section className='relative w-full'>
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-fixed bg-center bg-[url('/images/home/parallax.webp')]" />
      <div className='absolute top-0 left-0 w-full h-full bg-amber-500 opacity-20' />
      <div className='relative container mx-auto flex flex-col justify-center items-center h-full'>
        <h1 className='text-white text-3xl md:text-5xl text-center font-bold my-8'>
          {process.env.NEXT_PUBLIC_TITLE}
        </h1>
        <ParallaxItems />
        <div className='px-4 md:px-32'>
          <ParallaxWhatWeDo />
        </div>
      </div>
    </section>
  );
};

export default Parallax;

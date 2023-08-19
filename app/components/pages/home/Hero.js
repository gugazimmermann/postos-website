import HeroBackground from './HeroBackground';
import Jumbotron from './Jumbotron';

const Hero = () => {
  return (
    <section className='relative mt-[105px] lg:mt-[64px]'>
      <HeroBackground />
      <div className="absolute top-0 left-0 z-10 w-full">
        <Jumbotron />
      </div>
    </section>
  );
};

export default Hero;

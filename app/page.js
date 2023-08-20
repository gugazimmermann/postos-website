import sharedMetadata from './shared-metadata';
import { Hero, Jumbotron, Brands, Parallax, Cards, Techs, CallToAction } from './components/pages/home';

export const metadata = {
  ...sharedMetadata,
};

export default function Home() {
  return (
    <>
      <div className='hidden lg:flex'>
        <Hero />
      </div>
      <div className='lg:hidden'>
        <Jumbotron />
      </div>
      <Brands />
      <Parallax />
      <Cards />
      <Techs />
      <CallToAction />
    </>
  );
}

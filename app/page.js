import sharedMetadata from './shared-metadata';
import { Hero, Jumbotron, Parallax, Cards, CallToAction } from './components/pages/home';

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
      <Parallax />
      <Cards />
      <CallToAction />
    </>
  );
}

import sharedMetadata from './shared-metadata';
import { Hero, Parallax, WhatWeDo } from './components/pages/home';

export const metadata = {
  ...sharedMetadata,
};

export default function Home() {
  return (
    <>
      <Hero />
      <Parallax />
      <WhatWeDo />
    </>
  );
}

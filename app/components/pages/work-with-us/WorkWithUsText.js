import Image from 'next/image';
import { Section, SectionTitle, SectionSubTitle } from '../../layout/sections';

const WorkWithUsText = () => {
  return (
    <Section>
      <SectionTitle title='Trabalhe Conosco' />
      <div className='w-full flex items-center flex-row-reverse'>
        <Image
          src='/images/work_with_us/work.svg'
          width={0}
          height={0}
          className='w-full my-4 md:w-1/2 md:float-right md:mr-4'
          alt='Vagas'
        />
        <SectionSubTitle>Sem vagas abertas no momento.</SectionSubTitle>
      </div>
    </Section>
  );
};

export default WorkWithUsText;

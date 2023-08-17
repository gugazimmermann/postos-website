import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href='/' className='flex flex-row items-center'>
      <Image
        className='w-8 h-8 mr-2'
        width={32}
        height={32}
        src='/icon.png'
        alt={`${process.env.NEXT_PUBLIC_TITLE} logo`}
      />
      <span className='font-bold text-xl'>{process.env.NEXT_PUBLIC_TITLE}</span>
    </Link>
  );
};

export default Logo;

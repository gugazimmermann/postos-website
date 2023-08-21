import { Whatsapp, Facebook, Instagram, Threads, Twitter, Youtube, Linkedin } from '../../icons';

const Social = ({ className }) => {

  const icons = {
    Whatsapp: <Whatsapp />,
    Facebook: <Facebook />,
    Instagram: <Instagram />,
    Threads: <Threads />,
    Twitter: <Twitter />,
    Youtube: <Youtube />,
    Linkedin: <Linkedin />
  };

  const SocialItem = ({ name, linkTo }) => {
    const Icon = icons[name];
    if (!Icon) return null;

    return (
      <a href={linkTo} target='_blank' rel='noopener noreferrer' aria-label={name}>
        <div className='mx-2 text-slate-600 hover:text-amber-500 hover:cursor-pointer'>{Icon}</div>
      </a>
    );
  };

  return (
    <div className={`flex justify-center ${className ? className : ''}`}>
      <SocialItem name='Whatsapp' linkTo='https://wa.me/5547988704247' />
      <SocialItem name='Facebook' linkTo='https://www.facebook.com/' />
      <SocialItem name='Instagram' linkTo='https://www.instagram.com/' />
      <SocialItem name='Threads' linkTo='https://www.threads.net/' />
      <SocialItem name='Twitter' linkTo='https://www.twitter.com/' />
      <SocialItem name='Youtube' linkTo='https://www.youtube.com/' />
      <SocialItem name='Linkedin' linkTo='https://www.linkedin.com/company/touch-sistemas-postos' />
    </div>
  );
};

export default Social;

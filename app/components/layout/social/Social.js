import { Whatsapp, Facebook, Instagram, Threads, Twitter, Youtube, Linkedin } from '../../icons';

const Social = ({ className }) => {
  const SocialIcon = ({ name }) => {
    let icon = null;
    if (name === 'Whatsapp') icon = <Whatsapp />;
    if (name === 'Facebook') icon = <Facebook />;
    if (name === 'Instagram') icon = <Instagram />;
    if (name === 'Threads') icon = <Threads />;
    if (name === 'Twitter') icon = <Twitter />;
    if (name === 'Youtube') icon = <Youtube />;
    if (name === 'Linkedin') icon = <Linkedin />;
    if (icon) {
      return (
        <div className='mx-2 text-slate-500 hover:text-amber-500 hover:cursor-pointer'>{icon}</div>
      );
    }
    return null;
  };

  const SocialItem = ({ name, linkTo }) => {
    return (
      <a href={linkTo} target='_blank' rel='noopener noreferrer' aria-label={name}>
        <SocialIcon name={name} />
      </a>
    );
  };

  return (
    <div className={`flex justify-center ${className ? className : ''}`}>
      <SocialItem name='Whatsapp' linkhref='https://wa.me/5547988704247' />
      <SocialItem name='Facebook' linkhref='https://www.facebook.com/' />
      <SocialItem name='Instagram' linkhref='https://www.instagram.com/' />
      <SocialItem name='Threads' linkhref='https://www.threads.net/' />
      <SocialItem name='Twitter' linkhref='https://www.twitter.com/' />
      <SocialItem name='Youtube' linkhref='https://www.youtube.com/' />
      <SocialItem name='Linkedin' linkhref='https://www.linkedin.com/' />
    </div>
  );
};

export default Social;

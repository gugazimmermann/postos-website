const YoutubeEmbed = ({ embedId }) => (
  <iframe
    className='w-full h-full'
    src={`https://www.youtube.com/embed/${embedId}`}
    frameBorder='0'
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    allowFullScreen
    title='Embedded youtube'
  />
);

export default YoutubeEmbed;

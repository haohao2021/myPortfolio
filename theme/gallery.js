
const Gallery = () => {
  const images = [
    { src: 'https://res.cloudinary.com/moonbomber/image/upload/v1711965151/blog/visual/FullSizeRender_VSCO_glbb0k.jpg', alt: 'Stockholm' },
    { src: 'https://res.cloudinary.com/moonbomber/image/upload/v1710422193/blog/visual/kr92ydy9ogfbtyzwqhvd.jpg', alt: 'Gothenburg' },
    { src: 'https://res.cloudinary.com/moonbomber/image/upload/v1710422193/blog/visual/mhci779nw4c3i0ht5ppp.jpg', alt: 'Gothenburg' },
    { src: 'https://res.cloudinary.com/moonbomber/image/upload/v1710422192/blog/visual/iluzs1aqu9isnk0jhopa.jpg', alt: 'Gothenburg' },
    { src: 'https://res.cloudinary.com/moonbomber/image/upload/v1710422192/blog/visual/dvbus28cxsao6bz883sp.jpg' },
    { src: 'https://res.cloudinary.com/moonbomber/image/upload/v1710422192/blog/visual/nwv8xsjks5nzvvql6x4q.jpg' },
    { src: 'https://res.cloudinary.com/moonbomber/image/upload/v1710422191/blog/visual/fi0ue61de6jmxs6h513x.jpg' },
    { src: 'https://res.cloudinary.com/moonbomber/image/upload/v1710422190/blog/visual/cjccauuwzbehwpea2uts.jpg' },
    { src: 'https://res.cloudinary.com/moonbomber/image/upload/v1710422190/blog/visual/g2yypdq9i2w1t1ce98yj.jpg' },
    { src: 'https://res.cloudinary.com/moonbomber/image/upload/v1710422189/blog/visual/quudfwr0cnwpxlyaybbm.jpg' },
    { src: 'https://res.cloudinary.com/moonbomber/image/upload/v1710422189/blog/visual/exlj1xtwha2nuryni0hj.jpg' },
    { src: 'https://res.cloudinary.com/moonbomber/image/upload/v1710422188/blog/visual/xwvf0fajhyv3nimiaqum.jpg' },
    { src: 'https://res.cloudinary.com/moonbomber/image/upload/v1710422188/blog/visual/pfinvfteahhu6emkqbus.jpg' },
    { src: 'https://res.cloudinary.com/moonbomber/image/upload/v1710422188/blog/visual/dgnssulwz2wtpjdbllvg.jpg' },
    { src: 'https://res.cloudinary.com/moonbomber/image/upload/v1710422187/blog/visual/igo6kvilohsvgj0suhat.jpg' },
    { src: 'https://res.cloudinary.com/moonbomber/image/upload/v1710422187/blog/visual/exe3brqw1edsive3e3sk.jpg' },
  ];

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <a key={index} href={image.src} target="_blank" rel="noopener noreferrer">
          <img src={image.src} alt={image.alt || 'Gallery image'} />
        </a>
      ))}
      <style jsx>{`
        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 10px;
        }
        img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          aspect-ratio: 1 / 1;
        }
      `}</style>
    </div>
  );
};

export default Gallery;

  
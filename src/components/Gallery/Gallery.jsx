import styles from "../Gallery/Gallery.module.css";
import Card from "../CardGallery/CardGallery";

const cardData = [
  {
    title: "OpenAI",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6e/OpenAI_Logo.svg",
    link: "https://openai.com",
  },
  {
    title: "Google",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    link: "https://www.google.com",
  },
  {
    title: "GitHub",
    image:
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    link: "https://github.com",
  },
];

const Gallery = () => {
  return (
    <section id="Gallery">
      <div className={styles.wrapperGallery}>
        <div className={styles.galleryContainer}>
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

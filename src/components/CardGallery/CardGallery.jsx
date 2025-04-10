 import styles from "../CardGallery/CardGallery.module.css"


const CardGallery = ({ title, image, link }) => {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.Card}
      >
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </a>
    );
  };
  
  export default CardGallery;
import styles from "./Gallery.module.css";
import listSites from "./Gallery";

const Gallery = () => {
  return (
    <section>
      <div className={styles.wrapperGallery}>
        <h2>Galeria de Imagens com fotos</h2>
        <div className={styles.imgGallery}>
          <div className={styles.divImg}>
            {listSites.map((site, index) => (
              <a
                key={index}
                href={site.imgLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <img
                    src={site.imgSrc}
                    alt={site.imgTitle}
                    title={site.imgTitle}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

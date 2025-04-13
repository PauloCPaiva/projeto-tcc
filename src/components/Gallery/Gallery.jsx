import styles from "./Gallery.module.css";
import listSites from "./Gallery";

const Gallery = () => {
  return (
    <section id="gallery">
      <div className={styles.wrapperGallery}>
        <h2>
          Seu aprendizado prepara <span>você</span> para <span>criar</span>
          <span>soluções</span> reais e <span>inovadoras</span>
        </h2>
        <p>
          Cada graduação conta com <span>Projetos Especiais</span>
        </p>
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

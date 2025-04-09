import styles from "../Footer/Footer.module.css";

const Footer = () => {
  return (
    // <footer className={styles.Footer}>
    //   <div className={styles.wrapperFooter}>
    //     <div>
    //       <a href="" target="_blank">
    //         <h2>FIRJAN</h2>
    //       </a>
    //       <p>Siga-nos</p>
    //       <div>
    //         <img src="" alt="" />
    //         <img src="" alt="" />
    //         <img src="" alt="" />
    //         <img src="" alt="" />
    //       </div>
    //     </div>
    //     <div></div>
    //     <div></div>
    //   </div>
    // </footer>
    <footer>
      <div className={styles.wrapperFooter}>
        <div className={styles.footerContent}>
          <div className={styles.contactInfo}>
            <h3>Contato 1</h3>
            <p>Email: contato1@exemplo.com</p>
            <p>Telefone: (11) 1234-5678</p>
            <p>Endereço: Rua Exemplo 1, 123</p>
            <div className={styles.socialMedia}>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>

          <div className={styles.contactInfo}>
            <h3>Contato 2</h3>
            <p>Email: contato2@exemplo.com</p>
            <p>Telefone: (11) 2345-6789</p>
            <p>Endereço: Rua Exemplo 2, 456</p>
            <div className={styles.socialMedia}>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>

          <div className={styles.contactInfo}>
            <h3>Contato 3</h3>
            <p>Email: contato3@exemplo.com</p>
            <p>Telefone: (11) 3456-7890</p>
            <p>Endereço: Rua Exemplo 3, 789</p>
            <div className={styles.socialMedia}>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>

          <div className={styles.contactInfo}>
            <h3>Contato 4</h3>
            <p>Email: contato4@exemplo.com</p>
            <p>Telefone: (11) 4567-8901</p>
            <p>Endereço: Rua Exemplo 4, 101</p>
            <div className={styles.socialMedia}>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.disclaimer}>
        <p>© 2025 Nome da Empresa - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

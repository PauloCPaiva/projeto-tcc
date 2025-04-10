import styles from "../Footer/Footer.module.css";
import ContactCard from "../ContactCard/ContactCard";
import listContats from "../ContactCard/listContats";

const Footer = () => {
  return (
    <footer>
      <div className={styles.wrapperFooter}>
        <div className={styles.footerContent}>
        <h2>Lista de Contatos</h2>
          <div className={styles.Contacts}>
            {listContats.map((contato, index) => (
              <ContactCard
                key={index}
                title={contato.title}
                email={contato.email}
                phone={contato.phone}
                socialMedia={contato.socialMedia} // Passando a lista de redes sociais
              />
            ))}
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

import styles from "../ContactCard/ContactCard.module.css";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

// Função para pegar o ícone baseado no nome da rede social
const getIconByName = (name) => {
  switch (name.toLowerCase()) {
    case "instagram":
      return <FaInstagram />;
    case "linkedin":
      return <FaLinkedin />;
    case "github":
      return <FaGithub />;
    default:
      return null; // Ou pode retornar um ícone genérico
  }
};
const ContactCard = ({ title, email, phone, socialMedia }) => {
  return (
    <div className={styles.contactInfo}>
      <h3>{title}</h3>
      <p>Email: {email}</p>
      <p>Telefone: {phone}</p>

      {/* Se houver mídias sociais, exibe */}
      {socialMedia.length > 0 && (
        <>
          <h3>Mídias</h3>
          <div className={styles.socialMedia}>
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                {getIconByName(social.name)} {social.name}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ContactCard;

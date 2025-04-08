import mailIcon from "../assets/icons/social/mail.png";
import instagramIcon from "../assets/icons/social/instagram.png";
import linkedinIcon from "../assets/icons/social/linkedin.png";
import githubIcon from "../assets/icons/social/github.png";
import "../assets/styles/Contact.css";

const Contact = () => {
  
  return (
    <div>
      <section id="contact" className="contact">
        <h3 className="contact__title">Contato</h3>

        <p className="contact__details">
          Desenvolvedor front-end focado em experiências web modernas. <br />
          Vamos tirar seu projeto do papel? Me chama!
        </p>

        <div className="contact__email-wrapper">
          <img src={mailIcon} className="contact__email-icon" alt="Ícone de e-mail" />
          <a href="mailto:luizgonzagafm1997@gmail.com" className="contact__email">
            luizgonzagafm1997@gmail.com
          </a>
        </div>

        <div className="contact__social">
          <ul className="contact__social-list">
            <li className="contact__social-item">
              <a href="#" className="contact__social-link">
                <img src={instagramIcon} alt="Instagram" className="contact__social-icon" />
              </a>
            </li>
            <li className="contact__social-item">
              <a href="#" className="contact__social-link">
                <img src={linkedinIcon} alt="LinkedIn" className="contact__social-icon" />
              </a>
            </li>
            <li className="contact__social-item">
              <a href="#" className="contact__social-link">
                <img src={githubIcon} alt="GitHub" className="contact__social-icon" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Contact;

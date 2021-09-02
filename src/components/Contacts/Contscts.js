import './Contacts.css';
import telegram from '../../images/telegram.svg';
import instagram from '../../images/instagram-logo.svg';
import linkedin from '../../images/linkedin.svg';
import github from '../../images/github.svg';

const Contacts = () => {
    return (
        <section id="contacts" className="contacts">
            <h2 className="contacts__title">Contacts</h2>
            <p className="contacts__text">Want to know more or just chat? You are welcome!</p>
            <a className="contacts__email" href="mailto:tsyalgen@gmail.com">Send message</a>
            <ul className="contacts__social">
                <li className="contacts__item">
                    <a href="https://t.me/atsybin" target="_blank" rel="noreferrer noopener" className="contacts__link">
                        <img src={telegram} alt="telegram logo" className="contacts__image"/>
                        <span className="contacts__item_hover">Telegram</span>
                    </a>
                </li>
                <li className="contacts__item">
                    <a href="https://www.instagram.com/atsybin/" target="_blank" rel="noreferrer noopener" className="contacts__link">
                        <img src={instagram} alt="instagram logo" className="contacts__image"/>
                        <span className="contacts__item_hover">Instagram</span>
                    </a>
                </li>
                <li className="contacts__item">
                    <a href="https://www.linkedin.com/in/atsybin/" target="_blank" rel="noreferrer noopener" className="contacts__link">
                        <img src={linkedin} alt="linkedin logo" className="contacts__image"/>
                        <span className="contacts__item_hover">Linkedin</span>
                    </a>
                </li>
                <li className="contacts__item">
                    <a href="https://github.com/tsyalgen" target="_blank" rel="noreferrer noopener" className="contacts__link">
                        <img src={github} alt="github logo" className="contacts__image"/>
                        <span className="contacts__item_hover">Github</span>
                    </a>
                </li>
            </ul>
            <p className="contacts__text">&copy; {new Date().getFullYear()} Aleksei Tsybin</p>
        </section>
    );
}

export default Contacts;
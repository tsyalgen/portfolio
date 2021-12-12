import './Portfolio.css';
import job from '../../images/job.png';
import explorer from '../../images/explorer.png';
import mesto from '../../images/mesto.png';


const Portfolio = () => {

    return (
        <section id="portfolio" className="portfolio">
            <h2 className="portfolio__title">Portfolio</h2>
            <ul className="portfolio__items">
                <li className="portfolio__item">
                    <img src={explorer} alt="movies explorer" className="portfolio__item-image"/>
                    <div className="portfolio__links">
                        <label className="portfolio__link-info"/>
                        <div className="portfolio__item-info">
                            <h3 className="portfolio__item-title">Movie Explorer</h3>
                            <p className="portfolio__item-description">Дипломный проект Яндекс.Практикума.
                                Представляет собой веб-приложение с функционалом поиска и
                                сохранения в свой профиль фильмов с базы BeatMovie.</p>
                            <p className="portfolio__item-description">Стек: React.js, Express.js, MongoDB.</p>
                        </div>
                        <a className="portfolio__link-github" href="https://tsyalgen.nomoredomains.club/"
                           target="_blank" rel="noreferrer noopener"/>
                        <a className="portfolio__link-external" href="https://tsyalgen.nomoredomains.club/"
                           target="_blank" rel="noreferrer noopener"/>
                    </div>
                    Movie Explorer
                </li>
                <li className="portfolio__item">
                    <img src={mesto} alt="my job" className="portfolio__item-image"/>
                    <div className="portfolio__links">
                        <label className="portfolio__link-info"/>
                        <div className="portfolio__item-info">
                            <h3 className="portfolio__item-title">Movie Explorer</h3>
                            <p className="portfolio__item-description">Дипломный проект Яндекс.Практикума.
                                Представляет собой веб-приложение с функционалом поиска и
                                сохранения в свой профиль фильмов с базы BeatMovie.</p>
                            <p className="portfolio__item-description">Стек: React.js, Express.js, MongoDB.</p>
                        </div>
                        <a className="portfolio__link-github" href="https://tsyalgen.nomoredomains.club/"
                           target="_blank" rel="noreferrer noopener"/>
                        <a className="portfolio__link-external" href="https://tsyalgen.nomoredomains.club/"
                           target="_blank" rel="noreferrer noopener"/>
                    </div>
                    Mesto
                </li>
                <li className="portfolio__item">
                    <img src={job} alt="my job" className="portfolio__item-image"/>
                    <div className="portfolio__links">
                        <label className="portfolio__link-info"/>
                        <div className="portfolio__item-info">
                            <h3 className="portfolio__item-title">Movie Explorer</h3>
                            <p className="portfolio__item-description">Дипломный проект Яндекс.Практикума.
                                Представляет собой веб-приложение с функционалом поиска и
                                сохранения в свой профиль фильмов с базы BeatMovie.</p>
                            <p className="portfolio__item-description">Стек: React.js, Express.js, MongoDB.</p>
                        </div>
                        <a className="portfolio__link-github" href="https://tsyalgen.nomoredomains.club/"
                           target="_blank" rel="noreferrer noopener"/>
                        <a className="portfolio__link-external" href="https://tsyalgen.nomoredomains.club/"
                           target="_blank" rel="noreferrer noopener"/>
                    </div>
                    Movie Explorer
                </li>

            </ul>
        </section>
    );
}

export default Portfolio;
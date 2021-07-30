import './Portfolio.css';
import job from '../../images/job.png';

//TODO по ховеру на картинку - всплывающиее инфо о проекте(с закрытием) и иконка ссылки на сайт, имя - ссылка на сайт

const Portfolio = () => {
    return(
        <section id="portfolio" className="portfolio">
            <h2 className="portfolio__title">Portfolio</h2>
            <ul className="portfolio__items">
                <li className="portfolio__item">
                    <a className="portfolio__item__link transparence" href="#" rel="noreferrer noopener">
                        <img src={job} alt="my job" className="portfolio__item__image"/>
                        <p className="portfolio__item__name">Movie Explorer</p>
                    </a>
                </li>
                <li className="portfolio__item transparence">
                    <a className="portfolio__item__link" href="#" rel="noreferrer noopener">
                        <img src={job} alt="my job" className="portfolio__item__image"/>
                        <p className="portfolio__item__name">Mesto</p>
                    </a>
                </li>
                <li className="portfolio__item transparence">
                    <a className="portfolio__item__link" href="#" rel="noreferrer noopener">
                        <img src={job} alt="my job" className="portfolio__item__image"/>
                        <p className="portfolio__item__name">Russia Travel</p>
                    </a>
                </li>

            </ul>
        </section>
    );
}

export default Portfolio;
import './Portfolio.css';
import job from '../../images/job.png';
import {useEffect, useState} from "react";


const Portfolio = () => {

    const [isChange, setIsChange] = useState(false);

    function handleToggle() {
        setIsChange(!isChange);
    }

    return (
        <section id="portfolio" className="portfolio">
            <h2 className="portfolio__title">Portfolio</h2>
            <ul className="portfolio__items">
                <li className="portfolio__item">
                    {/*TODO вынести вот эту всю красоту в отедльный компонент?*/}
                    {/*TODO СБОКУ ИНФО И ПРОСТО ПО НАВЕДЕНИЮ ПУСТЬ ВСПЛЫВАЕТ ВСЯ ИНФА!!!!!! БЕЗ ЧЕКБОКСА БИНГО НАХУЙ*/}
                    {/*ТАМ ЖЕ СБОКУ ГИТХАБ И ЭКСТЕРНАЛ ЛИНК БОЖЕ, по наведению на инфо меняют цвет?*/}
                    <img src={job} alt="my job" className="portfolio__item__image"/>
                    <div className="portfolio__links">
                        <input className="portfolio__menu-toggle" id="menu-toggle"
                               type="checkbox" checked={isChange} onChange={() => {}}/>
                        <label className="portfolio__link__info" htmlFor="menu-toggle" onClick={handleToggle}/>
                        <div className="portfolio__menu-box">
                            <h3>Movie Explorer</h3>
                            <h4>ваще тут будет красиво отредаченное описание все дела но пока так</h4>
                            <p>Дипломный проект Яндекс.Практикума.
                                Представляет собой веб-приложение с функционалом поиска и
                                сохранения в свой профиль фильмов с базы BeatMovie.</p>
                            <p>Стек: React.js, Express.js, MongoDB.</p>
                            <a href="https://github.com/tsyalgen/movies-explorer-frontend"
                               target="_blank" rel="noreferrer noopener">тут будет иконка гитхаба</a>
                        </div>
                        <a className="portfolio__link__external" href="https://tsyalgen.nomoredomains.club/"
                           target="_blank" rel="noreferrer noopener"/>
                    </div>
                    Movie Explorer
                </li>
                <li className="portfolio__item">
                    <img src={job} alt="my job" className="portfolio__item__image"/>
                    <div className="portfolio__links">
                        <input className="portfolio__menu-toggle" id="menu-toggle"
                               type="checkbox" checked={isChange} onChange={() => {}}/>
                        <label className="portfolio__link__info" htmlFor="menu-toggle" onClick={handleToggle}/>
                        <div className="portfolio__menu-box">
                            <h3>Movie Explorer</h3>
                            <h4>ваще тут будет красиво отредаченное описание все дела но пока так</h4>
                            <p>Дипломный проект Яндекс.Практикума.
                                Представляет собой веб-приложение с функционалом поиска и
                                сохранения в свой профиль фильмов с базы BeatMovie.</p>
                            <p>Стек: React.js, Express.js, MongoDB.</p>
                            <a href="https://github.com/tsyalgen/movies-explorer-frontend"
                               target="_blank" rel="noreferrer noopener">тут будет иконка гитхаба</a>
                        </div>
                        <a className="portfolio__link__external" href="https://tsyalgen.nomoredomains.club/"
                           target="_blank" rel="noreferrer noopener"/>
                    </div>
                    Movie Explorer
                </li>
                <li className="portfolio__item">
                    <img src={job} alt="my job" className="portfolio__item__image"/>
                    <div className="portfolio__links">
                        <input className="portfolio__menu-toggle" id="menu-toggle"
                               type="checkbox" checked={isChange} onChange={() => {}}/>
                        <label className="portfolio__link__info" htmlFor="menu-toggle" onClick={handleToggle}/>
                        <div className="portfolio__menu-box">
                            <h3>Movie Explorer</h3>
                            <h4>ваще тут будет красиво отредаченное описание все дела но пока так</h4>
                            <p>Дипломный проект Яндекс.Практикума.
                                Представляет собой веб-приложение с функционалом поиска и
                                сохранения в свой профиль фильмов с базы BeatMovie.</p>
                            <p>Стек: React.js, Express.js, MongoDB.</p>
                            <a href="https://github.com/tsyalgen/movies-explorer-frontend"
                               target="_blank" rel="noreferrer noopener">тут будет иконка гитхаба</a>
                        </div>
                        <a className="portfolio__link__external" href="https://tsyalgen.nomoredomains.club/"
                           target="_blank" rel="noreferrer noopener"/>
                    </div>
                    Movie Explorer
                </li>

            </ul>
        </section>
    );
}

export default Portfolio;
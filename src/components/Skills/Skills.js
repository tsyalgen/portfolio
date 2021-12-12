import './Skills.css';
import figma from '../../images/figma.svg';
import html from '../../images/html.svg';
import css from '../../images/css.svg';
import js from '../../images/js.svg';
import vue from '../../images/vue.svg';
import react from '../../images/react.svg';
// import redux from '../../images/redux.svg';
import nodejs from '../../images/nodejs.svg';
import express from '../../images/express.svg';
import mongodb from '../../images/mongodb.svg';
import git from '../../images/git.svg';



const Skills = () => {

    return(
        <section id="skills" className="skills">
            <h2 className="skills__title">Skills</h2>
            <p className="skills__text">I work with such techs as</p>
            <ul className="skills__items">
                <li className="skills__item">
                    <a className="skills__item__link" href="https://html.spec.whatwg.org/multipage/" target="_blank" rel="noreferrer noopener" >
                        <img src={html} alt="html logo" className="skills__item__image"/>
                        <p className="skills__item__name">HTML</p>
                    </a>
                </li>
                <li className="skills__item">
                    <a className="skills__item__link" href="https://www.w3.org/TR/CSS/" target="_blank" rel="noreferrer noopener" >
                        <img src={css} alt="css logo" className="skills__item__image"/>
                        <p className="skills__item__name">CSS</p>
                    </a>
                </li>
                <li className="skills__item">
                    <a className="skills__item__link" href="https://www.ecma-international.org/publications-and-standards/standards/ecma-262/" target="_blank" rel="noreferrer noopener" >
                        <img src={js} alt="js logo" className="skills__item__image"/>
                        <p className="skills__item__name">JavaScript</p>
                    </a>
                </li>
                <li className="skills__item">
                    <a className="skills__item__link" href="https://vuejs.org/" target="_blank" rel="noreferrer noopener" >
                        <img src={vue} alt="vue logo" className="skills__item__image"/>
                        <p className="skills__item__name">Vue.js</p>
                    </a>
                </li>
                <li className="skills__item">
                    <a className="skills__item__link" href="https://reactjs.org/" target="_blank" rel="noreferrer noopener" >
                        <img src={react} alt="react logo" className="skills__item__image"/>
                        <p className="skills__item__name">ReactJS</p>
                    </a>
                </li>
                <li className="skills__item">
                    <a className="skills__item__link" href="https://nodejs.org/en/" target="_blank" rel="noreferrer noopener" >
                        <img src={nodejs} alt="nodejs logo" className="skills__item__image"/>
                        <p className="skills__item__name">Node.js</p>
                    </a>
                </li>
                <li className="skills__item">
                    <a className="skills__item__link" href="https://www.mongodb.com/" target="_blank" rel="noreferrer noopener" >
                        <img src={mongodb} alt="mongodb logo" className="skills__item__image"/>
                        <p className="skills__item__name">MongoDB</p>
                    </a>
                </li>
                <li className="skills__item">
                    <a className="skills__item__link" href="https://expressjs.com" target="_blank" rel="noreferrer noopener" >
                        <img src={express} alt="nextjs logo" className="skills__item__image"/>
                        <p className="skills__item__name">Express</p>
                    </a>
                </li>
                <li className="skills__item">
                    <a className="skills__item__link" href="https://git-scm.com/" target="_blank" rel="noreferrer noopener" >
                        <img src={git} alt="git logo" className="skills__item__image"/>
                        <p className="skills__item__name">GIT</p>
                    </a>
                </li>
                <li className="skills__item">
                    <a className="skills__item__link" href="https://www.figma.com/" target="_blank" rel="noreferrer noopener" >
                        <img src={figma} alt="figma logo" className="skills__item__image"/>
                        <p className="skills__item__name">Figma</p>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Skills;

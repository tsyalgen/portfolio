import './Skills.css';
import figma from '../../images/Figma.svg';

const Skills = () => {

    //TODO переделать на 100% растяжение по контенту и отображение одной строкой
    return(
        <section id="skills" className="skills">
            <h2 className="skills__title">Skills</h2>
            <p className="skills__text">I work in such programs as</p>
            <ul className="skills__items">
                <li className="skills__item">
                    <a className="skills__item__link" href="#" rel="noreferrer noopener" >
                        <img src={figma} alt="figma logo" className="skills__item__image transparence"/>
                        <p className="skills__item__name">HTML</p>
                    </a>
                </li>
                <li className="skills__item">
                    <a className="skills__item__link" href="#" rel="noreferrer noopener" >
                        <img src={figma} alt="figma logo" className="skills__item__image transparence"/>
                        <p className="skills__item__name">CSS</p>
                    </a>
                </li>
                <li className="skills__item">
                    <a className="skills__item__link" href="#" rel="noreferrer noopener" >
                        <img src={figma} alt="figma logo" className="skills__item__image transparence"/>
                        <p className="skills__item__name">JavaScript</p>
                    </a>
                </li>
                <li className="skills__item">
                    <a className="skills__item__link" href="#" rel="noreferrer noopener" >
                        <img src={figma} alt="figma logo" className="skills__item__image transparence"/>
                        <p className="skills__item__name">ReactJS</p>
                    </a>
                </li>
                <li className="skills__item">
                    <a className="skills__item__link" href="#" rel="noreferrer noopener" >
                        <img src={figma} alt="figma logo" className="skills__item__image transparence"/>
                        <p className="skills__item__name">Redux</p>
                    </a>
                </li>
                <li className="skills__item">
                    <a className="skills__item__link" href="#" rel="noreferrer noopener" >
                        <img src={figma} alt="figma logo" className="skills__item__image transparence"/>
                        <p className="skills__item__name">NodeJS</p>
                    </a>
                </li>
                <li className="skills__item">
                    <a className="skills__item__link" href="#" rel="noreferrer noopener" >
                        <img src={figma} alt="figma logo" className="skills__item__image transparence"/>
                        <p className="skills__item__name">NextJS</p>
                    </a>
                </li>
                <li className="skills__item">
                    <a className="skills__item__link" href="#" rel="noreferrer noopener" >
                        <img src={figma} alt="figma logo" className="skills__item__image transparence"/>
                        <p className="skills__item__name">MongoDB</p>
                    </a>
                </li>
                <li className="skills__item">
                    <a className="skills__item__link" href="#" rel="noreferrer noopener" >
                        <img src={figma} alt="figma logo" className="skills__item__image transparence"/>
                        <p className="skills__item__name">GIT</p>
                    </a>
                </li>
                <li className="skills__item">
                    <a className="skills__item__link" href="#" rel="noreferrer noopener" >
                        <img src={figma} alt="figma logo" className="skills__item__image transparence"/>
                        <p className="skills__item__name">Figma</p>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Skills;
import './Header.css';
import { useState} from "react";
import {Link} from 'react-scroll';

const Header = () => {

    const [isChange, setIsChange] = useState(false);

    function handleToggle () {
        setIsChange(!isChange);
    }

    return (
        <header className="header">
            <nav className="header__items header__menu_desktop">
                <Link activeClass="header__item_active" to="main" spy={true} smooth={true}
                      offset={-83} duration={600} className="header__item">Home
                </Link>
                <Link activeClass="header__item_active" to="about" spy={true} smooth={true}
                      offset={-83} duration={600} className="header__item">About me
                </Link>
                <Link activeClass="header__item_active" to="skills" spy={true} smooth={true}
                      offset={-83} duration={600} className="header__item">Skills
                </Link>
                {/*<Link activeClass="header__item_active" to="portfolio" spy={true} smooth={true}*/}
                {/*      offset={-83} duration={600} className="header__item">Portfolio*/}
                {/*</Link>*/}
                <Link activeClass="header__item_active" to="contacts" spy={true} smooth={true}
                      offset={-83} duration={600} className="header__item">Contacts
                </Link>
            </nav>
            {/*BURGER*/}
            <div className="header__menu_mobile header__menu-burger">
                <input className="header__menu-toggle" id="menu-toggle"
                       type="checkbox" checked={isChange} onChange={() => {}}/>
                <label className="header__menu-btn" htmlFor="menu-toggle" onClick={handleToggle}>
                    <span className="header__menu-span"/>
                </label>
                <ul className="header__menu-box">
                    <li className="header__menu-item">
                        <Link activeClass="header__menu-item_active" to="main"
                              spy={true} smooth={true} onClick={handleToggle}
                              duration={600} className="header__menu-link">Home
                        </Link>
                    </li>
                    <li className="header__menu-item">
                        <Link activeClass="header__menu-item_active" to="about"
                              spy={true} smooth={true} onClick={handleToggle}
                              duration={600} className="header__menu-link">About me
                        </Link>
                    </li>
                    <li className="header__menu-item">
                        <Link activeClass="header__menu-item_active" to="skills"
                              spy={true} smooth={true} onClick={handleToggle}
                              duration={600} className="header__menu-link">Skills
                        </Link>
                    </li>
                    {/*<li className="header__menu-item">*/}
                    {/*    <Link activeClass="header__menu-item_active" to="portfolio"*/}
                    {/*          spy={true} smooth={true} onClick={handleToggle}*/}
                    {/*          duration={600} className="header__menu-link">Portfolio*/}
                    {/*    </Link>*/}
                    {/*</li>*/}
                    <li className="header__menu-item">
                        <Link activeClass="header__menu-item_active" to="contacts"
                              spy={true} smooth={true} onClick={handleToggle}
                              duration={600} className="header__menu-link">Contacts
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;

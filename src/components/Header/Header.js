import { Link } from 'react-router-dom'

import style from './Header.module.scss'
import NavigationContent from './NavigationContent/NavigationContent'
import logo from '../../img/logoFalko.png'


const Header = () => {
    return (
        <div className={style['header-wrapper']}>
            <header className={style['header-container']}>
                <div className={style['logo-container']}>
                    <Link to='/'>
                        <img id={style['logo-img']} src={logo} alt="logoFalko" />
                    </Link>
                    <p id={style['logo-text']}>Мебели<br /><span id="second">alco</span></p>
                </div>
                <NavigationContent />
                <div id={style["mobile-contacts"]}>
                     0898 473 056 | 0898 329 138
                </div>
            </header>
        </div>
    )
}

export default Header
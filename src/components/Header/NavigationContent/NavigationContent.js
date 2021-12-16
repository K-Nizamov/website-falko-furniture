import { Link } from 'react-router-dom'

import style from './NavigationContent.module.scss'

let headerContent =
{
    products: 'Продукти',
    projects: 'Проекти',
    promotions: 'Промоции',
    materials: 'Материали',
    about: 'За нас',
    contacts: 'Контакти'
}

const NavigationContent = () => {
    let arr = Object.entries(headerContent)
    return (
        <nav className={style["nav-container"]}>
            {arr.map(x => <Link key={arr.indexOf(x)} to={x[0]}>{x[1]}</Link>)}
        </nav>
    )
}

export default NavigationContent
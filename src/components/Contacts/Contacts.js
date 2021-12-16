import style from './Contacts.module.scss'
import contactImgBackground from '../../img/contacts.jpg'

import ContactForm from './ContactForm/ContactForm'

function Contacts() {
    return (
            <>
                <img src={contactImgBackground} className={style.backgroundImg} />
                <div className={style['contact-page-content']}>
                    <span id={style['first']}>Контакти</span>
                    <br />Свържете се с нас
                </div>
                <ContactForm />
            </>

    )
}
export default Contacts
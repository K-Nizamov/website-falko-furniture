import './ContactInfo.scss'

function ContactInfo() {
    return (
        <section className='contact-info-wrapper'>
            <article className="mobiles">
            <h2>ОБАДИ НИ СЕ</h2>
            <p>0898767655  |  0893456753</p>
            </article>
            <article className="mails">
            <h2>ИЛИ НИ ПИШИ</h2>
            <p>falkomebeli@gmail.com</p>
            </article>
            <button className="order-btn">НАПРАВИ ПОРЪЧКА</button>
        </section>
      );
}

export default ContactInfo;
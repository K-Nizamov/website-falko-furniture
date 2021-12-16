import style from './ContactForm.module.scss'
const privacyPolicyUrl = 'https://www.fusionphp.net/blog/politika-za-poveritelnost-bezplaten-shablon/'

const onClickHandler = () => {
    window.open(privacyPolicyUrl)
}

function ContactForm() {
    return (
        <form className={style['form-wrapper']}>
            <input className={style["input-fields-style"]} type="text" name="username" id={style["username"]} placeholder="Вашето име*" />
            <input className={style["input-fields-style"]} type="email" name="username" id={style["email"]} placeholder="Вашият имейл*" />
            <input className={style["input-fields-style"]} type="text" name='' id={style["subject"]} placeholder="Относно*" />
            <textarea className={style["input-fields-style"]} name="subject-description" id={style["contact-form-textarea"]} cols="30" rows="10" placeholder="Вашето съобщение ..."></textarea>
            <input className={style["input-fields-style"]} type="file" id={style["file"]} name="file" />
            <div id={style["policy-wrapper"]}>
                <input className={style["input-fields-style"]} type="checkbox" id={style["checkbox"]} />
                <div id={style["policy-content"]}>Съгласявам се с <span id={style["privacy-policy"]} onClick={onClickHandler}>политиката на поверителност</span>.</div>
            </div>
            <button name="button" id={style["submit"]}>Изпрати</button>
        </form>
    )
}
export default ContactForm



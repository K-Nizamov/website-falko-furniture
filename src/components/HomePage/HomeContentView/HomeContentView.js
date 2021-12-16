import style from './HomeContentView.module.scss'
import ProductCardView from './ProductCardView/ProductCardView'
import lime from '../../../img/lime-background.jpg'
import kuhnq from '../../../img/kuhnq1.jpg'


function HomeContentView() {
    return (
        <>
            <img src={lime} alt="lime" className={style["home-background"]} />
            <div className={style["products-section-wrapper"]}>
                <p id={style["content-after-main-page"]}>ДИЗАЙН НА МЕБЕЛИ</p>
                <div className={style["product-describe-section"]}>
                    <div className={style["describe-wrapper"]}>
                        <h2>НОВА КОЛЕКЦИЯ КУХНИ</h2>
                        <p>Някакво кратко описание за всяка секция, което ще се показва по този начин,
                            когато потребителя натисне върху, която и да е от тях.</p>
                    </div>
                    <img src={kuhnq} alt="kuhnq" width='460' height="270" />
                </div>
                <div className={style["products-img-wrapper-main-page"]}>
                    <ProductCardView />
                </div>
            </div>
        </>
    )
}
export default HomeContentView
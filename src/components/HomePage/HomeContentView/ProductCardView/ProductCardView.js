import style from "./ProductCardView.module.scss"
import kuhnq from '../../../../img/kuhnq1.jpg'
import spalni from '../../../../img/spalni2.jpg'
import dnevni from '../../../../img/dnevni.jpeg'
import vrati from '../../../../img/vrati.jpg'

let productImgs = {
    'КУХНИ':kuhnq,
    'СПАЛНИ':spalni,
    'ДНЕВНИ':dnevni,
    'ВРАТИ':vrati
}

function ProducCardView() {
    let productsArr = Object.entries(productImgs)
    return (
        productsArr.map(x =>
            < article className={style["images-of-products-main-page"]} >
                <figure>
                    <img src={x[1]} width="200" height="120" alt="КУХНИ" />
                    <figcaption >{x[0]}</figcaption>
                </figure>
            </article >)
    )
}
export default ProducCardView
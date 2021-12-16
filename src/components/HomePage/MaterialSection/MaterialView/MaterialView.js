import style from './MaterialView.module.scss'
import pdch from '../../../../img/pdch.jpg'
import mdf from '../../../../img/mdf.jpg'
import obkov from '../../../../img/obkov.jpg'
import uredi from '../../../../img/uredi.jpg'

let materials =
    [
        {
            material: 'ПДЧ',
            img: pdch
        },
        {
            material: 'МДФ',
            img: mdf
        },
        {
            material: 'ОБКОВ',
            img: obkov
        },
        {
            material: 'УРЕДИ',
            img: uredi
        },
    ]

function MaterialView() {
    return (
        <>
            {materials.map(x =>
                <div className={style["material"]}>
                    <img src={x.img} />
                    <p>{x.material}</p>
                </div>

            )}
        </>
    );
}

export default MaterialView;
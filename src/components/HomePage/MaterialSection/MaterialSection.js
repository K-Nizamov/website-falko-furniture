import style from './MaterialSection.module.scss'
import MaterialView from './MaterialView/MaterialView';

function MaterialSection() {
    return (
        <>
            <div className={style["materials-section-wrapper"]}>
                <h2>ПРОИЗВОДСТВО С KAЧЕСТВЕНИ МАТЕРИАЛИ</h2>
                <div className={style["materials-definitinos"]}>
                    <MaterialView/>
                </div>
            </div>
        </>
    );
}

export default MaterialSection;
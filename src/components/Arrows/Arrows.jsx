import styles from "./Arrows.module.scss"

const Arrows = ({ onNext, onPrev }) => {

    return(
        <div className={styles.arrows}>
            <div className={styles.arrow} onClick={onPrev}></div>
            <div className={styles.arrow} onClick={onNext}></div>
        </div>
    )
}

export default Arrows;
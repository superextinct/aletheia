import styles from "../styles/Gradient.module.scss";

function Gradient() {
    return (
        <div className={styles.wrapper}>
            <img src="images/gradient-4.png" className={styles.gradient4} />
            <img src="images/gradient-3.png" className={styles.gradient3} />
            <img src="images/gradient-2.png" className={styles.gradient2} />
            <img src="images/gradient-1.png" className={styles.gradient1} />
        </div>
    );
}

export default Gradient
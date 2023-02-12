import styles from './MenuButton.module.scss';

export const MenuButton = () => {
    return (
        <button className={styles.buttonWrapper}>
            <div className={styles.buttonBurger}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            <span className={styles.buttonText}>
                Menu
            </span>
        </button>
    )
};
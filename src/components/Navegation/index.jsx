import styles from "./styles.module.css"

export function Navegation() {

    return (
        <div className={styles.container}>
            <span className={styles.span}>Sobre</span>
            <span className={styles.span}>Stack</span>
            <span className={styles.span}>Projetos</span>
        </div>
    )
}
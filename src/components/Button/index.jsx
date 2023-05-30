import styles from "./styles.module.css"

export function Button({ children }) {

    return (
        <button className={styles.button} type="button">{children}</button>
    )
}
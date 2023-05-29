import styles from './styles.module.css'

export function TechCard({ img, children }) {

    return (
        <li className={styles.item}>
            <img className={styles.img} src={img} alt={children} />
            <h3 className={styles.name}>{children}</h3>
        </li>
    )
}
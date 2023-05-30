import styles from "./styles.module.css"
import logoGit from "../../assets/git-icon.png"

export function ProjectCard({ name, description }) {

    return (
        <li className={styles.item}>
            <div className={styles.container}>
                <h3 className={styles.title}>{name}</h3>
                <p className={styles.description}>{description}</p>
                <span className={styles.span}>Saiba Mais</span>
            </div>
            <img className={styles.img} src={logoGit} alt="Logo GitHub" />
        </li>
    )
}
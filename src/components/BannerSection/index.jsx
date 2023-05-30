import { Button } from "../Button/index.jsx";
import banner from "../../assets/banner-img.png"
import styles from "./styles.module.css"
import { username } from "../../data/user.js"

export function BannerSection() {

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <span className={styles.user}>{username}</span>
                <h1 className={styles.title}>Bem vindo ao<br /> meu portifólio</h1>
                <p className={styles.description}>Uma Frase interessante sobre mim</p>
                <Button>Saiba mais</Button>
            </div>
            <img className={styles.img} src={banner} alt="Notebook com varias abas abertas" />
        </section>
    )
}
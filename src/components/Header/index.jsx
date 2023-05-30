import styles from "./styles.module.css"
import logo from "../../assets/portfolio.png"
import { Navegation } from "../Navegation/index.jsx"
import { Button } from "../Button/index.jsx"

export function Header() {

    return (
        <header className={styles.container}>
            <img className={styles.logo} src={logo} alt="Logo Escrita Portifolio" />
            <Navegation />
            <Button>Contato</Button>
        </header>
    )
}
import { user } from '../../data/user.js'
import styles from './styles.module.css'
import logoWhatsApp from '../../assets/whatsapp-icon.png'
import logoLinkedin from '../../assets/linkedin-icon.png'
import logoGitHub from '../../assets/github-icon.png'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <h2 className={styles.title}>Contato</h2>
                <div>
                    <img className={styles.img} src={logoWhatsApp} alt="WhatsApp" />
                    <img className={styles.img} src={logoLinkedin} alt="Linkedin" />
                    <img className={styles.img} src={logoGitHub} alt="GitHub" />
                </div>
            </div>
            <p className={styles.paragraph}>Todos os direitos reservados - <span className={styles.name}>{user}</span></p>
        </footer>
    )
}
import styles from './styles.module.css'
import { technologies } from '../../data/technologies.js'
import { TechCard } from '../TechCard/index.jsx'

export function TechSection() {

    const [technologie1, technologie2, technologie3, technologie4] = technologies

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Tecnologias</h2>
            <ul className={styles.list}>
                <TechCard img={technologie1.img}>{technologie1.name}</TechCard>
                <TechCard img={technologie2.img}>{technologie2.name}</TechCard>
                <TechCard img={technologie3.img}>{technologie3.name}</TechCard>
                <TechCard img={technologie4.img}>{technologie4.name}</TechCard>
            </ul>
        </section>
    )
}

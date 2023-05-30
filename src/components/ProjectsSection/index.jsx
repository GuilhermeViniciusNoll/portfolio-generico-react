import { projects } from "../../data/projects.js"
import { ProjectCard } from "../ProjectCard/index.jsx"
import styles from "./styles.module.css"


export function ProjectSection() {

    const [proj1, proj2, proj3, proj4] = projects

    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Projetos</h1>
            <ul className={styles.list}>
                <ProjectCard name={proj1.name} description={proj1.description} />
                <ProjectCard name={proj2.name} description={proj2.description} />
                <ProjectCard name={proj3.name} description={proj3.description} />
                <ProjectCard name={proj4.name} description={proj4.description} />
            </ul>
        </section>
    )
}
import styles from "./About.module.scss"
import Image from "next/image"

export default function About() {
    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.title}>Sobre</h2>
                <div className={styles.contentDiv}>
                    <Image
                        src={"/profile.png"}
                        alt="Foto de perfil"
                        width={420}
                        height={550}
                        className={styles.profilePic}
                    />
                    <div className={styles.description}>
                        <p className={styles.descriptionText}>
                            Sou arquiteto e tenho como objetivo transformar a vida das pessoas, tornando sonhos realidade ao trazer para o mundo físico tudo o que foi cuidadosamente planejado e desenhado no papel.
                        </p>
                        <p className={styles.descriptionText}>
                            Atuo com projetos residenciais, comerciais, além de reformas de diferentes portes, desde pequenas intervenções até grandes transformações.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
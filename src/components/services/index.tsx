import styles from "./Services.module.scss"

export default function Services() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Serviços</h2>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Projetos residenciais e comerciais</h3>
                    <p className={styles.cardText}>Projetos detalhados de residências e estabelecimentos comerciais, com imersão realista em 3D e alta qualidade na entrega.</p>
                    <p className={styles.learnMore}>Saiba mais</p>
                </div>
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Reformas</h3>
                    <p className={styles.cardText}>Reforme sua casa com modernidade e conforto para transformar seu dia a dia.</p>
                    <p className={styles.learnMore}>Saiba mais</p>
                </div>
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Consultoria Online</h3>
                    <p className={styles.cardText}>Mande-nos online detalhes do seu projeto e receba nossa proposta.</p>
                    <p className={styles.learnMore}>Saiba mais</p>
                </div>
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Legalização</h3>
                    <p className={styles.cardText}>Regularize seu imóvel com total conformidade às exigências da prefeitura local.</p>
                    <p className={styles.learnMore}>Saiba mais</p>
                </div>
            </div>
        </div>
    )
}
import styles from "./Services.module.scss"

export default function Services(){
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Serviços</h2>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Projetos residenciais e comerciais</h3>
                    <p className={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod harum tempora sapiente incidunt est animi molestias minus at? Provident, nobis.</p>
                </div>
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Reformas</h3>
                    <p className={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati amet accusantium, esse quis ex delectus!</p>
                </div>
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Consultoria Online</h3>
                    <p className={styles.cardText}>Mande-nos online detalhes do seu projeto e receba nossa proposta.</p>
                </div>
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Legalização</h3>
                    <p className={styles.cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid assumenda ipsam nihil quisquam vel nisi, repudiandae eius amet excepturi. Exercitationem sed voluptate consectetur pariatur? Libero?</p>
                </div>
            </div>
        </div>
    )
}
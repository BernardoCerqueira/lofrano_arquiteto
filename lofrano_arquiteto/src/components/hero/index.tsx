import Image from "next/image"
import styles from "./Hero.module.scss"
import Link from "next/link"

export default function Hero(){
    return(
        <div className={styles.hero}>
            <h1 className={styles.title}>Início</h1>
            <ul className={styles.list}>
                <Link href={"#about"} className={styles.link}>
                    <li className={styles.listItem}>SOBRE</li>
                </Link>
                <Link href={"#services"} className={styles.link}>
                    <li className={styles.listItem}>SERVIÇOS</li>
                </Link>
                <Link href={"#consulting"} className={styles.link}>
                    <li className={styles.listItem}>CONSULTORIA ONLINE</li>
                </Link>
                <Link href={"#projects"} className={styles.link}>
                    <li className={styles.listItem}>PROJETOS</li>
                </Link>
                <Link href={"#4architects"} className={styles.link}>
                    <li className={styles.listItem}>PARA ARQUITETOS</li>
                </Link>
                <Link href={"#contact"} className={styles.link}>
                    <li className={styles.listItem}>CONTATOS</li>
                </Link>                              
            </ul>
            <Image
                src={"/logo.png"}
                alt="Logo"
                width={256}
                height={256}
                className={styles.logo}
            />
        </div>
    )
}
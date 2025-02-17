"use client"

import styles from "./ForArchitects.module.scss"
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa"
import Link from "next/link"

export default function ForArchitects() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Para Arquitetos</h2>
            <div className={styles.contentDiv}>
                <div className={styles.subtitle}>
                    <span>
                        Maquete 3D <span className={styles.bullet}>•</span> Plantas Baixas <span className={styles.bullet}>•
                        </span>
                    </span>
                    <span>
                        Projetos Executivos <span className={styles.bullet}>•</span> Projeto Legal
                    </span>
                </div>
                <p className={styles.text}>Entre em contato para contratar nossos serviços de freelancer. Somos especializados na elaboração de maquetes eletrônicas, desenvolvimento de plantas baixas e oferecemos suporte em projetos executivos, além de assessorarmos na regularização de projetos junto aos órgãos competentes.</p>
                <div className={styles.btnDiv}>
                    <Link href={"https://www.facebook.com"}>
                        <button className={styles.btn}>
                            <FaFacebookSquare className={styles.icon} />
                        </button>
                    </Link>
                    <Link href={"https://www.facebook.com"}>
                        <button className={styles.btn}>
                            <FaInstagram className={styles.icon} />
                        </button>
                    </Link>
                    <Link href={"https://www.facebook.com"}>
                        <button className={styles.btn}>
                            <FaWhatsapp className={styles.icon} />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
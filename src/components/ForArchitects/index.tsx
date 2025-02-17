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
                    <p>
                        Maquete 3D <span className={styles.bullet}>•</span> Plantas Baixas <span className={styles.bullet}>•
                        </span>
                    </p>
                    <p>
                        Projetos Executivos <span className={styles.bullet}>•</span> Projeto Legal
                    </p>
                </div>
                <div className={styles.listDiv}>
                    <ul className={styles.list}>
                        <li><p>Maquete 3D</p></li>
                        <li><p>Plantas Baixas</p></li>
                        <li><p>Projetos Executivos</p></li>
                        <li><p>Projeto Legal</p></li>
                    </ul>
                </div>
                <p className={styles.text}>Entre em contato para contratar nossos serviços de freelancer. Somos especializados na elaboração de maquetes eletrônicas, desenvolvimento de plantas baixas e oferecemos suporte em projetos executivos, além de assessorarmos na regularização de projetos junto aos órgãos competentes.</p>
                <div className={styles.btnDiv}>
                    <Link
                        href={"https://www.facebook.com/people/Lofrano-Arquitetura/61572186776421/?_rdr"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className={styles.btn}>
                            <FaFacebookSquare className={styles.icon} />
                        </button>
                    </Link>
                    <Link
                        href={"https://www.instagram.com/lofrano.arq/"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className={styles.btn}>
                            <FaInstagram className={styles.icon} />
                        </button>
                    </Link>
                    <Link
                        href={"https://wa.me/5524988139765"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className={styles.btn}>
                            <FaWhatsapp className={styles.icon} />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
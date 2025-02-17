import { Button, Form, Input } from "reactstrap"
import styles from "./Contact.module.scss"
import Link from "next/link"
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa"

export default function Contact() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Contatos</h2>
            <div className={styles.contentDiv}>
                <Form action="" className={styles.form} id="budget">
                    <legend className={styles.formTitle}>Orçamentos:</legend>
                    <div className={styles.inputDiv}>
                        <Input
                            type="text"
                            className={styles.input}
                            placeholder="Nome:"
                        />
                        <Input
                            type="tel"
                            className={styles.input}
                            placeholder="Celular:"
                        />
                        <Input
                            type="email"
                            className={styles.input}
                            placeholder="E-mail:"
                        />
                        <Input
                            type="text"
                            className={styles.input}
                            placeholder="Cidade:"
                        />
                    </div>
                    <Button className={styles.formBtn}>
                        Enviar
                    </Button>
                </Form>
                <div className={styles.contactDiv}>
                    <p className={styles.andOr}>E/OU</p>
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
        </div>
    )
}
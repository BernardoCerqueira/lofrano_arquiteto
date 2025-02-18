import { Button, Form, Input } from "reactstrap"
import styles from "./Contact.module.scss"
import Link from "next/link"
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { FormEvent, useState } from "react"

export default function Contact() {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [city, setCity] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async (ev: FormEvent) => {
        ev.preventDefault()

        const response = await fetch("/api/sendEmail", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, phone, email, city})
        })

        const data = await response.json()
        setMessage(data.message)
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Contatos</h2>
            <div className={styles.contentDiv}>
                <Form
                    onSubmit={handleSubmit}
                    className={styles.form}
                    id="budget"
                >
                    <legend className={styles.formTitle}>Orçamentos:</legend>
                    <div className={styles.inputDiv}>
                        <Input
                            type="text"
                            className={styles.input}
                            placeholder="Nome:"
                            value={name}
                            onChange={(ev) => setName(ev.target.value)}
                            required
                        />
                        <Input
                            type="tel"
                            className={styles.input}
                            placeholder="Celular:"
                            value={phone}
                            onChange={(ev) => setPhone(ev.target.value)}
                            required
                        />
                        <Input
                            type="email"
                            className={styles.input}
                            placeholder="E-mail:"
                            value={email}
                            onChange={(ev) => setEmail(ev.target.value)}
                            required
                        />
                        <Input
                            type="text"
                            className={styles.input}
                            placeholder="Cidade:"
                            value={city}
                            onChange={(ev) => setCity(ev.target.value)}
                            required
                        />
                    </div>
                    <Button className={styles.formBtn} type="submit">
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
                {message && <p>{message}</p>}
            </div>
        </div>
    )
}
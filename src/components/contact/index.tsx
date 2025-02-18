import styles from "./Contact.module.scss"
import Link from "next/link"
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { Button, Form, Input } from "reactstrap"
import { FormEvent, useEffect, useRef, useState } from "react"
import "jsuites"
import "jsuites/dist/jsuites.css"
import { CitiesArray } from "@/app/api/getCities/route"

export default function Contact() {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [city, setCity] = useState("")
    const [message, setMessage] = useState("")

    const [cities, setCities] = useState<CitiesArray>([])

    const [emailCorrect, setEmailCorrect] = useState(true)
    const emailInput = useRef<Input>(null)

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const res = await fetch("/api/getCities")
                const data = await res.json()
                setCities(data)
            } catch (error) {
                console.error("Erro ao buscar cidades:", error)
            }
        }

        fetchCities()
    }, [])

    const handleSubmit = async (ev: FormEvent) => {
        ev.preventDefault()

        const correctEmail = await checkEmail(email)

        if (correctEmail === false) {
            setMessage(`O e-mail deve possuir um ponto (".").`)
            return
        }

        const response = await fetch(`${process.env.URL}/api/sendEmail`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, phone, email, city })
        })

        const data = await response.json()
        setMessage(data.message)
    }

    const checkEmail = async (email: string) => {
        if (!email.match(/\./)) {
            setEmailCorrect(false)
            return false
        } else {
            setEmailCorrect(true)
            return true
        }
    }

    return (
        <div className={styles.container}>
            <datalist id="brazilianCities">
                {cities.map(el => (
                    <option value={el.nome} key={el.id}>{el.nome}</option>
                ))}
            </datalist>

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
                            maxLength={50}
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
                            data-mask="[-]+55 (00) 00000-0000"
                        />
                        <Input
                            type="email"
                            ref={emailInput}
                            style={
                                emailCorrect ? { borderColor: '#545454' }
                                    : { borderColor: 'red' }
                            }
                            className={styles.input}
                            placeholder="E-mail:"
                            value={email}
                            onChange={(ev) => setEmail(ev.target.value)}
                            required
                        />
                        <Input
                            type="text"
                            list="brazilianCities"
                            maxLength={58}
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
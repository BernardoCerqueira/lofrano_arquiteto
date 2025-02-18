import "jsuites"
import "jsuites/dist/jsuites.css"
import styles from "./Contact.module.scss"
import Link from "next/link"
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { Button, Form, Input, Spinner } from "reactstrap"
import { FormEvent, useEffect, useRef, useState } from "react"
import { CitiesArray } from "@/app/api/getCities/route"
import ToastComponent from "./ToastComponent"

export default function Contact() {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [city, setCity] = useState("")
    const [userMessage, setUserMessage] = useState("")

    const [toastMessage, setToastMessage] = useState("")
    const [status, setStatus] = useState(true)
    const [loading, setLoading] = useState(false)
    const [showResponse, setShowResponse] = useState(false)

    const [cities, setCities] = useState<CitiesArray>([])

    const [phoneCorrect, setPhoneCorrect] = useState(true)
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

    const checkEmail = async (email: string) => {
        if (!email.match(/\./)) {
            setEmailCorrect(false)
            return false
        } else {
            setEmailCorrect(true)
            return true
        }
    }

    const checkPhone = async (phone: string) => {
        if (phone.length < 19) {
            setPhoneCorrect(false)
            return false
        } else {
            setPhoneCorrect(true)
            return true
        }
    }

    const resetFields = () => {
        setName("")
        setPhone("")
        setEmail("")
        setCity("")
        setUserMessage("")
    }

    const handleSubmit = async (ev: FormEvent) => {
        ev.preventDefault()
        setLoading(true)
        setShowResponse(true)

        const correctEmail = await checkEmail(email)
        const correctPhone = await checkPhone(phone)

        if (correctEmail === false) {
            setToastMessage(`O e-mail deve possuir um ponto (".").`)
            setStatus(false)
            setLoading(false)
            return
        }

        if (correctPhone === false) {
            setToastMessage("O número de telefone deve seguir a estrutura +55 (XX) XXXXX-XXXX.")
            setStatus(false)
            setLoading(false)
            return
        }

        const response = await fetch(`/api/sendEmail`, { //mudar
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, phone, email, city, userMessage })
        })

        const data = await response.json()
        setToastMessage(data.message)
        if(data.status === true){
            setStatus(true)
        }else{
            setStatus(false)
        }

        resetFields()
        setLoading(false)
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
                    <legend className={styles.formTitle}>
                        Orçamentos:
                    </legend>
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
                            style={
                                phoneCorrect ? { borderColor: '#545454' }
                                    : { borderColor: 'red' }
                            }
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
                        <Input
                            type="textarea"
                            maxLength={600}
                            className={styles.textarea}
                            placeholder="Olá! Gostaria de saber mais sobre..."
                            value={userMessage}
                            onChange={(ev) => setUserMessage(ev.target.value)}
                        />
                    </div>
                    <Button className={styles.formBtn} type="submit">
                        Enviar
                    </Button>
                </Form>
                {
                    showResponse ?
                        loading
                            ? <Spinner className={styles.spinner} />
                            : <ToastComponent message={toastMessage} status={status}/>
                        : null
                }
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
"use client"

import { useState } from "react"
import styles from "./Login.module.scss"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        })

        if (res.ok) {
            window.location.href = "/api/admin/dashboard"
        } else {
            alert("Login falhou!")
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Login de Administrador</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                    <label htmlFor="email" className={styles.label}>
                        E-mail:
                    </label>
                    <input
                        type="email"
                        placeholder="Digite seu email..."
                        name="email"
                        id="email"
                        className={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password" className={styles.label}>
                        Senha:
                    </label>
                    <input
                        type="password"
                        placeholder="Digite sua senha..."
                        name="password"
                        id="password"
                        className={styles.input}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className={styles.button}>
                    Entrar
                </button>
            </form>
        </div>
    )
}

import styles from "./Login.module.scss"

export default function Login() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Login de Administrador
            </h1>
            <form action="/api/admin" className={styles.form}>
                <div>
                    <label
                        htmlFor="email"
                        className={styles.label}
                    >
                        E-mail:
                    </label>
                    <input
                        type="email"
                        placeholder="Digite seu email..."
                        name="email"
                        id="email"
                        className={styles.input} 
                    />
                </div>
                <div>
                    <label
                        htmlFor="password"
                        className={styles.label}
                    >
                        Senha:
                    </label>
                    <input
                        type="password"
                        placeholder="Digite sua senha.."
                        name="password"
                        id="password"
                        className={styles.input}
                    />
                </div>
                <button type="submit" className={styles.button}>
                    Entrar
                </button>
            </form>
        </div>
    )
}
export default function Login() {
    return (
        <>
            <form action="/api/admin">
                <input type="text" placeholder="email" name="email" />
                <input type="text" placeholder="senha" name="password" />
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}
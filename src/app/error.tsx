"use client"

import { Button } from "reactstrap"
import "@/styles/error.scss"

interface ErrorProps {
    error: Error,
    reset: () => void
}

export default function Error({error, reset}: ErrorProps){
    return(
        <div className="errorDiv">
            <h1>Ocorreu um erro...</h1>
            <p>{error.message}</p>

            <Button
                type="button"
                onClick={() => reset()}
                className="button"
            >
                Recarregar página
            </Button>
        </div>
    )
}
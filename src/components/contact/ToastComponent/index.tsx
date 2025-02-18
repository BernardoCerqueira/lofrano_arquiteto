import { useEffect, useState } from "react"
import { Button, Toast, ToastBody, ToastHeader } from "reactstrap"
import styles from "./ToastComponent.module.scss"
import { IoMdClose } from "react-icons/io"

type props = {
    message: string
    status: boolean
}

export default function ToastComponent({ message, status }: props) {
    const [isOpen, setIsOpen] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsOpen(false)
        }, 7000);
    }, [isOpen])

    return (
        <div className={styles.container}>
            <Toast
                isOpen={isOpen}
                className=
                {`
                    ${styles.toast}
                    ${status ? "bg-success" : "bg-warning"}     
                `}
            >
                <ToastHeader className={styles.toastHeader}>
                    <Button onClick={() => setIsOpen(false)} className={styles.btn}>
                        <IoMdClose className={styles.icon}/>
                    </Button>
                </ToastHeader>
                <ToastBody className={styles.toastBody}>
                    {message}
                </ToastBody>
            </Toast>
        </div>
    )
}
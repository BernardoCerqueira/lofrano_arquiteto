import Image from "next/image"
import styles from "./Footer.module.scss"
import Link from "next/link"

export default function Footer() {
    return (
        <div className={styles.container}>
            <Link href={"/#hero"}>
                <Image
                    src={"/whiteLogo.png"}
                    alt="Lofrano Arquitetura"
                    width={80}
                    height={80}
                    className={styles.logo}
                />
            </Link>
        </div>
    )
}
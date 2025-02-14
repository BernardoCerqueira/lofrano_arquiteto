"use client"
import Image from "next/image"
import styles from "./Consulting.module.scss"
import Accordion1 from "./accordion1"
import Accordion2 from "./accordion2"

export default function Consulting() {
    return (
        <div className={styles.container}>
            <h2 className={styles.h2}>Consultoria Online</h2>
            <div className={styles.contentDiv}>
                <div className={styles.howItWorks}>
                    <h3 className={styles.h3}>Como funciona?</h3>
                    <div className={styles.firstAccordion}>
                        <Accordion1/>
                    </div>
                </div>
                <Image
                    className={styles.houseImage}
                    src={"/houseInternet.png"}
                    alt="Internet Globe House"
                    height={270}
                    width={270}
                />
                <div className={styles.youReceive}>
                    <h3 className={styles.h3}>Você receberá:</h3>
                    <div className={styles.secondAccordion}>
                        <Accordion2/>
                    </div>
                </div>
            </div>
        </div>
    )
}
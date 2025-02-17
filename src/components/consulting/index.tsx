import Image from "next/image"
import styles from "./Consulting.module.scss"
import Accordion1 from "./accordion1"
import Accordion2 from "./accordion2"

export default function Consulting() {
    return (
        <div className={styles.container} >
            <h2 className={styles.h2} data-aos="fade-down">Consultoria Online</h2>
            <div className={styles.contentDiv}>
                <div className={styles.howItWorks}>
                    <h3 className={styles.h3} data-aos="fade-down">Como funciona?</h3>
                    <div className={styles.firstAccordion} data-aos="fade-right">
                        <Accordion1 />
                    </div>
                </div>
                <Image
                    className={styles.houseImage}
                    src={"/houseInternet.png"}
                    alt="Internet Globe House"
                    height={310}
                    width={310}
                    data-aos="flip-left"
                />
                <div className={styles.youReceive}>
                    <h3 className={`${styles.h3} ${styles.h3YR}`} data-aos="fade-down">Você receberá:</h3>
                    <div className={styles.secondAccordion} data-aos="fade-up">
                        <Accordion2 />
                    </div>
                </div>
            </div>
        </div>
    )
}
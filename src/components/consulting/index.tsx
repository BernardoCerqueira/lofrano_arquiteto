import Image from "next/image"
import styles from "./Consulting.module.scss"

export default function Consulting(){
    return(
        <div className={styles.container}>
            <h2>Consultoria Online</h2>
            <div className={styles.contentDiv}>
                <div className={styles.howItWorks}>
                    <h3>Como funciona?</h3>
                    <div></div>
                </div>
                <Image
                    className={styles.houseImage}
                    src={"/houseInternet.png"}
                    alt="Internet Globe House"
                    height={200}
                    width={230}
                />
                <div className={styles.youReceive}>
                    
                </div>
            </div>
        </div>
    )
}
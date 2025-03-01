import useIsSectionOutOfView from "@/hooks/useIsSectionOutOfView"
import styles from "./CommonHeader.module.scss"
import Image from "next/image";
import { FaArrowAltCircleUp } from "react-icons/fa";
import Link from "next/link";

export default function CommonHeader() {
  const isHeroOutOfView = useIsSectionOutOfView("hero")

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        transition: "opacity .5s ease",
        opacity: isHeroOutOfView ? 1 : 0,
        pointerEvents: isHeroOutOfView ? "auto" : "none"
      }}
      className={styles.header}
    >
      <Image
        src={"/whiteLogo.png"}
        alt="Logo"
        width={120}
        height={120}
        className={styles.logo}
      />
      <Link href={"#hero"}>
        <FaArrowAltCircleUp className={styles.arrow} size={60} />
      </Link>
    </header>
  )
}
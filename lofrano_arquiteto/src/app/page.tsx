import Hero from "@/components/header";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero/>
    </div>
  );
}

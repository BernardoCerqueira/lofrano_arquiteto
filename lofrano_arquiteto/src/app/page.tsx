import Hero from "@/components/hero";
import styles from "./page.module.scss";
import CommonHeader from "@/components/common/CommonHeader";

export default function Home() {
  return (
    <div className={styles.page}>
      <CommonHeader/>
      <section id="hero">
        <Hero />
      </section>
      <section id="about" style={{height: "110vh"}}></section>
      <section id="services"></section>
      <section id="consulting"></section>
      <section id="projects"></section>
      <section id="4architects"></section>
      <section id="contact"></section>
    </div>
  );
}

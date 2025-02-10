import Hero from "@/components/hero";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <section id="hero">
        <Hero/>
      </section>
      <section id="about"></section>
      <section id="services"></section>
      <section id="consulting"></section>
      <section id="projects"></section>
      <section id="4architects"></section>
      <section id="contact"></section>
    </div>
  );
}

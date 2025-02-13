import Hero from "@/components/hero";
import styles from "./page.module.scss";
import CommonHeader from "@/components/common/CommonHeader";
import About from "@/components/about";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className={styles.page}>
      <CommonHeader/>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="services">
        <Services/>
      </section>
      <section id="consulting"></section>
      <section id="projects"></section>
      <section id="4architects"></section>
      <section id="contact"></section>
    </div>
  );
}

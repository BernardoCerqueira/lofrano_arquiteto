import Hero from "@/components/hero";
import styles from "./page.module.scss";
import CommonHeader from "@/components/common/CommonHeader";
import About from "@/components/about";
import Services from "@/components/services";
import Consulting from "@/components/consulting";
import Projects from "@/components/projects";

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
      <section id="consulting">
        <Consulting/>
      </section>
      <section id="projects">
        <Projects/>
      </section>
      <section id="4architects"></section>
      <section id="contact"></section>
    </div>
  );
}

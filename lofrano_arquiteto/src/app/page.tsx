"use client"

import Hero from "@/components/hero";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";

export default function Home() {

  


  return (
    <div className={styles.page}>
      <section id="hero">
        <Hero />
      </section>
      <section id="about" style={{ height: "100vh" }}>1</section>
      <section id="services" style={{ height: "100vh" }}>2</section>
      <section id="consulting" style={{ height: "100vh" }}>3</section>
      <section id="projects" style={{ height: "100vh" }}>4</section>
      <section id="4architects" style={{ height: "100vh" }}>5</section>
      <section id="contact" style={{ height: "100vh" }}>6</section>
    </div>
  );
}

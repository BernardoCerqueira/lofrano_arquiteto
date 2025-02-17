"use client"

import styles from "./Projects.module.scss"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import Image from "next/image";

export default function Projects() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Projetos</h2>
            <div className={styles.slideDiv}>
                <Splide
                    options={{
                        type: "loop",
                        perPage: 2,
                        gap: "2vw",
                        autoplay: true,
                        interval: 6500,
                        arrows: true,
                        pagination: true,
                        breakpoints: {
                            1100:
                            {
                                perPage: 1
                            }
                        },
                    }}
                    className={styles.splide}
                >
                    <SplideSlide className={styles.slide}>
                        <div>
                            <Image
                                src="/studio-chilli1.png"
                                alt="Projeto 1"
                                height={400}
                                width={700}
                            />
                            <p className={styles.caption}>
                                Estúdio Banda Chilli 1
                            </p>
                        </div>
                    </SplideSlide>
                    <SplideSlide className={styles.slide}>
                        <div>
                            <Image
                                src="/studio-chilli1.png"
                                alt="Projeto 1"
                                height={400}
                                width={700}
                            />
                            <p className={styles.caption}>
                                Estúdio Banda Chilli 2
                            </p>
                        </div>
                    </SplideSlide>
                    <SplideSlide className={styles.slide}>
                        <div>
                            <Image
                                src="/banheiro-reformado.png"
                                alt="Projeto 1"
                                height={400}
                                width={700}
                            />
                            <p className={styles.caption}>
                                Reforma Banheiro
                            </p>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    )
}
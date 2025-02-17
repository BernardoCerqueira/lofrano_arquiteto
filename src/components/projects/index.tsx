import images from "@/database/images";
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
                        perMove: 1,
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
                    {images.map(project => (
                        <SplideSlide className={styles.slide} key={project.id}>
                            <div>
                                <Image
                                    src={project.imgPath}
                                    alt={project.alt}
                                    height={800}
                                    width={1400}
                                />
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    )
}
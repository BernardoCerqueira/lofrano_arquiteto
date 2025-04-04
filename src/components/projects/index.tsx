import { supabase } from "@/lib/supabaseClient";
import styles from "./Projects.module.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import { useEffect, useState } from "react";
import "@splidejs/splide/css";

export default function Projects() {
    const [images, setImages] = useState<string[]>([])
    const [timePassed, setTimePassed] = useState(false)

    useEffect(() => {
        const fetchImages = async () => {
            const { data, error } = await supabase.storage.from("uploads").list("images")

            if (error) {
                console.error("Erro ao buscar imagens:", error)
                return
            }

            const urls = data.map((file) =>
                `https://gqopcittpbraiiqkufww.supabase.co/storage/v1/object/public/uploads/images/${file.name}`
            )

            urls.reverse()

            setImages(urls)
        }

        fetchImages()
    }, [])

    setTimeout(() => {
        setTimePassed(true)
    }, 1000)

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
                        interval: 6000,
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
                        <SplideSlide className={styles.slide} key={project} styles={timePassed ? {"height": "fit-content"} : {"height": "100px"}}>
                            <div>
                                <Image
                                    src={project}
                                    alt={"Projeto"}
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
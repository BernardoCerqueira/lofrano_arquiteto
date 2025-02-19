import { useEffect, useState } from "react";
import styles from "./About.module.scss"
import Image from "next/image"
import { supabase } from "@/lib/supabaseClient";

export default function About() {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            const { data, error } = await supabase.storage.from("uploads").list("profilePic")

            if (error) {
                console.error("Erro ao buscar imagens:", error)
                return
            }

            const urls = data.map((file) =>
                `https://gqopcittpbraiiqkufww.supabase.co/storage/v1/object/public/uploads/profilePic/${file.name}`
            )

            setImages(urls)
        }

        fetchImages()
    }, [])

    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.title}>Sobre</h2>
                <div
                    className={styles.contentDiv}
                >
                    {images.map((imageUrl, index) => (
                        <Image
                            key={index}
                            src={imageUrl}
                            alt="Foto de perfil"
                            width={420}
                            height={550}
                            className={styles.profilePic}
                        />
                    ))}
                    <div className={styles.description}>
                        <p className={styles.descriptionText}>
                            Sou arquiteto e tenho como objetivo transformar a vida das pessoas, tornando sonhos realidade ao trazer para o mundo físico tudo o que foi cuidadosamente planejado e desenhado no papel.
                        </p>
                        <p className={styles.descriptionText}>
                            Atuo com projetos residenciais, comerciais, além de reformas de diferentes portes, desde pequenas intervenções até grandes transformações.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
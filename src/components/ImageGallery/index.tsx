import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";

export default function ImageGallery() {
    const [images, setImages] = useState<
        { url: string; name: string }[]
    >([]); // Array de objetos com URL e nome

    useEffect(() => {
        const fetchImages = async () => {
            const { data, error } = await supabase.storage.from("uploads").list("images");

            if (error) {
                console.error("Erro ao buscar imagens:", error);
                return;
            }

            const imagesWithUrlsAndNames = data.map((file) => ({
                url: `https://gqopcittpbraiiqkufww.supabase.co/storage/v1/object/public/uploads/images/${file.name}`,
                name: file.name, // Inclui o nome do arquivo
            }));

            setImages(imagesWithUrlsAndNames);
        };

        fetchImages();
    }, []);

    const handleDelete = async (fileName: string) => {
        const { error } = await supabase.storage.from("uploads").remove([`images/${fileName}`]);

        if (error) {
            console.error("Erro ao deletar imagem:", error);
            alert("Erro ao deletar imagem!"); // Ou um feedback melhor para o usuário
            return;
        }

        // Atualiza a galeria após deletar
        setImages((prevImages) => prevImages.filter((image) => image.name !== fileName));
        alert("Imagem deletada com sucesso!");
    };

    return (
        <div>
            <h2>Galeria de Imagens</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {images.map((image) => (
                    <div key={image.name}> {/* Use o nome do arquivo como chave */}
                        <Image src={image.url} alt={`Imagem ${image.name}`} width={150} />
                        <button onClick={() => handleDelete(image.name)}>
                            Deletar
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
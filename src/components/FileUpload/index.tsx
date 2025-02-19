import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";

export default function FileUpload() {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [url, setUrl] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string | null>(null); // Guarda o nome do arquivo

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) return alert("Selecione um arquivo!");

        setUploading(true);
        const newFileName = `${Date.now()}-${file.name}`; // Nome do arquivo gerado
        setFileName(newFileName); // Define o nome do arquivo

        const { error } = await supabase.storage
            .from("uploads")
            .upload(`images/${newFileName}`, file);

        setUploading(false);

        if (error) {
            alert("Erro ao enviar arquivo!");
            return;
        }

        const { data: publicUrlData } = supabase.storage
            .from("uploads")
            .getPublicUrl(`images/${newFileName}`);

        const publicUrl = publicUrlData.publicUrl;
        setUrl(publicUrl);
        alert("Upload feito com sucesso!");
    };

    const handleDelete = async () => {
        if (!fileName) return; // Nada para deletar se o nome do arquivo não estiver definido

        const { error } = await supabase.storage
            .from("uploads")
            .remove([`images/${fileName}`]);

        if (error) {
            alert("Erro ao deletar arquivo!");
            return;
        }

        setUrl(null); // Limpa a URL da imagem
        setFileName(null); // Limpa o nome do arquivo
        alert("Arquivo deletado com sucesso!");
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={uploading}>
                {uploading ? "Enviando..." : "Enviar"}
            </button>

            {url && (
                <div>
                    <p>Arquivo enviado:</p>
                    <Image src={url} alt="Imagem enviada" width={200} />
                    <button onClick={handleDelete}>Deletar Arquivo</button> {/* Botão de deletar */}
                </div>
            )}
        </div>
    );
}
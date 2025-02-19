import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import Image from "next/image"

export default function FileUpload() {
    const [file, setFile] = useState<File | null>(null)
    const [uploading, setUploading] = useState(false)
    const [imageUrl, setImageUrl] = useState<string | null>(null)
    const [profilePicUrl, setProfilePicUrl] = useState<string | null>(null)
    const [fileName, setFileName] = useState<string | null>(null)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) setFile(event.target.files[0])
    }

    const handleUpload = async (path: string) => { 
        if (!file) return alert("Selecione um arquivo!")

        setUploading(true)
        const newFileName = `${Date.now()}-${file.name}`
        setFileName(newFileName)

        const { error } = await supabase.storage
            .from("uploads")
            .upload(`${path}/${newFileName}`, file)

        setUploading(false)

        if (error) {
            alert("Erro ao enviar arquivo!")
            console.error(error)
            return
        }

        const { data: publicUrlData } = supabase.storage
            .from("uploads")
            .getPublicUrl(`${path}/${newFileName}`)

        const publicUrl = publicUrlData.publicUrl

        if (path === "images") {
            setImageUrl(publicUrl)
        } else if (path === "profilePic") {
            setProfilePicUrl(publicUrl)
        }

        alert("Upload feito com sucesso!")
    };

    const handleDelete = async (path: string) => {
        if (!fileName) return

        const { error } = await supabase.storage
            .from("uploads")
            .remove([`${path}/${fileName}`])

        if (error) {
            alert("Erro ao deletar arquivo!")
            return
        }

        if (path === "images") {
            setImageUrl(null)
        } else if (path === "profilePic") {
            setProfilePicUrl(null)
        }

        setFileName(null)
        alert("Arquivo deletado com sucesso!")
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={() => handleUpload("images")} disabled={uploading}>
                {uploading ? "Enviando..." : "Enviar para imagens"}
            </button>
            {imageUrl && (
                <div>
                    <p>Imagem enviada:</p>
                    <Image src={imageUrl} alt="Imagem enviada" width={1400} height={800} />
                    <button onClick={() => handleDelete("images")}>Deletar Imagem</button>
                </div>
            )}

            <input type="file" onChange={handleFileChange} />
            <button onClick={() => handleUpload("profilePic")} disabled={uploading}>
                {uploading ? "Enviando..." : "Enviar para foto de perfil"}
            </button>
            {profilePicUrl && (
                <div>
                    <p>Foto de perfil enviada:</p>
                    <Image src={profilePicUrl} alt="Foto de perfil enviada" width={200} height={200} />
                    <button onClick={() => handleDelete("profilePic")}>Deletar Foto de Perfil</button>
                </div>
            )}
        </div>
    );
}
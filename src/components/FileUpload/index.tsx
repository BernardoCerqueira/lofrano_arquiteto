import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import Image from "next/image"
import styles from "./FileUpload.module.scss"
import { Input } from "reactstrap"

export default function FileUpload() {
    const [file, setFile] = useState<File | null>(null)
    const [filePP, setFilePP] = useState<File | null>(null)
    const [uploading, setUploading] = useState(false)
    const [uploadingPP, setUploadingPP] = useState(false)
    const [imageUrl, setImageUrl] = useState<string | null>(null)
    const [profilePicUrl, setProfilePicUrl] = useState<string | null>(null)
    const [fileName, setFileName] = useState<string | null>(null)
    const [fileNamePP, setFileNamePP] = useState<string | null>(null)


    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) setFile(event.target.files[0])
    }

    const handleFileChangePP = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) setFilePP(event.target.files[0])
    }

    const handleUploadProject = async (path: string) => {
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

        setImageUrl(publicUrl)

        alert("Upload feito com sucesso!")
    }

    const handleUploadProfilePic = async (path: string) => {
        if (!filePP) return alert("Selecione um arquivo!")

        setUploadingPP(true)
        const newFileName = `${Date.now()}-${filePP.name}`
        setFileNamePP(newFileName)

        const { error } = await supabase.storage
            .from("uploads")
            .upload(`${path}/${newFileName}`, filePP)

        setUploadingPP(false)

        if (error) {
            alert("Erro ao enviar arquivo!")
            console.error(error)
            return
        }

        const { data: publicUrlData } = supabase.storage
            .from("uploads")
            .getPublicUrl(`${path}/${newFileName}`)

        const publicUrl = publicUrlData.publicUrl

        setProfilePicUrl(publicUrl)

        alert("Upload feito com sucesso!")
    }

    const handleDelete = async (path: string) => {
        if (!fileName) return

        const { error } = await supabase.storage
            .from("uploads")
            .remove([`${path}/${fileName}`])

        if (error) {
            alert("Erro ao deletar arquivo!")
            return
        }

        setImageUrl(null)

        setFileName(null)
        alert("Arquivo deletado com sucesso!")
    }

    const handleDeletePP = async (path: string) => {
        if (!fileNamePP) return

        const { error } = await supabase.storage
            .from("uploads")
            .remove([`${path}/${fileNamePP}`])

        if (error) {
            alert("Erro ao deletar arquivo!")
            return
        }

        setProfilePicUrl(null)

        setFileNamePP(null)
        alert("Arquivo deletado com sucesso!")
    }

    return (
        <div className={styles.container}>
            <div className={styles.projectsSection}>
                <h2 className={styles.sectionTitle}>Projetos</h2>
                <Input
                    type="file"
                    onChange={handleFileChange}
                    className={styles.input}
                />
                <button
                    onClick={() => handleUploadProject("images")} disabled={uploading}
                    className={styles.btn}
                >
                    {uploading ? "Enviando..." : "Enviar projeto"}
                </button>

                {imageUrl && (
                    <div className={styles.imageSentDiv}>
                        <p className={styles.imageSentText}>Projeto enviado:</p>
                        <Image
                            src={imageUrl}
                            alt="Imagem enviada"
                            width={250}
                            height={150}
                            className={styles.imageSent}
                        />
                        <button
                            onClick={() => handleDelete("images")}
                            className={styles.deleteBtn}
                        >
                            Deletar Projeto
                        </button>
                    </div>
                )}
            </div>

            <div className={styles.profilePicSection}>
                <h2 className={styles.sectionTitle}>Foto de Perfil</h2>
                <Input
                    type="file"
                    onChange={handleFileChangePP}
                    className={styles.input}
                />
                <button
                    onClick={() => handleUploadProfilePic("profilePic")}
                    disabled={uploadingPP}
                    className={styles.btn}
                >
                    {uploadingPP ? "Enviando..." : "Enviar foto de perfil"}
                </button>

                {profilePicUrl && (
                    <div className={styles.imageSentDiv}>
                        <p className={styles.imageSentDiv}>
                            Foto de perfil enviada:
                        </p>
                        <Image
                            src={profilePicUrl}
                            alt="Foto de perfil enviada"
                            width={250}
                            height={300}
                            className={styles.imageSent}
                        />
                        <button
                            onClick={() => handleDeletePP("profilePic")}
                            className={styles.deleteBtn}
                        >
                            Deletar Foto de Perfil
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
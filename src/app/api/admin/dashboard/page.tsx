"use client"

import styles from "./Dashboard.module.scss"
import FileUpload from "@/components/FileUpload";
import ImageGallery from "@/components/ImageGallery";
import ProfilePicGallery from "@/components/ProfilePicGallery";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Upload de Arquivos</h1>
      <div>
        <FileUpload />
      </div>
      <div>
        <ImageGallery />
      </div>
      <div>
        <ProfilePicGallery />
      </div>
      <div className={styles.result}>
        <Link href={"/"} className={styles.link}>
          <button className={styles.btn}>Ir à página principal</button>
        </Link>
      </div>
    </div>
  );
}
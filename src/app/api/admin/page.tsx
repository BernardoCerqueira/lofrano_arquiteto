"use client"

import FileUpload from "@/components/FileUpload";
import ImageGallery from "@/components/ImageGallery";
import ProfilePicGallery from "@/components/ProfilePicGallery";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Upload dos Projetos</h1>
      <FileUpload />
      <ImageGallery />
      <ProfilePicGallery/>
      <Link href={"/"}>
        <p>Conferir resultados</p>
      </Link>
    </div>
  );
}
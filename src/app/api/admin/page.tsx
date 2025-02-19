"use client"

import FileUpload from "@/components/FileUpload";
import ImageGallery from "@/components/ImageGallery";

export default function Home() {
  return (
    <div>
      <h1>Upload dos Projetos</h1>
      <FileUpload />
      <ImageGallery />
    </div>
  );
}
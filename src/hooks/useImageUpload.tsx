import { useState, type ChangeEvent } from "react";

const useImageUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile?.type.startsWith("image/")) {
      setFile(selectedFile);
      setError("");
    } else {
      setError("Можно загружать только изображения!");
    }
  };

  const clearFile = () => {
    setFile(null);
    setError("");
  };

  return { file, handleChangeFile, clearFile, error };
};

export default useImageUpload;

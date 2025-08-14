import { useEffect, useState, type ChangeEvent } from "react";

const useImageUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>("");
  const [error, setError] = useState("");

  useEffect(() => {
    return () => {
      if (file) {
        const url = URL.createObjectURL(file);
        URL.revokeObjectURL(url);
      }
    };
  }, [file]);

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile?.type.startsWith("image/")) {
      setFile(selectedFile);
      setFileUrl(null);
      setError("");
    } else {
      setError("Можно загружать только изображения!");
      setFile(null);
    }
  };

  const getPreviewUrl = () => {
    if (file) return URL.createObjectURL(file);
    if (fileUrl) return fileUrl;
    console.log(fileUrl);
    return null;
  };

  const handleUrlChange = (url: string) => {
    setFileUrl(url);
    setFile(null);
    setError("");    
    console.log(fileUrl);
  };

  const clearImageState = () => {
    setFile(null);
    setFileUrl(null);
    setError("");
  };

  return {
    file,
    fileUrl,
    handleChangeFile,
    clearImageState,
    getPreviewUrl,
    handleUrlChange,
    error,
  };
};

export default useImageUpload;

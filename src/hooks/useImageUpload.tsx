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

  const handleUrlChange = (url: string) => {
    try {
      const parsedUrl = new URL(url);

      const imageExtensions = [
        ".jpg",
        ".jpeg",
        ".png",
        ".gif",
        ".webp",
        ".svg",
      ];
      const extension = parsedUrl.pathname.toLowerCase();
      const isImage = imageExtensions.some((ext) => extension.endsWith(ext));

      if (isImage) {
        setFileUrl(url);
        setFile(null);
        setError("");
      } else {
        setError("Ссылка должна вести на изображение (jpg/png/gif/webp/svg)");
        setFileUrl(null);
      }
    } catch (e) {
      setError("Некорректный URL");
      setFileUrl(null);
    }
  };

  const getPreviewUrl = () => {
    if (file) return URL.createObjectURL(file);
    if (fileUrl) return fileUrl;
    return null;
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

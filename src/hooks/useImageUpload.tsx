import { useEffect, useState, type ChangeEvent } from "react";

const useImageUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>("");
  

  useEffect(() => {
    return () => {
      if (file) {
        const url = URL.createObjectURL(file);
        URL.revokeObjectURL(url);
      }
    };
  }, [file]);

  

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
    error,
  };
};

export default useImageUpload;

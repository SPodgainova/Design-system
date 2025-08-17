import { useEffect, useState } from "react";

const useImageUpload = (onFileUpload: () => void) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [isDragActive, setIsDragActive] = useState(false);

  const MAX_FILE_SIZE_MB = 5;

  useEffect(() => {
    return () => {
      if (file) {
        const url = URL.createObjectURL(file);
        URL.revokeObjectURL(url);
      }
    };
  }, [file]);

  const handleFileValidation = (file: File | null) => {
    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      setError("Можно загружать только изображения");
      return;
    }

    const maxSize = MAX_FILE_SIZE_MB * 1024 * 1024; // Конвертируем MB в байты
    if (file.size > maxSize) {
      setError(`Максимальный размер файла — ${MAX_FILE_SIZE_MB} MB`);

      return;
    }
    return true;
  };

  const handleFile = (file: File | null) => {
    if (!handleFileValidation(file)) {
      setFile(null);
      return;
    }

    setFile(file);
    onFileUpload();
    setError("");
  };

  const handleClearFile = () => {
    setFile(null);
  };

  return {
    file,
    error,
    handleFile,
    isDragActive,
    setIsDragActive,
    handleClearFile,
  };
};

export default useImageUpload;

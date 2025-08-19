import type { RegisterOptions } from "react-hook-form";
import type { IItemsForm } from "./type";

const nameRules: RegisterOptions<IItemsForm, "name"> = {
  required: {
    value: true,
    message: "Введите минимум один символ",
  },
  minLength: {
    value: 1,
    message: "Введите минимум один символ",
  },
};

const linkRules: RegisterOptions<IItemsForm, "link">["validate"] = (
  value: string
) => {
  if (!value) return true;
  try {
    new URL(value);
    return true;
  } catch {
    return "Введите корректный URL";
  }
};

const imageRules: RegisterOptions<IItemsForm, "image">["validate"] = (
  value: string
) => {
  try {
    const parsedUrl = new URL(value);
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
    const extension = parsedUrl.pathname.toLowerCase();
    return imageExtensions.some((ext) => extension.endsWith(ext))
      ? true
      : "Ссылка должна вести на изображение";
  } catch {
    return "Введите корректный URL";
  }
};

const descriptionRules: RegisterOptions<IItemsForm, "description"> = {
  maxLength: {
    value: 200,
    message: "Не более 200 символов",
  },
};

const notesRules: RegisterOptions<IItemsForm, "notes"> = {
  maxLength: {
    value: 400,
    message: "Не более 500 символов",
  },
};

const validateFile = (file: File) => {
  console.log("Валидируем файл:", file);
  if (!file.type.startsWith("image/")) {
    console.log("Валидируем файл:", file);
    return "Можно загружать только изображения";
  }

  if (file.size > 5 * 1024 * 1024) return "Максимальный размер 5MB";
  console.log("Файл валиден");
  return true;
};

export {
  nameRules,
  imageRules,
  linkRules,
  descriptionRules,
  notesRules,
  validateFile,
};

import type { RegisterOptions } from "react-hook-form";
import type { IItemsForm } from "./components/Form/type";

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
  if (!value) return true;
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

export { nameRules, imageRules, linkRules };

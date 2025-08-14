import type { ChangeEvent } from "react";

export interface IImageUploaderProps {
  previewUrl: string | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

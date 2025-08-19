export interface IImageUploaderProps {
  previewUrl: string | null;
  onFileSelect: (file: File) => void;
  onClear: () => void;
}

export interface IImageUploaderProps {
  previewUrl: string | null;  
  onFileUpload: () => void;
  onClear: () => void;
}

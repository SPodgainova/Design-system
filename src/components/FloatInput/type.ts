export interface IFloatInputProps {
  name: string;
  type: "text" | "number" | "url";
  label: string;
  value?: string;
  onClear?: () => void;
  error?: string;
}

export interface IFloatInputProps {
  variant: "input" | "textarea";
  name: string;
  label: string;
  value?: string;
  onClear?: () => void;
  error?: string;
}

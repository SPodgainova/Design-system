export interface IFloatInputProps {
  name: string;  
  label: string;
  value?: string;
  onClear?: () => void;
  error?: string;
}

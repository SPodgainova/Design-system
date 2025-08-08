export interface IFloatInputProps<T extends object> {
  value: string;
  name: keyof T;
  type: "text" | "number" | "url";
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

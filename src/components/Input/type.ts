export interface IInputProps<T extends object> {
  value: string;
  name: keyof T;
  type: "text" | "number" | "url";
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

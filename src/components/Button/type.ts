import type { ReactNode } from "react";

export interface IButtonProps {
  variant: "submit" | "clear" | "copy";
  onClick?: () => void;
  children?: ReactNode;
  className?: string;
  type?: "submit" | "button"
}

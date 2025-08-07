import type { ReactNode } from "react";

export interface IButtonProps {
  onClick?: () => void;
  children: ReactNode;
}

import ItemCard from "../ItemCard/ItemCard";
import { v4 as uuidv4 } from "uuid";
import type { IItemsListProps } from "./type";

import styles from './styles.module.scss'

export const ItemsList = ({ items }: IItemsListProps) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <ItemCard key={uuidv4()} {...item} />
      ))}
    </ul>
  );
};

import { v4 as uuidv4 } from "uuid";

import ItemCard from "../ItemCard/ItemCard";

import styles from './styles.module.scss'

import type { IItemsListProps } from "./type";

export const ItemsList = ({ items }: IItemsListProps) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <ItemCard key={uuidv4()} {...item} />
      ))}
    </ul>
  );
};

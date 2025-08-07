import type { TData } from "../Form/type";

import styles from './style.module.scss'

const ItemCard = (item: TData) => {
  return (
    <li>
      <img className={styles.image}
        src={item.image}
        alt={item.name || "Изображение товара"}
        loading="lazy"
      />
      <div>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          {" "}
          Перейти на сайт магазина
        </a>
      </div>
      {item.notes && <p>{item.notes}</p>}
    </li>
  );
};

export default ItemCard;

import styles from "./ItemList.module.css";
import { ItemCard } from '../ItemCard/ItemCard';

export const ItemsList = ({ itemsList }) => {
  return (
    <ul className={styles.itemsList}>
      {itemsList.map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
    </ul>
  );
};

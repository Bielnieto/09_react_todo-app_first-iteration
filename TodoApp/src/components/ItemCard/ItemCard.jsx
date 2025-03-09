import styles from "./ItemCard.module.css";

export function ItemCard({ item }) {
  return (
    <li className={styles.card}>
      <h4 className={`${styles.title} ${item.status === 'done' ? styles.titleDone : item.status === 'in progress' ? styles.titleInProgress : ''}`}>
        {item.title}
      </h4>
      <p className={styles.description}>{item.description}</p>
      <span className={`${styles.status} ${styles[`status${item.status.replace(/\s+/g, '')}`]}`}>
        {item.status}
      </span>
    </li>
  );
};

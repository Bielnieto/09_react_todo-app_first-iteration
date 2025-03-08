import styles from "./Header.module.css";

export function Header({ title }) {
  return <h1 className= {styles["container"]}>{title}</h1>;
};
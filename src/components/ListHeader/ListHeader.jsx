import styles from "./ListHeader.module.css";

export function ListHeader({ content }) {
    const listHeaderClass = styles["container"];
        
    return <h3 className={listHeaderClass}>{content}</h3>
    
};

import styles from "./Subheader.module.css";

export function Subheader({ subtitle}) {
    const subheaderClass = styles["container"];
        
    return <h2 className={subheaderClass}>{subtitle}</h2>
    
};
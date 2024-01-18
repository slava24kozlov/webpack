import React, {ButtonHTMLAttributes, FC} from "react";
import styles from "./ButtonAutoplay.module.css";

interface IButtonAutoplayProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

export const ButtonAutoplay: FC<IButtonAutoplayProps> = ({text, ...props}) => {
    return (
        <button className={styles.container} {...props}>
            <span className={styles.text}>{text}</span>
            <span className={styles.icon}>&#x1F4E6;</span>
        </button>
    )
}
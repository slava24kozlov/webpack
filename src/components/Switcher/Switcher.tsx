import React, {ButtonHTMLAttributes, createRef, FC, useRef} from "react";
import {useState} from "react";
import styles from "./Switcher.module.css";

interface ISwitcherProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    onCheckedChange?(checked: boolean): void;
}

export const Switcher: FC<ISwitcherProps> = (props) => {
    const {disabled, defaultChecked, onCheckedChange, ...rest} = props;
    const ref = useRef();
    const [checked, setChecked] = useState(defaultChecked);

    const handleClick = (e: any) => {
        console.log(e.currentTarget.checked);
        setChecked(true);
    }

    return (
        <label className={styles.switch}>
            <input type="checkbox" ref={ref} onChange={handleClick}/>
            <span className={styles.thumb}></span>
        </label>
    )
}
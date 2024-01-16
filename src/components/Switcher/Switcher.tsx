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

    const handleClick = () => {
        console.log(ref.current)
        setChecked(true);
        onCheckedChange(ref.current);
    }

    return (
        <button type="button"
                role="switch"
                aria-checked={checked}
                data-state={checked}
                data-disabled={disabled ? '' : undefined}
                disabled={disabled}
                className={styles.root}
                {...rest}
                ref={ref}
                onClick={handleClick}
        >
            <span className={styles.thumb} data-state={checked}
                  data-disabled={disabled ? '' : undefined}
                  ></span>
        </button>
    )
}
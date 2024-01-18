import React, {useState} from "react";
import {Switcher} from "./Switcher/Switcher";
import {ButtonAutoplay} from "./ButtonAutoplay/ButtonAutoplay";
import styles from './App.module.css';

const App = () => {
    const [checked, setChecked] = useState(false);
    return (
        <div>
            <h1>The React App is created</h1>
            <Switcher defaultChecked={checked}/>
            <div className={styles.autoplay}>
                <ButtonAutoplay text="PLAY"/>
            </div>
        </div>
    )
}

export default App;
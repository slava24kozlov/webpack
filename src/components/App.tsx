import React, {useState} from "react";
import {Switcher} from "./Switcher/Switcher";

const App = () => {
    const [checked, setChecked] = useState(false);
    return (
        <div>
            <h1>The React App is created</h1>
            <Switcher defaultChecked={checked}></Switcher>
        </div>
    )
}

export default App;
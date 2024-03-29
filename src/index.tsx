import React from "react";
import {createRoot} from "react-dom/client";
import './index.css';
import App from "./components/App";

const domContainer = document.getElementById('root');
const root = createRoot(domContainer);
root.render(<App/>);

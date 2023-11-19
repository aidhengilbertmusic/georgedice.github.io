import styles from './App.module.scss';
import Header from "./components/Header";
import clsx from "clsx";
import Settings from "./components/Settings";
import Results from "./components/Results";
import React, {useState} from "react";

function App() {

    const [isRolled, setIsRolled] = useState(false)

    const [result, setResult] = useState({
        settings: "",
        numbers: [],
        sum: 0
    })

    const handleRoll = (settings) => {

        setIsRolled(true);

        let arr = []
        for (let i = 0; i < settings.input; i++) {
            const num = Math.ceil(Math.random()*settings.select)
            arr.push(num)
        }

        setResult((prev)=>({
            ...prev,
            settings: `${settings.input} D${settings.select}`,
            numbers: [...arr],
            sum: arr.length ? arr.reduce((total, num)=>total+num) : 0
        }));
    }

    return (
    <div className={clsx("d-flex", styles.app)}>
        <div className={clsx(styles.upper)}>
            <Header/>
            <Settings handleRoll={handleRoll}/>
        </div>
        <div className={clsx("d-flex jc-center ai-center", styles.lower)}>
            <Results result={result} isRolled={isRolled}/>
        </div>
    </div>
    );
}

export default App;

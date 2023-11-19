import styles from "./Results.module.scss";
import clsx from "clsx";
import {useEffect} from "react";

function Results({result, isRolled}) {


    useEffect(() => {
        console.log(result, isRolled, "use")
    });


    return (
        <>
            {isRolled && <div className={clsx("d-flex ai-center", styles.results)}>
                <h3>{result.settings}</h3>
                <p className={clsx(styles.numbers)}>
                    {result.numbers.join(" ")}
                </p>
                <h1 className={clsx(styles.total)}>{result.sum}</h1>
            </div>}
        </>
    );
}

export default Results;
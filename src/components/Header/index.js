import dices from "../../assets/Group 156-2.svg";
import styles from "./Header.module.scss";
import clsx from "clsx";

function Header() {
    return (
        <header className={clsx("d-flex jc-center", styles.header)}>
            <img src={dices} alt="dices" className={clsx(styles.img)}/>
        </header>
    );
}

export default Header;
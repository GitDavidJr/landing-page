import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/logo.svg";
import Styles from "./header.module.scss";

export const Header = () => {
    return (
        <div className={Styles.container}>
            <div className="logo">
                <Image src={Logo} alt="logo" />
            </div>
            <div className={Styles.menu}>
                <Link href="/">home</Link>
                <Link href="/">O que fazemos</Link>
                <Link href="/">Cases</Link>
            </div>
            <div className="action">
                <button className={Styles.button}>Fale Conosco</button>
            </div>
        </div>
    );
};

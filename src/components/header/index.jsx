import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/logo.svg";
import Styles from "./header.module.scss";
import Button from "../button/index.jsx";

export const Header = () => {
    return (
        <div className={Styles.container}>
            <div >
                <Image src={Logo} alt="logo" className={Styles.logo} />
            </div>
            <div className={Styles.menu}>
                <Link href="/">home</Link>
                <Link href="/">O que fazemos</Link>
                <Link href="/">Cases</Link>
            </div>
            <div className={Styles.action}>
                <Button title="Fale conosco" />
            </div>
        </div>
    );
};

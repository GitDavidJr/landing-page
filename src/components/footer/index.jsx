import Styles from "./footer.module.scss";
import Logo from "../../../public/images/logo.svg";
import Image from "next/image";


const Footer = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
      />
      <div className={Styles.container}>
        <div className={`${Styles.column} ${Styles.columnMain}`}>
          <Image src={Logo} alt="logo" />
          <h1 className={Styles.title}>0800 800 800</h1>
          <p>comercial@agencia.com.br</p>
        </div>
        <div className={Styles.column}>
          <h1>MENU</h1>
          <ul>
            <li>Quem somos</li>
            <li>Cases</li>
          </ul>
        </div>
        <div className={Styles.column}>
          <h1>CONTEÚDO</h1>
          <ul>
            <li>E-books</li>
            <li>Fórmulas prontas</li>
          </ul>
        </div>
        <div className={`${Styles.column} ${Styles.alignRight}`}>
          <h1>SOCIAL</h1>
          <ul className={Styles.social}>
            <li className={Styles.icon}>
              <i className="fa-brands fa-instagram"></i>
            </li>
            <li className={Styles.icon}>
              <i className="fa-brands fa-facebook-f"></i>
            </li>
            <li className={Styles.icon}>
              <i className="fa-brands fa-linkedin"></i>
            </li>
            <li className={Styles.icon}>
              <i className="fa-brands fa-youtube"></i>
            </li>
          </ul>
        </div>
        <div className={Styles.allRightsReserved}>
          ©2022 AGENCIA - Todos os direitos reservados.
        </div>
      </div>
    </div>
  );
};

export default Footer;

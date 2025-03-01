import Styles from "./features.module.scss";
import Image from "next/image";
import Icon from "../../../public/images/icon.svg";

const Features = () => {
  return (
    <div className={Styles.container}>
      <h1>Neste bairro, não há agência melhor. Garantimos.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className={Styles.features}>
        <div className={Styles.feature}>
          <Image src={Icon} alt="Icone" className={Styles.icon}/>
          <h1>Digital Strategy</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <div className={Styles.feature}>
        <Image src={Icon} alt="Icone" className={Styles.icon}/>
          <h1>Digital Strategy</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <div className={Styles.feature}>
        <Image src={Icon} alt="Icone" className={Styles.icon}/>
          <h1>Digital Strategy</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <div className={Styles.feature}>
        <Image src={Icon} alt="Icone" className={Styles.icon}/>
          <h1>Digital Strategy</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;

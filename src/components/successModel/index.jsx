import { FiCheckCircle } from "react-icons/fi";
import Button from "../button";
import Styles from "./successModel.module.scss";

export function SuccessModel({closeModal}){
    return(
        <div className={Styles.overlay}>
            <div className={Styles.modalContainer}>
                <FiCheckCircle />
                <p>Email enviado com sucesso!</p>
                <div>
                    <Button title="Fechar" onClick={closeModal}/>
                </div>
            </div>
        </div>
    )
}
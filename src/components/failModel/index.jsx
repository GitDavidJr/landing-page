import { FiSquare } from "react-icons/fi";
import Button from "../button";
import Styles from "./failModel.module.scss";

export function FailModel({closeModal}){
    return(
        <div calssName={Styles.overlay}>
            <div calssName={Styles.modalContainer}>
                <FiSquare />
                <p>Não foi possível enviar no momento, tente novamente mais tarde.</p>
                <div>
                    <Button title="Fechar" onClick={closeModal} />
                </div>
            </div>
        </div>
    )
}
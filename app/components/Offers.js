import React from 'react'
import { FcCalculator } from "react-icons/fc";
import { FcDocument } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";
import { FcRefresh } from "react-icons/fc";
import styles from './Offers.module.css'

export const Offers = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <FcCalculator className={styles.icon} />
                <label>
                    Hacemos tu contabilidad mensual
                </label>
            </div>

            <div className={styles.card}>
                <FcRefresh className={styles.icon} />
                <label>
                    Calculamos tu impuestos
                </label>
            </div>

            <div className={styles.card}>
                <FcDocument className={styles.icon} />
                <label>
                    Presentamos tu declaraciones al SAT
                </label>
            </div>

            <div className={styles.card}>
                <FcMoneyTransfer className={styles.icon} />
                <label>
                    Calculo, timbrado y envio de nomina
                </label>
            </div>
        </div>
    )
}

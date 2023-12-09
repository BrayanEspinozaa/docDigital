import React from 'react'
import styles from './Steps.module.css'
import { AiOutlineFileSync } from "react-icons/ai";
import { GrDocumentDownload } from "react-icons/gr";
import { LuFileSignature } from "react-icons/lu";

export const Steps = () => {
  return (
    <div className={styles.container}>

        <div className={styles.item}>
        <LuFileSignature className={styles['item-icon']}/>
            <div className={styles['item-title']}>Paso 1</div>
            <div className={styles['item-description']}>Agrega tu FIEL</div>
        </div>

        <div className={styles.item}>
        <AiOutlineFileSync className={styles['item-icon']}/>
            <div className={styles['item-title']}>Paso 2</div>
            <div className={styles['item-description']}>Sincroniza tus cuentas bancarias</div>
        </div>
        
        <div className={styles.item}>
        <GrDocumentDownload className={styles['item-icon']}/>
            <div className={styles['item-title']}>Paso 3</div>
            <div className={styles['item-description']}>Recibe mensualmente tu declaracion de impuestos</div>
        </div>
    </div>
  )
}

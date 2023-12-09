import { Button } from 'antd'
import React from 'react'
import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={styles.container}>
            <p>
                Quieres cambiar a tu conta? Nosotros no encargamos de llevar a cabo la transicion de toda tu contabilidad hasta el dia de hoy.
            </p>

            <div className={styles['buttons-container']}>

                <button className={styles['button-primary']}>Ver Paquetes</button>
                <button className={styles['button-secundary']}>Agenda una cita con un contador experto</button>
            </div>

        </div>
    )
}

import React from 'react'
import styles from './Benefits.module.css'
import { IoIosCheckmarkCircle } from "react-icons/io";

export const Benefits = () => {
    return (
        <div className={styles.container}>

            <div className={styles.videp}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/watch?v=au2n7VVGv_c" frameBorder="0"></iframe>
            </div>

            <div className={styles['benefits-container']}>
                <div className={styles['benefits-title']}>Beneficios</div>
                <ul className={styles['benefits-list']}>
                    <li className={styles['benefits-item']}>
                        <div className={styles['item-title']}>
                            <IoIosCheckmarkCircle className={styles['item-icon']} />
                            Automatico
                        </div>
                        <p className={styles['item-content']}>
                            Ahorra tiempo al eliminar la tarea de enviar facturas a tu contador !El proceso es automatico!
                        </p>
                    </li>
                    <li className={styles['benefits-item']}>
                        <div className={styles['item-title']}>
                            <IoIosCheckmarkCircle className={styles['item-icon']} />

                            Servicio Oportuno
                        </div>
                        <p className={styles['item-content']}>
                            Comunicacion mas facil y efectiva con tu contador
                        </p>
                    </li>
                    <li className={styles['benefits-item']}>
                        <div className={styles['item-title']}>
                            <IoIosCheckmarkCircle className={styles['item-icon']} />

                            Simplicidad
                        </div>
                        <p className={styles['item-content']}>
                            Informacion contable en tiempo real
                        </p>
                    </li>
                    <li className={styles['benefits-item']}>
                        <div className={styles['item-title']}>
                            <IoIosCheckmarkCircle className={styles['item-icon']} />

                            Confiable
                        </div>
                        <p className={styles['item-content']}>
                            Calculos hechos por uno de nuestros contadores expertos asignado especialmente a tu negocio
                        </p>
                    </li>
                </ul>

            </div>
        </div>
    )
}

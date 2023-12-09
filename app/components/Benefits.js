import React from 'react'
import styles from './Benefits.module.css'
import { IoIosCheckmarkCircle } from "react-icons/io";

export const Benefits = () => {
    return (
        <div className={styles.container}>

            <iframe
                width="auto"
                height="auto"
                src="https://www.youtube.com/embed/nA5jl_Lo5kU?si=hQGnF3FB-y9Psv3j"
                title="YouTube video player"
                frameborder="0"
            ></iframe>

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

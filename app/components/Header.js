import React from 'react'
import styles from './Header.module.css'

export const Header = () => {
    return (
        <div>
            <h1 className={styles.title}>
                tu
                <div className={styles['title-span']}>
                    Conta
                    <span>Tu Contador en linea</span>
                </div>
            </h1>
            <p className={styles.subtitle}>
                !Nuevo servicio!
                <br/>
                Encargate de tu negocio, nosotros de tu contabilidad.
            </p>
        </div>
    )
}

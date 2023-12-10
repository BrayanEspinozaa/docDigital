'use client'

import { Button, Modal } from 'antd'
import React, { useState } from 'react'
import styles from './Footer.module.css'
import { Package } from '../PackageModal/Package'

export const Footer = () => {

    const [isActiveModal, setisActiveModal] = useState(false)

    const openModal = () => setisActiveModal(true)

    const closeModal = () => setisActiveModal(false)

    return (
        <div className={styles.container}>
            <p>
                Quieres cambiar a tu conta? Nosotros no encargamos de llevar a cabo la transicion de toda tu contabilidad hasta el dia de hoy.
            </p>

            <div className={styles['buttons-container']}>

                <button onClick={openModal} className={styles['button-primary']}>Ver Paquetes</button>
                <button className={styles['button-secundary']}>Agenda una cita con un contador experto</button>
            </div>

            <Modal
                open={isActiveModal}
                closable
                centered
                footer={false}
                onCancel={closeModal}
                width={'auto'}
            >
                <Package/>

            </Modal>

        </div>
    )
}

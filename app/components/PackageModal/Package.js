import React from 'react'
import styles from './Package.module.css'
import { packages } from '../utils/constants'

export const Package = () => {
    return (
        <div className={styles.container}>

            {
                packages.map(item => (
                    <div key={item.key} className={styles.item}>
                        <div className={styles['item-title']}>{item.title}</div>
                        {
                            item.price
                                ?
                                <div className={styles['item-content-primary']}>
                                    $ <span>{item.price}</span> + IVA/mes
                                </div>
                                :
                                <div className={styles['item-content-primary-bolder']}>
                                    Contactanos para hacer un paquete a tus necesidades
                                </div>
                        }
                        {
                            item.price
                                ? <button>Elegir</button>
                                : <button>Cotizar paquete</button>
                        }

                        <div className={styles['item-content-secundary']}>
                            {item.movements} movimientos bancarios al mes
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

import React from 'react'
import styles from './Package.module.css'

export const Package = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles['item-title']}>Emprendedor</div>
                <div className={styles['item-content-primary']}>
                    $ <span>1,000</span> + IVA/mes
                </div>
                <div className={styles['item-content-secundary']}>
                    1 - 30 movimientos bancarios al mes
                </div>

                <button>Elegir</button>
            </div>
            <div className={styles.item}>
                <div className={styles['item-title']}>Emprendedor Plus</div>
                <div className={styles['item-content-primary']}>
                    $ <span>2,000</span> + IVA/mes
                </div>
                <div className={styles['item-content-secundary']}>
                    31 - 100 movimientos bancarios al mes
                </div>

                <button>Elegir</button>
            </div>
            <div className={styles.item}>
                <div className={styles['item-title']}>Empresarial</div>
                <div className={styles['item-content-primary']}>
                    $ <span>3,000</span> + IVA/mes
                </div>
                <div className={styles['item-content-secundary']}>
                    101 - 300 movimientos bancarios al mes
                </div>

                <button>Elegir</button>
            </div>
            <div className={styles.item}>
                <div className={styles['item-title']}>Select</div>
                <div className={styles['item-content-primary-bolder']}>
                    Contactanos para hacer un paquete a tus necesidades
                </div>
                <div className={styles['item-content-secundary']}>

                    + 300 movimientos bancarios al mes
                </div>

                <button>Cotizar paquete</button>
            </div>


        </div>
    )
}

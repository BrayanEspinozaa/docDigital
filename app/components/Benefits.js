import React from 'react'
import styles from './Benefits.module.css'

export const Benefits = () => {
    return (
        <div className={styles.container}>

            <div className={styles.videp}>
            <iframe width="100%" height="100%" src="https://www.youtube.com/watch?v=au2n7VVGv_c" frameborder="0"></iframe>
            </div>

            <div>
                <div>Beneficios</div>
                <ul>
                    <li>
                        <div>
                            Automatico
                        </div>
                        <p>
                            Ahorra tiempo al eliminar la tarea de enviar facturas a tu contador !El proceso es automatico!
                        </p>
                    </li>
                    <li>
                        <div>
                            Servicio Oportuno
                        </div>
                        <p>
                            Comunicacion mas facil y efectiva con tu contador
                        </p>
                    </li>
                    <li>
                        <div>
                            Simplicidad
                        </div>
                        <p>
                            Informacion contable en tiempo real
                        </p>
                    </li>
                    <li>
                        <div>
                            Confiable
                        </div>
                        <p>
                            Calculos hechos por uno de nuestros contadores expertos asignado especialmente a tu negocio
                        </p>
                    </li>
                </ul>

            </div>
        </div>
    )
}

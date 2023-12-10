import React from 'react'
import styles from './Benefits.module.css'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { benefits } from '../utils/constants';

export const Benefits = () => {
    return (
        <div className={styles.container}>
            <iframe
                width="auto"
                height="auto"
                src="https://www.youtube.com/embed/nA5jl_Lo5kU?si=hQGnF3FB-y9Psv3j"
                title="YouTube video player"
                frameBorder="0"
            ></iframe>

            <div className={styles['benefits-container']}>
                <div className={styles['benefits-title']}>Beneficios</div>
                <ul className={styles['benefits-list']}>
                    {
                        benefits.map(({ id, title, description }) => (
                            <li key={id} className={styles['benefits-item']}>
                                <div className={styles['item-title']}>
                                    <IoIosCheckmarkCircle className={styles['item-icon']} />
                                    {title}
                                </div>
                                <p className={styles['item-content']}>
                                    {description}
                                </p>
                            </li>
                        ))
                    }
                </ul>

            </div>
        </div>
    )
}

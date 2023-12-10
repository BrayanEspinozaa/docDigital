import React from 'react'
import styles from './Steps.module.css'
import { AiOutlineFileSync } from "react-icons/ai";
import { GrDocumentDownload } from "react-icons/gr";
import { LuFileSignature } from "react-icons/lu";
import { steps } from '../utils/constants';

export const Steps = () => {
  return (
    <div className={styles.container}>

      {
        steps.map(({ id, description, Icon }) => (
          <div key={id} className={styles.item}>
            <Icon className={styles['item-icon']} />
            <div className={styles['item-title']}>Paso {id}</div>
            <div className={styles['item-description']}>{description}</div>
          </div>
        ))
      }
    </div>
  )
}

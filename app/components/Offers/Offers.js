import styles from './Offers.module.css'
import { offers } from '../utils/constants';

export const Offers = () => {
    return (
        <div className={styles.container}>
            {
                offers.map(({id, description, Icon}) => (
                    <div key={id} className={styles.card}>
                    <Icon className={styles.icon} />
                    <label>
                        {description}
                    </label>
                </div>
                ))
            }
        </div>
    )
}

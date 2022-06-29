import PropTypes from 'prop-types';
import styles from './TransactionRender.module.css';

const TransactionRender = ({type, amount, currency}) => {
    return (
        <tr className={styles.item}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    )
}

export default TransactionRender;

TransactionRender.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
}
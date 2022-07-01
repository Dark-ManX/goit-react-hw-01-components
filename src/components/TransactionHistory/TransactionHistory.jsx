import PropTypes from 'prop-types';
import TransactionRender from '../TransactionRender/TransactionRender';
import styles from './TransactionHistory.module.css';

const {transactionHistory, tableHead} = styles;

const TransactionHistory = ({operations}) => {
    return (
        <table className={transactionHistory}>
        <thead >
            <tr>
            <th className={tableHead}>Type</th>
            <th className={tableHead}>Amount</th>
            <th className={tableHead}>Currency</th>
            </tr>
        </thead>

        <tbody>
            {operations.map(transaction => {
                return (
                    <TransactionRender key={transaction.id} type={transaction.type} amount={transaction.amount} currency={transaction.currency}/>
                )
            })}
        </tbody>
        </table>
    )
}

export default TransactionHistory;

TransactionHistory.propTypes = {
    operations: PropTypes.array,
        transaction: PropTypes.shape({
        }),
}
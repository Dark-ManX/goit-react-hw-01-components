import PropTypes from 'prop-types';
import styles from './StatsItem.module.css';
import {getRandomColor} from '../../utils/index';


const { item, label, percentage } = styles;

const StatsItem = ({ name, value }) => {
  return (
    <li className={[item]} style={{backgroundColor: `#${getRandomColor()}`}}>
      <span className={[label]}>{[name]}</span>
      <span className={[percentage]}>{[value]}</span>
    </li>
  );
};

export default StatsItem;

StatsItem.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
};

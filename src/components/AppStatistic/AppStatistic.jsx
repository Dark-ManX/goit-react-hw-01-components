import PropTypes from 'prop-types';
import StatsItem from '../StatsItem/StatsItem';
import styles from './AppStatistic.module.css';

const AppStatistic = ({stats, title}) => {

  return (
    <section className="statistic">
      {title ? (<h2 className={[styles.title]}>{title}</h2>) : null}
      
      <ul className={[styles.statList]}>
        {stats.map(({id, label, percentage}) => {
          return <StatsItem 
            key={id} 
            name={label} 
            value={percentage} 
          />;
        })}
      </ul>
    </section>
  );
};

export default AppStatistic;

AppStatistic.propTypes = {
  stats: PropTypes.array,
    item: PropTypes.shape({
      id: PropTypes.number,
    }),
}
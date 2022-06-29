import PropTypes from 'prop-types';
import StatsItem from '../StatsItem/StatsItem';
import styles from './AppStatistic.module.css';

const AppStatistic = ({stats}) => {

  return (
    <section className="statistic">
      <h2 className={[styles.title]}>Upload stats</h2>
      
      <ul className={[styles.statList]}>
        {stats.map(item => {
          return <StatsItem 
            key={item.id} 
            name={item.label} 
            value={item.percentage} 
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
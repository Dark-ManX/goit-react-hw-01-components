import PropTypes from 'prop-types';
import styles from './Profile.module.css';
const { profile, description, stats, avatar, label, quantity } = styles;

const Profile = ({ img, username, tag, location, statsData }) => {
  return (
    <div className={[profile]}>
      <div className={[description]}>
        <img src={img} alt="User avatar" className={[avatar]} />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={[stats]}>
        <li>
          <span className={[label]}>Followers</span>
          <span className={[quantity]}>{statsData.followers}</span>
        </li>
        <li>
          <span className={[label]}>Views</span>
          <span className={[quantity]}>{statsData.views}</span>
        </li>
        <li>
          <span className={[label]}>Likes</span>
          <span className={[quantity]}>{statsData.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  img: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;

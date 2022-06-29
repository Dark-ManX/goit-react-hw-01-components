import PropTypes from 'prop-types';
import RenderFriend from '../RenderFriend/RenderFriend';
import styles from './FriendList.module.css';

const FriendList = ({friends}) => {
  return (<ul className={[styles.friendsList]}>
    {friends.map(friend => {
      return <RenderFriend 
        key={friend.id} 
        avatar={friend.avatar} 
        name={friend.name} 
        status={friend.isOnline}
      />;
    })}
  </ul>
  )
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.array,
    friend: PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    }),
}

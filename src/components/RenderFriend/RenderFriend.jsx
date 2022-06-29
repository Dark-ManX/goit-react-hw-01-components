import PropTypes from 'prop-types';
import styles from './RenderFriend.module.css';

const {online, offline, item} = styles;

const RenderFriend = ({avatar, name, status}) => {
    return (
        <li className={[item]}>
            <span className={status ? [online] : [offline]}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    )
};

export default RenderFriend;

RenderFriend.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.bool,
}
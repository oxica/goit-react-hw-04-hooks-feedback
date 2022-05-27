import s from './Notification.module.css';
import PropTypes from 'prop-types';

function Notification({ message }) {
  return <p className={s.title}>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;

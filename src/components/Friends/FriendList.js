import css from "./FriendList.module.css";
import PropTypes from "prop-types";

import FriendListItem from "./FriendListItem";

export default function friendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map( friend => (
        <li key={friend.id} className={css.item}>
            <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}

friendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};


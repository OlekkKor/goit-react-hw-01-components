import css from "./friendList.module.css";
import PropTypes from "prop-types";

import FriendListItem from "./FriendListItem";

export default function friendList({ friends }) {
  return (
    <ul className={css.friendList}>
      <FriendListItem friends={friends} />
    </ul>
  );
}

friendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

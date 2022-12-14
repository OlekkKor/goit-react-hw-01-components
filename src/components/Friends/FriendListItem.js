import css from "./FriendListItem.module.css";
import PropTypes from "prop-types";

export default function FriendListItem({ friend }) {
  console.log(friend);
  return (
    <>
      {
       <>
          <span className={friend.isOnline ? css.online : css.offline}></span>

          <img 
            src={friend.avatar} 
            alt="User avatar" 
            className={css.avatar} 
            width="48" />

          <p className={css.name}> {friend.name}</p>
          </>
      }
     </>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};





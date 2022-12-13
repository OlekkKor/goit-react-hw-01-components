import css from "./friendListItem.module.css";
import PropTypes from "prop-types";

export default function FriendListItem({ friends }) {
  return (
    <>
      {friends.map((friend, index) => (
        <li key={friend.id} className={css.item}>
          <span className={friend.isOnline ? css.online : css.offline}></span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

//       <ul/>

//       {friends.map((friend, index) => (
//       <li key={friend.id} className="item">
//         <span className="label">{stat.label} = </span>
//         <span className="percentage">{stat.percentage} %</span>
//       </li>
//       ))}

//       </ul>

//   );
// };

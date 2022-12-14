import user from "../data/user.json";
import data from "../data/statistic.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";

import User from "../components/User/User.js";
import Statist from "./Statistic/Statistic";
import FriendList from "./Friends/FriendList";
import TransactionHistory from "./Transaction/Transaction";

export function App() {
  return (
    <>
      <User
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statist title="Uploads stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
}
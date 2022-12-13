import user from "../user.json";
import data from "../statistic.json";
import friends from "../friends.json";
import transactions from "../transactions.json";

import Profile from "../components/user.task1/profile";
import Statist from "../components/statistic.task2/statistic";
import FriendList from "../components/friends.task3/FriendList";
import TransactionHistory from "../components/transaction.task4/transaction";

export default function App() {
  return (
    <>
      <Profile
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

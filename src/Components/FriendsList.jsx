import Button from "./Button";

export const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};
const Friend = ({ friend }) => {
  const formattedBalance = Math.abs(friend.balance);
  return (
    <li>
      <h3>{friend.name}</h3>
      <img src={friend.image} alt={friend.name} />
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {formattedBalance} $
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance} $
        </p>
      )}
      {friend.balance === 0 && (
        <p className="grey">You and {friend.name} are even</p>
      )}
      <Button>Select</Button>
    </li>
  );
};

export default FriendsList;

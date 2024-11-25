import FriendsList from "./Components/FriendsList";
import AddFriend from "./Components/AddFriend";
import Button from "./Components/Button";
import SplitBill from "./Components/SplitBill";
import { useState } from "react";
import { initialFriends } from "./Components/FriendsList";

export default function App() {
  const [addFriendWindow, setAddfriendWindow] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleShowFriend = () => {
    setAddfriendWindow((window) => !window);
  };
  const handlerAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setAddfriendWindow(false);
  };

  const handleSelection = (friend) => {
    setSelectedFriend((selected) =>
      // Handle case when selectedFriend is undefined or null
      selected?.id === friend.id ? null : friend
    );
    setAddfriendWindow(false);
  };
  const handleSplitBill = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />

        {addFriendWindow && <AddFriend onAddFriend={handlerAddFriend} />}
        <Button onClick={handleShowFriend}>
          {addFriendWindow ? "Close" : "Add friend"}
        </Button>
      </div>
      <div className="form-split-bill">
        {selectedFriend && (
          <SplitBill
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
          />
        )}
      </div>
    </div>
  );
}

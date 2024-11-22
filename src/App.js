import FriendsList from "./Components/FriendsList";
import AddFriend from "./Components/AddFriend";
import Button from "./Components/Button";
import SplitBill from "./Components/SplitBill";
import { useState } from "react";
import { initialFriends } from "./Components/FriendsList";

export default function App() {
  const [addFriendWindow, setAddfriendWindow] = useState(false);

  const [friends, setFriends] = useState(initialFriends);

  const handleShowFriend = () => {
    setAddfriendWindow((window) => !window);
  };
  const handlerAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {addFriendWindow && <AddFriend onAddFriend={handlerAddFriend} />}
        <Button onClick={handleShowFriend}>
          {addFriendWindow ? "Close" : "Add friend"}
        </Button>
      </div>
      <div className="form-split-bill">
        <SplitBill />
      </div>
    </div>
  );
}

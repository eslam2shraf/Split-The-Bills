import AddFriend from "./Comp/AddFriendForm";
import Button from "./Comp/Btn-reuse";
import FriendList from "./Comp/FriendList";
import FormSplitBill from "./Comp/FormSplitPill";
import {useState} from 'react';


const initialFriends = [
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

function App() {
  const [isAddOpen, setIsAddOpen]=useState(false);
  const [newFriends,setVewFriends]=useState(initialFriends);
  const [SelectedFriend, setSelectedFriend]=useState();
  const [editBalance,setEditBalance]=useState(0)
  function handelAddOpen(){
     setIsAddOpen((s)=>s=!isAddOpen)
     setSelectedFriend(null)
  }
  function handelBalance (el ,friend){

    setEditBalance((s)=>s===friend? s=el:s=0)
  }
  console.log(editBalance)
  function OnSelectedFriend(friend){
    setSelectedFriend((selected)=>selected===friend ? null:friend)
    setIsAddOpen(false)
 }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList newFriends={newFriends} OnSelectedFriend={OnSelectedFriend} SelectedFriend={SelectedFriend} editBalance={editBalance}/>
        { isAddOpen  &&
          <AddFriend setVewFriends={setVewFriends} newFriends={newFriends}/> }
       
        <Button onClick={handelAddOpen}>{isAddOpen ? "Close":"Add Friend"}</Button>
      </div>
      {SelectedFriend &&

        <FormSplitBill SelectedFriend={SelectedFriend} handelBalance={handelBalance} newFriends={newFriends} setVewFriends={setVewFriends} setSelectedFriend={setSelectedFriend} key={SelectedFriend.name}/>  
      }

    </div>
  );
}

export default App;

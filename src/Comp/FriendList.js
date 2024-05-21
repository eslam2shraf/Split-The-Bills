import Friend from "./Friend";

export default function FriendList({newFriends, OnSelectedFriend ,SelectedFriend ,editBalance}){
    return (
      <ul>
     {newFriends.map((el)=> <Friend name={el.name} balance={el.balance} image={el.image} key={el.id} OnSelectedFriend={OnSelectedFriend} SelectedFriend={SelectedFriend} curFriend={el}/>
    ) }
      </ul>
      );


}
import Button from "./Btn-reuse";

export default function Friend({name,image,balance,key , OnSelectedFriend,SelectedFriend,curFriend}){
    const isSelected=SelectedFriend===curFriend;
    // console.log(isSelected)
    //  console.log(balance)
    return (
        
<li className={isSelected?"selected":""}>
   <img src={image} alt={name}/>
   <h3>{name}</h3>
{ balance<0 &&(
    <p className="red">You Own {name} {-balance}$</p>
)
}
{ balance>0 &&(
    <p className="green">{name} Owns You {balance}$</p>
)
}
{ balance===0 &&(
    <p >you and {name} Are Even</p>
)
}
<Button onClick={()=>OnSelectedFriend(curFriend)}>{isSelected ? "Close":"Select"}</Button>

</li>
 
      );


}
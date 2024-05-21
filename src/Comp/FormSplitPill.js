import Button from "./Btn-reuse";
import { useState } from "react";
export default function FormSplitBill({SelectedFriend , handelBalance ,setVewFriends,newFriends,setSelectedFriend}){

    const [bill,setBill]=useState(0);
    const [myCash,setMyCash]=useState(0);
    const [whoPays,setWhoPays]=useState("user")
    const paidByFriend=bill ? bill-myCash : "";

 function handelBell(e){

setBill(Number(e.target.value))
 }

 function handelMyCash(e){

    setMyCash(
        Number(e.target.value) > bill  ? myCash   : Number(e.target.value)
         )
     }

     function handelSubmitBill(e){

        // e.preventDefault();
        console.log("Form submitted!"); 
    if(!bill|| !myCash)return;
handelSplitBil(whoPays==="user" ? paidByFriend:-myCash)
console.log(whoPays)

     }
     function handelSplitBil(value){
//         setVewFriends( e=>newFriends.map(s=>s.id === SelectedFriend.id ? {...e, balance:e.balance+value}:e) )
// console.log(value)
setVewFriends((friends) =>
friends.map((friend) =>
  friend.id === SelectedFriend.id
    ? { ...friend, balance: friend.balance + value }
    : friend
))

setMyCash(0)
setBill(0)
setSelectedFriend()
     }
     
     
    return (
 <form className="form-split-bill" onSubmit={handelSubmitBill}>
     <h2>Split A bill With {SelectedFriend.name}</h2>
<label>Bill Value</label>
<input type="text" value={bill} onChange={((e)=>handelBell(e))}/>


<label>Your Expense</label>
<input type="text" value={myCash}  onChange={((e)=>handelMyCash(e))}/>

<label> {SelectedFriend.name}'s Expense</label>
<input type="text"  disabled value={paidByFriend}/>

<label> Who is Paying The Bill ?</label>
<select onChange={(e) => setWhoPays(e.target.value)}>
 <option value='user'> You </option>
 <option value='friend'> {SelectedFriend.name} </option>


</select>
<Button  onClick={() => { handelSubmitBill(); handelBalance(myCash);}} >Split Bill</Button>
{/* <Button onClick={() => handelBalance(myCash)}>Split Bill</Button> */}
{/* <Button onClick={handelSubmitBill ; ()=>handelBalance(myCash)} >Split Bill</Button> */}

 </form>
      );


}
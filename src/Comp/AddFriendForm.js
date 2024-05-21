import { useState } from "react";
import Button from "./Btn-reuse";

export default function AddFriend({setVewFriends, newFriends}){
    const [newName,setNewName]=useState("");
    const [newImage,setNewImage]=useState("");

    function handelAddName(e){
        
setNewName(e.target.value)

    }
    function handelAddImage(e){
        
        setNewImage(e.target.value)
        
            }
            function handelAddSubmit(e){
                e.preventDefault();
        const newFriend={
            name: newName,
            image: newImage,
            balance: 0,
            id:Math.random()*100
        }
      
                setVewFriends([...newFriends,newFriend])
                setNewName(""); // Clear the input after submission
                setNewImage("");
                
                    }
console.log(newFriends)
  
    return (
 <form className="form-add-friend" onSubmit={handelAddSubmit}>
<label>🧑🏽‍🤝‍🧑Friend Name</label>
<input type="text" onChange={((e)=>handelAddName(e))}/>


<label>📸 Image URL</label>
<input type="text"   onChange={((e)=>handelAddImage(e))}/>
<Button onClick={handelAddSubmit}>Add</Button>
 </form>
      );


}
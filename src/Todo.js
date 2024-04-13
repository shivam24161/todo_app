import React,{useState} from 'react'
export const Todo = () => {
  const [inputText,SetinputText] = useState([]);
  const [completeText,setcompleteText]=useState([]);
  const [btnText,setBtnText]=useState("Add");

  // Add text button
  const add=()=>{
    let text=document.querySelector("#new-task").value;
    if(text === ""){
      alert("Please provide input!");
    }
    else if(!isNaN(text)){
      alert("Please provide valid input");
    }
    else{
    document.querySelector("#new-task").value="";
    SetinputText([...inputText,text]);
    setBtnText("Add")
    }
  }
  // Editing the incomplete todo
  const editIncomplete=(event)=>{
    let id=event.target.id;
    let text=event.target.previousElementSibling.previousElementSibling.innerHTML;
    inputText.splice(id,1);
    SetinputText([...inputText]);
    setBtnText("Update");
    document.getElementById("new-task").value=text;
  }
  // Editing the complete todo
  const editComplete=(event)=>{
    let id=event.target.id;
    let text=event.target.previousElementSibling.previousElementSibling.innerHTML;
    completeText.splice(id,1);
    setcompleteText([...completeText]);
    setBtnText("Update");
    document.getElementById("new-task").value=text;
    }
  // Deleting the incomplete todo
  const deleteIncomplete=(event)=>{
    let id=event.target.id;
    inputText.splice(id,1)
    SetinputText([...inputText])
  }
  // Deleting the complete
  const deleteComplete=(event)=>{
    let id=event.target.id;
    completeText.splice(id,1)
    setcompleteText([...completeText])
  }

  // Clicking on edit checkbox
  const editCheckbox=(event)=>{
    event.preventDefault();
    let text = event.target.nextElementSibling.innerHTML;
    console.log(text)
    let id=event.target.id;
    inputText.splice(id,1);
    SetinputText([...inputText]);
    setcompleteText([...completeText,text])
  }
  return (
    <>
    <div>
        <title>TODO List</title>
        <link href="style.css" type="text/css" rel="stylesheet" />
        <div className="container">
          <h2>TODO LIST</h2>
          <h3>Add Item</h3>
          <p>
            <input id="new-task" type="text" /><button onClick={add} className="addbtn">{btnText}</button>
          </p>
          <h3>Todo</h3>
          <ul id="incomplete-tasks">
          {
            inputText.map((data,index)=>{
              return(
                <>
                <li><input type="checkbox" onClick={editCheckbox} id={index}/><label>{data}</label><input type="text" /><button className="edit" onClick={editIncomplete} id={index}>Edit</button><button className="delete" onClick={deleteIncomplete} id={index}>Delete</button></li>
                </>
              )
            })
          }
          </ul>
          <h3>Completed</h3>
          <ul id="completed-tasks">
            {
            completeText.map((data,index)=>{
              return(
                <>
                <li><input type="checkbox" defaultChecked /><label>{completeText}</label><input type="text" id="text"/><button className="edit" id={index} onClick={editComplete}>Edit</button><button className="delete" onClick={deleteComplete} id={index}>Delete</button></li>
                </>
              )
            })
          }
          </ul>
        </div>
      </div>
    </>
  )
}
  
import React,{useState} from "react";
import "./header.css"

function Note(props) {
  

  //a note state which is holding input's data in an object
  const [note,setnote]=useState({
    title:"",
    content:"",
  });
  // function calling the input through a parameter(event) and set its value through object destructuring
  const Input=(event)=>{
    const {name,value} = event.target;
    // [ we want to make changes in state's data thats why we're updating setnote's data here] set olddata through spread operator and current data of input by adding a function in 
    // setnote(which is our state's current value). [name]: value, implies that value identify its respective name ,
    // so the value(text to be written) identify that it will render along with its respective name(title/content)
    setnote(
      (olddata)=>{
      return { ...olddata,[name]:value}
      })
    }

    //function which sends data to notex through props(which is defined in app.js)
    //This function also indirectly access the function 'addnote' through a prop attribute(gonote)
    const AddData=()=>{ 
      props.gonote(note); 
      //remove the text from input fields after appearing note
      setnote({
        title:"",
        content:"",
      });}
  

  return (

    <form className="text-center border border-light p-5 subdiv" action="#!">
      <input value={note.title} name="title" onChange={Input} type="text" id="defaultContactFormName" className="form-control mb-4" placeholder="ADD TITLE" />
      <div className="form-group">
        <textarea value={note.content} name="content" onChange={Input} className="form-control rounded-0" id="exampleFormControlTextarea2" rows="5" placeholder="Write your note here"></textarea>
      </div>
      <button onClick={AddData}
      className="btn btn-info btn-block mt-5 " type="submit">ADD</button>
    </form>


  );
}

export default Note;

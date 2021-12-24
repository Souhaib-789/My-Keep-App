import React , {useEffect} from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Header from './components/header';
import Note from './components/note';
import Footer from './components/footer';
import Notex from './components/notex';
import { useState } from 'react';

function App() {
      //get data from localstorage / remain data
const getItems =()=>{
  let Data = localStorage.getItem('Notes');
   if(Data){
     return JSON.parse(localStorage.getItem('Notes'))
   } 
   else{
     return [];
   }
} 

//State variable which adds note from note.js
 const [additem,setadditem]=useState(getItems);

  //add data to localstorage
  useEffect(
    ()=>{
      localStorage.setItem('Notes',JSON.stringify(additem))},[additem]
      );
    
 

      
  // function fetching already existing data through 'oldData' and new data through 'note' by
  // setting/using a state variable/array of a variable
  const addnote=(note)=>{ 
    // alert("Data fetched from note.js");
    setadditem((oldData)=>{ return [...oldData,note]})}
    
  const onDelete=(id)=>{ 
    setadditem((oldData)=>
      oldData.filter((currdata,index)=>{return index !== id ;})
    )
    }
  
  return (
    
    <>
<Header/>


{/* function which fetches data from note , call by another function(AddData) in note.js through the attribute(gonote) */}
<Note gonote={addnote}/>


{/* with the help of 'map' method we can render notes as many as we can , by following the syntax , 
statevariable.map and returning the notex(note)*/}
{additem.map((val,index)=>{
  return <Notex
  key={index}
  id={index}
  title={val.title}
  content={val.content}
  deldata={onDelete}

   />

})}


<Footer/>
    </>
    
  );
}

export default App;

import React from 'react';
import './App.css';
import { connect } from "react-redux"
import {anothername,addwish} from "./Action/myactions"



function App(props) {
  console.log(props)
  const myWish = props.mywish.map(item=>{
    return <h2>{item}</h2>

  })
  return (
    <div className="App">
      <h1>Hello React </h1>
      <h1>My Name :{props.myname} </h1>
       {myWish}
      {/* <button onClick={()=>props.changeName("Suresh")}>ChangeName</button> */}
      <button onClick={() => props.changeName()}>ChangeName</button>
      <button onClick={() => props.addwish()}>Add Wish</button>


    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myname: state.name,
    mywish : state.wish
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
     changeName:()=>{dispatch(anothername())},
     addwish:()=>{dispatch(addwish())}

    //  changeName:(name)=>{dispatch(anothername(name))}   // second code 
    // changeName:(name)=>{dispatch({type:"Change_Name",payload:name})} // first code 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

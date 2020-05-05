const reducer =(state='' ,action)=>{
    console.log(action)
    if (action.type ==="Change_Name"){
        return action.payload
    }
    return state;
}

export default reducer;




// const iState= {
//     name:"Atul Tiwari",
//     value : ["eat","code"]
// }


// const reducer =(state=iState ,action)=>{
//     console.log(action)
//     if (action.type ==="Change_Name"){
//         return {
//             ...state,
//             name:action.payload
//         }
//     }
//     return state;
// }

// export default reducer;
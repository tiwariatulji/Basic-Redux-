// const anothername =(name)=>{
//     return{
//         type:"Change_Name",
//         payload:name
//     }
// }
// export default anothername;

 export const addwish =()=>{
    return{
        type:"Add_wish",
        payload : "Itservices"
    }
}


 export const anothername =()=>{
    return async (dispatch)=>{
        const data = await fetch ("https://jsonplaceholder.typicode.com/users")
        const result = await data.json();
        console.log(result)
        dispatch({ type:"Change_Name", payload:result[0].name})

    }
}
export default anothername;






//   const anothername =()=>{         // use with fecth api
//     return(dispatch)=>{
//         fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).
//         then(result=>{
             
//             dispatch({ type:"Change_Name", payload:result[0].name})

//         })
//     }
// }
// export default anothername;

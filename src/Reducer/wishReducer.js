
const reducer =(state=[] ,action)=>{
    if(action.type=== "Add_wish"){
        return [...state,]
    }
    console.log(action)
    return state;
}

export default reducer;
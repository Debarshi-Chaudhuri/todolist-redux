const initial={
    todos:[]
}
const reducer=(state=initial,action)=>{
    switch(action.type){
        case "ADD_TO_LIST":
            return{
                todos:[...state.todos,action.payload]
            }
            break;
        case "DELETE":
                
                var left = state.todos.slice(0,action.payload);
                var right=state.todos.slice(action.payload+1);
                console.log(action.payload);
                return{
                    todos:left.concat(right)
                }
            break;
        default:return state;
    }
}
export default reducer;
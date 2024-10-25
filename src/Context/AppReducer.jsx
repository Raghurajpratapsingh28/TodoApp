export default (state,action)=>{
    switch(action.type){
        case 'DELETE_TODOS':
            return{
                ...state,
                allTodos:state.allTodos.filter(allTodos => allTodos.id !== action.payload)
            }
            
            case 'ADD_TODOS':
                return{
                    ...state,
                   allTodos:[ action.payload , ...state.allTodos]
                }

        default:
            return state;
    }
}
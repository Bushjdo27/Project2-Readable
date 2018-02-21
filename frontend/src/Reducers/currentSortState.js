export const sortState = (state = '' , action)=>{
    if(action.type === 'SORT_STATE'){
        return action.state;
    }
    return state;
}
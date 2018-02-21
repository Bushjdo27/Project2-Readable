export const category = (state = '' , action)=>{
    if(action.type === 'CATEGORY'){
        return action.category;
    }
    return state;
   
}
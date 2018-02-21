export const sortStateManager = (sortState) =>{
    return {
        type: 'SORT_STATE',
        state:sortState
    }
}

export const categoryManager = (category)=>{
    return {
        type:'CATEGORY',
        category
    }
}

const categories = (state =  [
    {
        val: 'asd'
    }
], action) => {
    switch(action.type){
        case 'ADD_CATEGORY':
            // console.log(action.cat)
            return [...state, action.cat]    
    }
    return state;   
}

export default categories;


const tasks = (state = null, action) => {
    switch(action.type){

        case 'LAST_NODE':
            return action.val

            
    }
    return state;   
}

export default tasks;



export const openAndCloseNode = (id) => {
    return{
        type: 'OPEN',
        id: id
    }
}

export const addNode = (id) => {
    return{
        type: 'ADD_NODE',
        id: id
    }
}

export const deleteNode = (id) => {
    return{
        type: 'DELETE_NODE',
        id: id
    }
}

export const editTitle = (id, val) => {
    return{
        type: 'EDIT_TITLE',
        id: id,
        val: val
    }
}

export const lastNode = (val) => {
    return{
        type: 'LAST_NODE',
        val: val
    }
}


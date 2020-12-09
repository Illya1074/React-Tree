


const openAndCloseNode = (id) => {
    return{
        type: 'OPEN',
        id: id
    }
}

const addNode = (id) => {
    return{
        type: 'ADD_NODE',
        id: id
    }
}

const deleteNode = (id) => {
    return{
        type: 'DELETE_NODE',
        id: id
    }
}

const editTitle = (id, val) => {
    return{
        type: 'EDIT_TITLE',
        id: id,
        val: val
    }
}

const lastNode = (val) => {
    return{
        type: 'LAST_NODE',
        val: val
    }
}

export default {
    openAndCloseNode, addNode, deleteNode, editTitle,lastNode
}
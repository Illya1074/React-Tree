


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



export const dragAndDrop = (itemFromId,itemTo) => {
    return{
        type: 'DRAG_AND_DROP',
        itemFromId: itemFromId,
        itemTo: itemTo
    }
}

export default {
    openAndCloseNode, addNode, deleteNode, editTitle
}
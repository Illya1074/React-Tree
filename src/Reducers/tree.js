
const R = require('ramda')


/////////////////////////////////// that function return a path wraped in array to primitive of object which was passed

const findPath = (primitive, object, path = []) => {
    for (const [key, value] of Object.entries(object)) {
      if (value === primitive) {
        return [...path, key];
      }
      
      if (typeof value === 'object' || typeof value === 'function') {
        const newPath = findPath(primitive, value, [...path, key]);
        if (newPath) {
          return newPath;
        }
      }
    }
    return null;
  }

////////////////////////////////// that function take path wrapped in array an compose it

const composeLense = (arr) => {
    return R.compose(...arr.map(item => isNaN(item) ? R.lensProp(item) : R.lensIndex(parseInt(item))));
}

//////////////////////////////////// that function return updated state of tree

const openAndClose = (prim, obj) => {
    
    const updatedPath = [...findPath(prim,obj).slice(0, findPath(prim,obj).length-1), 'state']
    const boolState = !R.view(composeLense(updatedPath), obj);
    const newState = R.set(composeLense(updatedPath), boolState, obj);

    return newState;
}

//////////////////////////////////// that function return update tree with additional node 

const addNode = (id, state, obj=null) => {
    const myObj = obj || {
        id: Math.floor(Math.random()*16777215).toString(16),
        title: 'new item',
        icon: 'file',
        state: true,
        items: []
    };
    // console.log(state)
    const updatedPath = [...findPath(id,state).slice(0, findPath(id,state).length-1), 'items'];
    const myItem = R.view(composeLense(updatedPath), state);
    const newState = R.set(composeLense(updatedPath), [...myItem, myObj], state);
    return newState;
}

///////////////////////////////////// deleteNode delete node from your tree


const deleteNode = (id , state) => {
    // console.log(id)
    if(findPath(id,state).length-1 === 1){
        return [...state.slice(0,parseInt(findPath(id,state)[0])), ...state.slice(parseInt(findPath(id,state)[0])+1)]
    }
    const updatedPath = [...findPath(id,state).slice(0, findPath(id,state).length-1)];
    // console.log(state)
    const indexDelItem = findPath(id,state).slice(0, findPath(id,state).length-1)[updatedPath.length-1];
    const myItem = R.view(composeLense(updatedPath.slice(0,updatedPath.length-1)), state);
    const newState = R.set(composeLense(updatedPath.slice(0,updatedPath.length-1)), [...myItem.slice(0,parseInt(indexDelItem)), ...myItem.slice(parseInt(indexDelItem)+1)], state);
    
    return newState
}

// ///////////////////////////////// editTitle edit your title


const editTitle = (id, title, state) => {

    const updatedPath = [...findPath(id,state).slice(0, findPath(id,state).length-1), 'title']
    const newState = R.set(composeLense(updatedPath), title, state);
    return newState;
    // console.log(id, title)
}

///////////////////////////////////////////


const canIDrop = (from, to) => {
    
    if(findPath(to.id, from) === null){
        if(from !== null || to !== null){
            return true
        }
    }
    return false;    
}

const tree = (state =  [
    {
        id: Math.floor(Math.random()*16777215).toString(16),
        title: 'life', 
        icon: 'folder',
        state: true,
        items: [
            {
                id: Math.floor(Math.random()*16777215).toString(16),
                title: 'books',
                icon: 'file',
                state: true,
                items: [
                    {
                        id: '45abc6',
                        title: 'science',
                        icon: 'file',
                        state: true,
                        items: []
                    },
                    {
                        id: Math.floor(Math.random()*16777215).toString(16),
                        title: 'it',
                        icon: 'file',
                        state: true,
                        items: []
                    },
                    {
                        id: Math.floor(Math.random()*16777215).toString(16),
                        title: 'poem',
                        icon: 'file',
                        state: true,
                        items: []
                    }
                ]
            },
            {
              id: '6f5gd3',
              title: 'school',
              icon: 'file',
              state: true,
              items: [
                  {
                      id: '7h568h',
                      title: 'math',
                      icon: 'file',
                      state: true,
                      items: []
                  },
                  {
                      id: Math.floor(Math.random()*16777215).toString(16),
                      title: 'physic',
                      icon: 'file',
                      state: true,
                      items: []
                  }
              ]
          }
        ]
    },
    {
        id: '5t623r',
        title: 'shop', 
        icon: 'folder',
        state: true,
        items: [
            {
                id: Math.floor(Math.random()*16777215).toString(16),
                title: 'bread',
                icon: 'file',
                state: true,
                items: []
            }
        ]
    },
    {
        id: '7y689e',
        title: 'myday', 
        icon: 'folder',
        state: true,
        items: [
            {
                id: Math.floor(Math.random()*16777215).toString(16),
                title: 'homework',
                icon: 'file',
                state: true,
                items: []
            }
        ]
    },
    {
        id: Math.floor(Math.random()*16777215).toString(16),
        title: 'job', 
        icon: 'folder',
        state: true,
        items: [
            {
                id: Math.floor(Math.random()*16777215).toString(16),
                title: 'computer',
                icon: 'file',
                state: true,
                items: []
            }
        ]
    }
], action) => {
    switch(action.type){
        case 'OPEN':
            return openAndClose(action.id, state);
        case 'ADD_NODE':
            return addNode(action.id, state);
        case 'DELETE_NODE':
            return deleteNode(action.id, state)
        case 'EDIT_TITLE':
            return editTitle(action.id, action.val, state)
        case 'DRAG_AND_DROP':
            // console.log(action.itemFromId , action.itemTo)
            // if(action.itemFromId.items.length === 0){
                // if(action.itemFromId !== null || action.itemTo !== null)
            // console.log(state)
            if(canIDrop(action.itemFromId , action.itemTo)){
                // console.log(deleteNode(action.itemFromId.id, state))
                return addNode(action.itemTo.id, deleteNode(action.itemFromId.id, state), action.itemFromId)
            }
            // return addNode(action.itemTo.id, deleteNode(action.itemFromId.id, state), action.itemFromId);
            // }
    }
    return state;   
}

export default tree;
import React, {useState, useEffect} from 'react'
import Tree from './Containers/Tree/Tree'
import {useSelector, useDispatch} from "react-redux"
import {openAndCloseNode, addNode, deleteNode, editTitle} from './Actions/index' 


const Layout = () => {
    const tree = useSelector(state => state.tree)
    const dispatch = useDispatch();
    const [lastNode, setLastNode] = useState(null)
    const openAndCloseNodeFun = (id) => {
        dispatch(openAndCloseNode(id));
        // console.log(id)
    }
    const [sign, setSign] = useState(false);
    const [from, setFrom] = useState();
    const addNodeFun = (id) => {
        dispatch(addNode(id));
    }

    useEffect(() => {
        console.log(from,lastNode)
        setSign(false)
        // myDispatch()
    }, [sign])

    const deleteNodeFun = (id) => {
        dispatch(deleteNode(id))
    }

    const editTitleFun = (id, val) => {
        dispatch(editTitle(id, val))
    }


    const myLastNode = (val) => {
        setLastNode(val)
        // console.log(val) 
    }

    const myDispatch = (val) => {
        setFrom(val)
        setSign(true)
        // console.log(lastNode)
        
    }

    

    return (
        
        <>
            {/* <ContentEditable html={'Okey'} onBlur={handleBlur} onChange={(evt)=>} /> */}
            <h1 onClick={() => myDispatch()}>Nothing</h1>
            <div className='tree'>
                <Tree openNode={openAndCloseNodeFun} myDispatch={myDispatch} myLastNode={myLastNode} addNode={addNodeFun}
                 items={tree} deleteNodeFun={deleteNodeFun} editTitle={editTitleFun} myNodes={lastNode}/>
            </div>
        </>
    )
}

export default Layout

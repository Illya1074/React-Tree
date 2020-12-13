import React, {useState, useEffect} from 'react'
import Tree from '../Tree/Tree'
import {useSelector, useDispatch} from "react-redux"
import allActions from '../../Actions' 
import {dragAndDrop} from '../../Actions/todoActions'

const Layout = () => {
    const tree = useSelector(state => state.tree)
    const dispatch = useDispatch();
    const [lastNode, setLastNode] = useState(null)
    const [isDraggingVal, setIsDraggingVal] = useState(false);
    
    const [sign, setSign] = useState(false);
    const [from, setFrom] = useState();


    useEffect(() => {
        const ac = new AbortController();
        // console.log(from,lastNode)
        dispatchFun(from,lastNode)
        setSign(false)
        
        return () => ac.abort()
        // myDispatch()
    }, [sign])

    function fireEvent(...args) {
        const event = args[0];
        const params = args.splice(1);
        dispatch(allActions.tree[event].apply(this, params))
    }


    const myLastNode = (val) => {
        setLastNode(val)
        // console.log(val) 
    }

    const dispatchFun = (itemFromId, itemTo) => {
        if(lastNode !== null){
            // console.log('dispatch from '+itemFromId+' to '+itemTo.id)
            dispatch(dragAndDrop(itemFromId,itemTo))
            setLastNode(null)
        }
        
    }

    const myDispatch = (val) => {
        setFrom(val)
        setSign(true)
        // console.log(lastNode)
    }

    const isDraggingFun = (val) => {
        setIsDraggingVal(val)
    }

    

    return (
        
        <>
            {/* <ContentEditable html={'Okey'} onBlur={handleBlur} onChange={(evt)=>} /> */}
            <div className='tree'>
                <Tree eventDispatcher={fireEvent} myDispatch={myDispatch} myLastNode={myLastNode}
                 items={tree} isDragging={isDraggingFun} myNodes={lastNode} isDraggingVal={isDraggingVal}/>
            </div>
        </>
    )
}

export default Layout

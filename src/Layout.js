import React, {useState, useEffect} from 'react'
import Tree from './Containers/Tree/Tree'
import {useSelector, useDispatch} from "react-redux"
import allActions from './Actions' 


const Layout = () => {
    const tree = useSelector(state => state.tree)
    const dispatch = useDispatch();
    const [lastNode, setLastNode] = useState(null)
    const [isDraggingVal, setIsDraggingVal] = useState(false);
    
    const [sign, setSign] = useState(false);
    const [from, setFrom] = useState();


    useEffect(() => {
        // console.log(from,lastNode)
        dispatchFun(from,lastNode)
        setSign(false)
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

    const dispatchFun = (a, b) => {
        if(lastNode !== null){
            console.log('dispatch from '+a+' to '+b)
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

import React, {useEffect, useState} from 'react'
import './Tree.css';
import ContentEditable from 'react-contenteditable'
import Circle from '../Circle/Circle'

export const addNode = 'addNode'
export const openNode = 'openAndCloseNode'
export const deleteNode = 'deleteNode'
export const editTitle = 'editTitle'

const TreeItem = ({item,eventDispatcher, myLastNode, myDispatch, myNodes, isDragging, isDraggingVal}) => {
    
    const [isDraggingState,setIsDraggingState] = useState(false)
    const [typing, setTyping] = useState({
        state: false,
        timeCode: null,
        val: item.title
    })

    useEffect(() => {
        return () => {            
            clearTimeout(typing.timeCode)
        }
    },[typing])
    
    useEffect(() => {
        setIsDraggingState(isDraggingVal)
    }, [isDraggingVal])

    async function handleChange(evt) {
   
        const timer = setTimeout(() => {
            console.log(item.title + ' Finish')
            setTyping({
                state: false,
                timeCode: null,
                val: evt.target.value
            })
            eventDispatcher(editTitle,item.id, evt.target.value)
        }, 1500)
        
        setTyping({
            state: true,
            timeCode: timer,
            val: evt.target.value
        })
    

    };
    
    
    const onDrop = (id) => {
        if(isDraggingState){
            // console.log(isDraggingState)

            myLastNode(item.title)
        }
    }
    


    const myDispatchFun = () => {
        // console.log(myNodes) 
        myDispatch(item.title)
    }


    const isDraggingFun = (val) => {
        isDragging(val)
        // console.log(val)
    }

    

    return (
        <div className="tree_node" style={{paddingLeft: '20px', cursor: 'pointer', paddingTop: '10px'}}>
            <Circle myDispatch={myDispatchFun} isDragging={isDraggingFun}/>
            
            <div className={isDraggingState ? "tree_node_item active" : "tree_node_item"} style={{zIndex:'100'}}  onMouseOver={() => onDrop(item.title)}>
            
                <ContentEditable className='tree_node_item_add-button' html={typing.state ? typing.val : item.title}
                 onClick={myDispatchFun} onChange={handleChange} />
                <h5 className='tree_node_item_add-button'  onClick={() => eventDispatcher(openNode,item.id)}>^</h5>
                <h5 className='tree_node_item_add-button'  onClick={() => eventDispatcher(addNode,item.id)}>add</h5>
                <h5 className='tree_node_item_add-button'  onClick={() => typing.state ? null : eventDispatcher(deleteNode,item.id)}>del</h5>
                
            </div>
            <div className={isDraggingState ? "myBar active" : "myBar"}></div>
            {item.items && item.state === true ? <Tree items={item.items} eventDispatcher={eventDispatcher} isDragging={isDraggingFun} myNodes={myNodes} myLastNode={myLastNode}  myDispatch={myDispatch}
             isDraggingVal={isDraggingVal}/> : null}
        </div>
    )
} 
        


const Tree = ({items, eventDispatcher, myLastNode, myDispatch, myNodes, isDragging, isDraggingVal}) => <div>
    {items.map((i, key) => <TreeItem  key={key} item={i} myLastNode={myLastNode} myDispatch={myDispatch} eventDispatcher={eventDispatcher} 
    isDragging={isDragging} isDraggingVal={isDraggingVal} myNodes={myNodes}/>)}    
</div>


export default Tree;
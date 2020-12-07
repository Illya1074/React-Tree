import React, {useEffect, useState} from 'react'
import './Tree.css';
import ContentEditable from 'react-contenteditable'
import Circle from '../Circle/Circle'
import Draggable from 'react-draggable';

const TreeItem = ({item, openNode, addNode, deleteNodeFun, editTitle, myLastNode, myDispatch, myNodes}) => {
    
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
    })
    
    function handleChange(evt) {

        if(typing.state === true){
            clearTimeout(typing.timeCode)
        }
        
        const timer = setTimeout(() => {
            setTyping({
                state: false,
                timeCode: null,
                val: evt.target.value
            })
            editTitle(item.id, evt.target.value)
        }, 2000);

        setTyping({
            state: true,
            timeCode: timer,
            val: evt.target.value
        })

    };
    
    
    const onDrop = (id) => {
        myLastNode(item.title)
    }
    


    const myDispatchFun = () => {
        // console.log(myNodes) 
        myDispatch(item.title)
    }


    const isDraggingFun = (val) => {
        setIsDraggingState(val)
        // console.log(val)
    }

    

    return (
        <div className="tree_node" style={{paddingLeft: '20px', cursor: 'pointer', paddingTop: '10px'}}>
            <Circle myDispatch={myDispatchFun} isDragging={isDraggingFun}/>
            
            <div  className="tree_node_item active" style={{zIndex:'100'}}  onMouseOver={() => onDrop(item.title)}>
            
                <ContentEditable className='tree_node_item_add-button' html={typing.state ? typing.val : item.title}
                 onClick={myDispatchFun} onChange={handleChange} />
                <h5 className='tree_node_item_add-button'  onClick={() => openNode(item.id)}>^</h5>
                <h5 className='tree_node_item_add-button'  onClick={() => addNode(item.id)}>add</h5>
                <h5 className='tree_node_item_add-button'  onClick={() => typing.state ? null : deleteNodeFun(item.id)}>del</h5>
                
            </div>
            <div className='myBar'></div>
            {item.items && item.state === true ? <Tree items={item.items} myNodes={myNodes} myLastNode={myLastNode}  myDispatch={myDispatch}
             editTitle={editTitle} openNode={openNode} addNode={addNode} deleteNodeFun={deleteNodeFun}/> : null}
        </div>
    )
} 
        


const Tree = ({items, openNode, addNode, deleteNodeFun, editTitle, myLastNode, myDispatch, myNodes}) => <div>
    {items.map((i, key) => <TreeItem  key={key} item={i} myLastNode={myLastNode} openNode={openNode}
     myDispatch={myDispatch} addNode={addNode} editTitle={editTitle} deleteNodeFun={deleteNodeFun} myNodes={myNodes}/>)}    
</div>


export default Tree;
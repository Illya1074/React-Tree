import React, {useEffect, useState} from 'react'
import TreeItemWrapper from '../../Containers/TreeItemWrapper/TreeItemWrapper'
import TreeItemAdd from '../../Containers/TreeItemAdd/TreeItemAdd'
import TreeItemDelete from '../../Containers/TreeItemDelete/TreeItemDelete'
import TreeItemFold from '../../Containers/TreeItemFold/TreeItemFold'
import TreeItemContent from '../../Containers/TreeItemContent/TreeItemContent'
import TreeItemCircle from '../../Containers/TreeItemCircle/TreeItemCircle'
import Draggable from '../../Containers/Draggable/Draggable'
import Tree from '../Tree/Tree'
import './TreeItem.css'


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
        const ac = new AbortController();
        return () => {            
            clearTimeout(typing.timeCode)
            ac.abort()
        }
    },[typing])
    
    useEffect(() => {
        const ac = new AbortController();
        setIsDraggingState(isDraggingVal)
        return () => ac.abort()
    }, [isDraggingVal])

    function handleChange(evt) {
   
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
            // console.log('isDraggingState')

            myLastNode(item)
        }
    }
    


    const myDispatchFun = () => {
        // console.log(myNodes) 
        myDispatch(item)
    }


    const isDraggingFun = (val) => {
        isDragging(val)
        // console.log(val)
    }

   
    
    return (
        <div className="my-tree-node" style={{paddingLeft: '20px', cursor: 'pointer', paddingTop: '10px'}}>
            <div className="my-tree-node_element" onMouseOver={onDrop} >
                <TreeItemWrapper onMouseOver={() => onDrop(item.title)}>
                    <Draggable onStop={myDispatchFun} isDragging={isDraggingFun}>
                        <TreeItemCircle myClassName="circle"/>
                    </Draggable>
                    <TreeItemContent html={typing.state ? typing.val : item.title}
                    click={myDispatchFun} onChange={handleChange} />
                    <TreeItemFold click={() => eventDispatcher(openNode,item.id)}/>
                    <TreeItemAdd click={() => eventDispatcher(addNode,item.id)}/>
                    <TreeItemDelete click={() => typing.state ? null : eventDispatcher(deleteNode,item.id)}/>
                    
                </TreeItemWrapper>
                <div className={isDraggingVal ? 'my-bar' : 'my-bar_none'}></div>    
            </div>
            
            {item.items && item.state === true ? <Tree items={item.items} eventDispatcher={eventDispatcher} isDragging={isDragging} myNodes={myNodes} myLastNode={myLastNode}  myDispatch={myDispatch}
             isDraggingVal={isDraggingVal}/> : null}
        </div>
    )
}

export default TreeItem

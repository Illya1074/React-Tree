import TreeItem from '../TreeItem/TreeItem'

const Tree = ({items, eventDispatcher, myLastNode, myDispatch, myNodes, isDragging, isDraggingVal}) => <div>
    {items.map((i, key) => <TreeItem key={key} item={i} myLastNode={myLastNode} myDispatch={myDispatch} eventDispatcher={eventDispatcher} 
    isDragging={isDragging} isDraggingVal={isDraggingVal} myNodes={myNodes}/>)}    
</div>


export default Tree;
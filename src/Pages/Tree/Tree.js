import TreeItem from '../TreeItem/TreeItem'
import PropTypes from 'prop-types';

const Tree = ({items, eventDispatcher, myLastNode, myDispatch, myNodes, isDragging, isDraggingVal}) => <div>
    {items.map((i, key) => <TreeItem key={key} item={i} myLastNode={myLastNode} myDispatch={myDispatch} eventDispatcher={eventDispatcher} 
    isDragging={isDragging} isDraggingVal={isDraggingVal} myNodes={myNodes}/>)}    
</div>


export default Tree;


Tree.propTypes = {
    items: PropTypes.array,
    eventDispatcher: PropTypes.func,
    myLastNode: PropTypes.func,
    myDispatch: PropTypes.func,
    myNodes: PropTypes.object,
    isDragging: PropTypes.func,
    isDraggingVal: PropTypes.bool
};
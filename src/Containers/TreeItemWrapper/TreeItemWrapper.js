import React from 'react'
import './TreeItemWrapper.css'

const TreeItemWrapper = (props) => {
    return (
        <div className="tree-item-wrapper" >
            {props.children}
        </div>
    )
}

export default TreeItemWrapper

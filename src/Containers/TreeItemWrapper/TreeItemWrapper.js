import React from 'react'
import './TreeItemWrapper.css'


const TreeItemWrapper = ({children}) => {
    return (
        <div className="tree-item-wrapper" >
            {children}
        </div>
    )
}

export default TreeItemWrapper



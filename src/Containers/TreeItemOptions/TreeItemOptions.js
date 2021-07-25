import React from 'react'
import './TreeItemOptions.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const TreeItemOptions = ({addNodeFun, delNodeFun}) => {
    return (
        <>
            <div className='options'>
                <div className="options-dropdown-content">
                    <div onClick={addNodeFun}>Add Node</div>
                    <div onClick={delNodeFun}>Delete Node</div>
                </div>
                <div className='options-dropdown'>
                    <div className='options-item'></div>
                    <div className='options-item'></div>
                    <div className='options-item'></div>
                </div>
            </div>
        </>
     
    )
}

export default TreeItemOptions

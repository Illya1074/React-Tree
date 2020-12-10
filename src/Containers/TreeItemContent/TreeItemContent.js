import React from 'react'
import ContentEditable from 'react-contenteditable'
import './TreeItemContent.css'

const TreeItemContent = (props) => {
    return (
        <div className="tree-item-content">
            <ContentEditable  html={props.html} onChange={props.onChange} onClick={props.click}/>
        </div>
    )
}

export default TreeItemContent

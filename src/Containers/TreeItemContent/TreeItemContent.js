import React from 'react'
import ContentEditable from 'react-contenteditable'
import './TreeItemContent.css'
import PropTypes from 'prop-types';

const TreeItemContent = ({html,onChange,click}) => {
    return (
        <div className="tree-item-content">
            <ContentEditable  html={html} onChange={onChange} onClick={click}/>
        </div>
    )
}

export default TreeItemContent


TreeItemContent.propTypes = {
    html: PropTypes.string,
    onChange: PropTypes.func,
    click: PropTypes.func,
  };
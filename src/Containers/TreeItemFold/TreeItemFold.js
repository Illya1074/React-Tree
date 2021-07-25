import React from 'react'
import PropTypes from 'prop-types';
import './TreeItemFold.css';

const TreeItemFold = ({click,className}) => {
    return (
        <div className={className} onClick={() => click()}>
            
        </div>
    )
}

export default TreeItemFold

TreeItemFold.propTypes = {
    click: PropTypes.func,
  };
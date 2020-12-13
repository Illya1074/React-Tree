import React from 'react'
import PropTypes from 'prop-types';

const TreeItemAdd = ({click}) => {
    return (
        <div onClick={click} className="tree-item-add">
            add
        </div>
    )
}

export default TreeItemAdd

TreeItemAdd.propTypes = {
    click: PropTypes.func
};


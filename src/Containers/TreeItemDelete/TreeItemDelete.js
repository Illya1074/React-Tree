import React from 'react'
import PropTypes from 'prop-types';

const TreeItemDelete = ({click}) => {
    return (
        <div onClick={() => click()}>
            Del
        </div>
    )
}

export default TreeItemDelete


TreeItemDelete.propTypes = {
    click: PropTypes.func,
  };
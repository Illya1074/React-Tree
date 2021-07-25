import './Circle.css';
import PropTypes from 'prop-types';

const Circle = ({myClassName, wrapCircleActive}) => {
    

    return (
            <div className={wrapCircleActive}>
                <div className={myClassName}></div>
            </div>               
    )
}

export default Circle


Circle.propTypes = {
    myClassName: PropTypes.string,
};
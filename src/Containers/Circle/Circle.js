import React, {useState, useEffect} from 'react';
import Draggable from '../Draggable/Draggable';
import './Circle.css';

const Circle = ({ myDispatch, isDragging}) => {
    

    const isDraggingFun = (val) => {
        isDragging(val)
    }

    const onStop = (e) => {    
        console.log('stop')    
        myDispatch()
    }

    return (
        // <Draggable onStart={onStart} onStop={onStop}>
        <Draggable onStop={onStop} isDragging={isDraggingFun}>
            <span> ◉</span>       
        </Draggable>
        
    )
}

export default Circle

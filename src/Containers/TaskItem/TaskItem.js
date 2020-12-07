import React from 'react'
import './TaskItem.css';

const TaskItem = () => {
    return (
        <div className="task-item">
            <div className="task-item_nav">
                <ul>
                    <li>
                        Life - 
                    </li>
                    <li>
                        Hobby -
                    </li>
                    <li>
                        Books 
                    </li>
                </ul>
            </div>
            <div className="task-item_title">
                Science Fiction
            </div>
            <div className="task-item_elements">
                <ul>
                    <li>
                        Harry Potter
                    </li>
                    <li>
                        Lord of the Ring
                    </li>
                    <li>
                        Interstellar                        
                    </li>
                    <li>
                        Star Wars
                    </li>
                    <li>
                        Star Trek
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TaskItem

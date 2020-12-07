import tasks from './tasks';
import {combineReducers} from 'redux';
import categories from './categories';
import tree from './tree'

const allReducers = combineReducers({
    tasks: tasks,
    categories: categories,
    tree: tree
})

export default allReducers;


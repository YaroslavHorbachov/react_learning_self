import { combineReducers } from 'redux'
import { counter } from './dec-inc';
import { toggleVisibility } from './toggle'
import { authenticate } from './authenticate'

const main = combineReducers({
    counter,
    toggleVisibility,
    authenticate
})

export default main
import reducer from '../reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import { init } from './init'
import { logger } from 'redux-logger'
import persistState from 'redux-localstorage'

const enhancer = compose(
    persistState(),
    applyMiddleware(logger)
)

const store = createStore(reducer, enhancer)
export default store
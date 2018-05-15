import { init } from '../store/init'
const toggleVisibility = (state = init, action) => {
    switch (action.type) {
        case 'TOGGLE': return { ...state, visibility: !state.visibility }
        default: return state
    }

}
export { toggleVisibility }
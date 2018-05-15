import { authenticateInit } from '../store/init'
const authenticate = (state = authenticateInit, action) => {
    switch (action.type) {
        case 'LOGIN': return { ...state, auth: !state.auth };
        case 'REGISTER': return state;
        case 'LOGOUT': return state;
        default: return state
    }
}
export { authenticate }
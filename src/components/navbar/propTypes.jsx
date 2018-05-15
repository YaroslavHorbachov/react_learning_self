import PropTypes from 'prop-types'

export const propTypes = {
    actions: PropTypes.shape({
        authenticateActions: PropTypes.shape({
            login: PropTypes.func,
            register: PropTypes.func,
            logout: PropTypes.func
        }),
        counterActions: PropTypes.shape({
            inc: PropTypes.func,
            dec: PropTypes.func,
            reset: PropTypes.func
        }),
        toggleActions: PropTypes.shape({
            toggle: PropTypes.func
        })

    }),
    authenticate: PropTypes.shape({
        auth: PropTypes.bool,
        loginUsers: PropTypes.array
    }),
    value: PropTypes.number
}
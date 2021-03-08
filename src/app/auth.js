// Action Type
const AUTH_ADDED = 'authAdded'
const AUTH_REMOVED = 'authRemoved'

// Actions
const authAdd = (token, type) => {
    return {
        type: AUTH_ADDED,
        payload: {
            token,
            type
        }
    }
}

const authRemove = () => {
    return {
        type: AUTH_REMOVED,
        payload: {
            token: '',
            type: ''
        }
    }
}


// Data
const authData = {
    token: '',
    type: ''
}


// Reducer
export default (auth=authData, action) => {
    switch (action.type) {
        case AUTH_ADDED:
            return {
                token: action.payload.token,
                type: action.payload.type
            }
        
        case AUTH_REMOVED:
            return {
                token: '',
                type: ''
            }

        default:
            return auth
    }
}


export {
    authAdd,
    authRemove
}
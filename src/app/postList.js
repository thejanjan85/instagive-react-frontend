import route from '../route/instagive'

// Action Type
const POST_LIST_FECHED = 'postListFeched'
const POST_LIST_ADDED = 'postListAdded'
const POST_LIST_REMOVED = 'postListRemoved'
const POST_LIST_UPDATED = 'postListUpdated'


// Action
export const postListFeched = () => async dispatch => {
    const {data} = await route.get('/landing')
    dispatch({
        type: POST_LIST_FECHED,
        payload: data
    })
}

const postListAdded = (post) => {
    return {
        type: POST_LIST_ADDED,
        payload: post
    }
}

const postListRemoved = (id) => {
    return {
        type: POST_LIST_REMOVED,
        payload: {id}
    }
}

const postListUpdated = (post) => {
    return {
        type: POST_LIST_UPDATED,
        payload: post
    }
}



// Reducer
export default (state=[], action) => {
    switch (action.type) {
        case POST_LIST_FECHED:
            return action.payload
    
        case POST_LIST_REMOVED:
            return state.filter(post => 
                post._id !== action.payload.id)
    
        case POST_LIST_UPDATED:
            return state.map(post =>
                post._id === action.payload.id ?
                action.payload :
                post)
    
        default:
            return state;
    }
}
import route from '../route/instagive'

// Action Types
const USER_DATA_FETCH = 'userDataFetch'
const USER_LEDGER_ADDED = 'userLedgerAdded'
const USER_LEDGER_REMOVED = 'userLedgerRemoved'
const USER_LEDGER_UPDATED = 'userLedgerUpdated'

const USER_POST_FETCH = 'userPostFetch'
const USER_POST_ADDED = 'userPostAdded'
const USER_POST_REMOVED = 'userPostRemoved'
const USER_POST_UPDATED = 'userPostUpdated'


// Action
// Ledger
const userDataFetch = (token) => async dispatch => {
    const { data: ledger } = await route.post('/ledger/getall', {token})
    const { data: post } = await route.post('/post/userpost', { token })

    dispatch({
        type: USER_DATA_FETCH,
        payload: {ledger, post} 
    })
}


const userLedgerAdded = (ledgerForm, token) => async dispatch => {
    await route.post(`/ledger/${ledgerForm.postId}`, {...ledgerForm, token})
    
    dispatch({
        type: USER_LEDGER_ADDED,
        payload: ledgerForm
    })
}


// Post


// Data
const userData = {
    ledger: [],
    post: []
}


// Reducer
export default (state=userData, action) => {
    switch (action.type) {
        case USER_DATA_FETCH:
            return action.payload
    
        case USER_LEDGER_ADDED:
            return {...state, ledger: [...state.ledger, action.payload]}
    
        case USER_LEDGER_REMOVED:
            return {
                ...state,
                ledger: state.ledger.filter(ledger => ledger._id !== action.payload._id)
            }
    
        case USER_LEDGER_UPDATED:
            return state
    
        case USER_POST_ADDED:
            return {...state, post: [...state.post, action.payload]}
    
        case USER_POST_REMOVED:
            return {
                ...state,
                post: state.post.filter(post => post._id !== action.payload._id)
            }
    
        case USER_POST_UPDATED:
            return state
    
        default:
            return state;
    }
}

export {
    userDataFetch,
    userLedgerAdded
}
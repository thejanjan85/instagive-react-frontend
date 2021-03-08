import route from '../route/instagive'

// Action Type
const ACCOUNT_FETCHED = 'accountFetched'
const ACCOUNT_APPROVED = 'accountApproved'
const ACCOUNT_REJECTED = 'accountRejected'


// Actions
const accountFetched = () => async dispatch => {
    const {data} = await route.get('/admin/getusers')

    dispatch({
        type:ACCOUNT_FETCHED,
        payload: data
    })
}

const accountApproved = account => async dispatch => {
    await route.post(`/admin/changestatus/${account._id}/approved`)
    dispatch({
        type:ACCOUNT_APPROVED,
        payload: account
    })
}

const accountRejected = account => async dispatch => {
    await route.post(`/admin/changestatus/${account._id}/rejected`)
    dispatch({
        type:ACCOUNT_REJECTED,
        payload: account
    })
}


const accountList = {
    pending: [],
    approved: [],
    rejected: []
}
// Reducer
export default (state=accountList, action) => {
    switch (action.type) {
        case ACCOUNT_FETCHED:
            return action.payload
    
        case ACCOUNT_APPROVED:
            return {
                ...state,
                pending: state.pending.filter(account => account._id !== action.payload._id),
                approved: [...state.approved, action.payload]
            }
        
        case ACCOUNT_REJECTED:
            return {
                ...state,
                pending: state.pending.filter(account => account._id !== action.payload._id),
                approved: state.approved.filter(account => account._id !== action.payload._id),
                rejected: [...state.approved, action.payload]
            }
    
        default:
            return state;
    }
}



export {
    accountFetched,
    accountApproved,
    accountRejected
}
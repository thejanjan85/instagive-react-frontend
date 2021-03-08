import {combineReducers} from 'redux'
import auth from './auth'
import postList from './postList'
import accounts from './accounts'
import user from './user'

export default combineReducers({
    auth,
    postList,
    accounts,
    user
})
import { combineReducers } from 'redux'
import quoteReducer from './quote/reducer'

const rootReducer = combineReducers({
    quote: quoteReducer
});

export default rootReducer;
import rootReducer from './rootReducer'
import { devToolsEnhancer } from 'redux-devtools-extension'
import {createStore} from 'redux'

const store = createStore(rootReducer, devToolsEnhancer());

export default store
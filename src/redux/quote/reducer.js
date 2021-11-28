import * as types from './types'
const INITIAL_STATE = {
    arrButtons: ['Inspire', 'Management', 'Sports', 'Life', 'Funny', 'Love', 'Art'],
    background: '',
    quote: '',
    author: '', 
    url: 'Sports'
};

const reducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case types.changeUrl: 
            return { ...state, url: action.url }
        case types.changeBG:
            return { ...state, background: action.background}
        case types.changeQuote:
            return { ...state, quote: action.quote}``
        case types.changeAuthor:
            return { ...state, author: action.author}
        default: return state;
    }
}
export default reducer
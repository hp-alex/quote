import * as types from './types'
export const changeUrl = (url) => ({
    type: types.changeUrl,
    url: url
})

export const changeBg = (background) => ({
    type: types.changeBG,
    background: background
})

export const changeQuote = (quote) => ({
    type: types.changeQuote,
    quote: quote
})

export const changeAuthor = (author) => ({
    type: types.changeAuthor,
    author: author
})
export const RECEIVE_SEARCH_ITEM = "RECEIVE_SEARCH_ITEM";
export const RESET_SEARCH_ITEM = "RESET_SEARCH_ITEM";

export const receiveSearchItem = (phrase) => ({
    type: RECEIVE_SEARCH_ITEM,
    phrase,
})

export const resetSearchItem = () => ({
    type: RESET_SEARCH_ITEM,
})
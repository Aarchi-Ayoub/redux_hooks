const initialState = {
    comments: [],
    comment: {}
}

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL_COMMENTS':
            return {
                ...state,
                comments: action.payload
            };
        case 'READ_COMMENT':
            return {
                ...state,
                comment: action.payload
            };
        case 'CREATE_COMMENT':
            return {
                ...state,
                comments: [action.payload, ...state.comments]
            };
        default:
            return state;
    }
}
export default commentReducer;
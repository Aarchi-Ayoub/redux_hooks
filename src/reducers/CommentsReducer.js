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
        case 'DELETE_COMMENT':
            return {
                ...state,
                comments: state.comments.filter(comment => comment.id !== action.payload)
            };
        case 'UPDAE_COMMENT':
            return {
                ...state,
                comments: state.comments.filter(comment => comment.id === action.payload.id ? comment = action.payload : comment)
            };
        default:
            return state;
    }
}
export default commentReducer;
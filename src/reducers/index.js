const { combineReducers } = require("redux");
const { default: commentReducer } = require("./CommentsReducer");

const rootReducers = combineReducers({
    comment: commentReducer
});
export default rootReducers;
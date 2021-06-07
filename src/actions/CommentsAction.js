import axios from "axios"

export const getComments = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
    dispatch({
        type: 'ALL_COMMENTS',
        payload: res.data
    })
}
export const getComment = id => async dispatch => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`);
    dispatch({
        type: 'READ_COMMENT',
        payload: res.data
    })
}
export const createComment = comment => async dispatch => {
    const res = await axios.post(`https://jsonplaceholder.typicode.com/comments`, comment);
    dispatch({
        type: 'CREATE_COMMENT',
        payload: res.data
    })
}
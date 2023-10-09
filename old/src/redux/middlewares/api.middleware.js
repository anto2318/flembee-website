import { API_REQUEST, XHR_REQUEST } from '../constants';
import axios from 'axios';

// this middleware care only for API calls
export const apiMdl = ({ dispatch }) => (next) => (action) => {
    if (action.type === API_REQUEST) {
    const { method, url, onSuccess, onError, token } = action.meta;
        axios({
            url,
            method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: token || '',
            },
            data: action.payload && JSON.stringify(action.payload),
        })
            .then((res) => dispatch({ type: onSuccess, payload: res.data }))
            .catch((err) => dispatch({ type: onError, payload: err.response.data }));
    }

    if (action.type === XHR_REQUEST) {
        const { method, url, onSuccess, onError, token } = action.meta;

        const data = new FormData();
        data.append('file', action.payload.file);

        const xhr = new XMLHttpRequest();

        xhr.onloadend = function () {
            if (xhr.status === 200) {
                const response = xhr.responseText;
                dispatch({
                    type: onSuccess,
                    payload: response,
                });
            } else {
                dispatch({ type: onError, payload: this.status });
            }
        };

        xhr.open(method, url);

        xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
        xhr.setRequestHeader('Authorization', token || '');

        xhr.send(data);
    }

    return next(action);
};

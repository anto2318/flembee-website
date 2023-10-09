import { Dispatch, Middleware, MiddlewareAPI } from 'redux';
import axios, { AxiosRequestConfig } from 'axios';
import { API_REQUEST, XHR_REQUEST } from '../constants';

interface ApiMiddlewareAction {
  type: string;
  meta: {
    method: string;
    url: string;
    onSuccess: string;
    onError: string;
    token?: string;
  };
  payload?: any;
}

export const apiMdl: Middleware =
  ({ dispatch }: MiddlewareAPI) =>
  (next: Dispatch) =>
  (action: ApiMiddlewareAction) => {
    if (action.type === API_REQUEST) {
      const { method, url, onSuccess, onError, token } = action.meta;
      const config: AxiosRequestConfig = {
        url,
        method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: token || '',
        },
        data: action.payload && JSON.stringify(action.payload),
      };

      axios(config)
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

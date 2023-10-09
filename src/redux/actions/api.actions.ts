import { API_REQUEST, XHR_REQUEST } from '../constants';

export const apiRequest = (method: string, url: string, body: any, onSuccess: string, onError: string, token: string) => ({
  type: API_REQUEST,
  payload: body,
  meta: { method, url, onSuccess, onError, token },
});

export const xhrRequest = (method: string, url: string, body: any, onSuccess: string, onError: string, token: string) => ({
  type: XHR_REQUEST,
  payload: body,
  meta: { method, url, onSuccess, onError, token },
});

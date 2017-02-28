import {
  ADD_TOASTR,
  REMOVE_TOASTR,
  CLEAN_TOASTR,
  SHOW_CONFIRM,
  HIDE_CONFIRM,
  REMOVE_BY_TYPE
} from './constants';

import {preventDuplication} from './utils';
import {toastrsCache} from './reducer';
import config from './config';

export function add(toastr) {
  if (config.preventDuplicates && preventDuplication(toastrsCache, toastr)) {
    return {
      type: ADD_TOASTR,
      payload: {
        ignoreToastr: true
      }
    };
  }
  return {
    type: ADD_TOASTR,
    payload: toastr
  };
}

export const clean = () => ({
  type: CLEAN_TOASTR
});

export const remove = (params) => ({
  type: REMOVE_TOASTR,
  payload: params
});

export const showConfirm = (obj) => ({
  type: SHOW_CONFIRM,
  payload: obj
});

export const hideConfirm = () => ({type: HIDE_CONFIRM});

export const removeByType = (payload) => ({
  type: REMOVE_BY_TYPE,
  payload
});

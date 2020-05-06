import { CHANGE_SEARCH_FIELD } from './types';

export const setSearchField = text => {
  console.log(text);
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  };
};

import { CHANGE_SEARCH_FIELD } from './types';

const initialState = {
  searchField: ''
};

export const searchRobots = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return {
        ...state,
        payload: text
      };
    default:
      return state;
  }
};

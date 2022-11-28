import { FETCH_ALL, FETCH_FLIGHT, CREATE } from '../constants/actionTypes';

export default (state = { isLoading: true, flights: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        flights: action.payload.data, 
      };
    case FETCH_FLIGHT:
      return { ...state, flight: action.payload.flight };
    case CREATE:
      return {...state, flights: [ ...state.flights,  action.payload]};
    default:
      return state;
  }
};

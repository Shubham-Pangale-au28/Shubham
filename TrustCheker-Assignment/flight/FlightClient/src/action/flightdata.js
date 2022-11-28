import { START_LOADING, END_LOADING, FETCH_ALL, FETCH_FLIGHT, CREATE } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getFlight = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchFlight(id);

    dispatch({ type: FETCH_FLIGHT, payload: { flight: data } });
  } catch (error) {
    console.log(error);
  }
};

export const getFlights = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data } } = await api.fetchFlights();

    dispatch({ type: FETCH_ALL, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createFlight = (flight, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createFlight(flight);

    dispatch({ type: CREATE, payload: data });

    history.push(`/flight/${data._id}`);
  } catch (error) {
    console.log(error);
  }
};

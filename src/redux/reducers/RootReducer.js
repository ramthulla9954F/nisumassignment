import DeviceReducer from './DeviceReducer';
import { combineReducers } from 'redux';

export const initialState = {
    layout: [],
};

export const rootReducer = combineReducers({
    page_details: DeviceReducer,
});
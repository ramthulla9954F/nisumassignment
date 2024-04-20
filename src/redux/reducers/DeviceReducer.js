import { UPDATE_SPECIFICATION, UPDATE_PAGE_SPECIFICATION } from "../actions/ActionTypes";
const INITIAL_STATE = {
  device_details: {},
  page_details: {},
};

const DeviceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SPECIFICATION:
      return { ...state, device_details: action.payload };
    case UPDATE_PAGE_SPECIFICATION:
      return { ...state, page_details: action.payload };
    default:
      return state;
  }
};

export default DeviceReducer;

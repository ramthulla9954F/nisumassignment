import { UPDATE_SPECIFICATION, UPDATE_PAGE_SPECIFICATION } from "./ActionTypes";

export const setDeviceSpecification = (spec) => {
  return {
    type: UPDATE_SPECIFICATION,
    payload: spec,
  };
};

export const setPageSpecification = (spec) => {
  return {
    type: UPDATE_PAGE_SPECIFICATION,
    payload: spec,
  };
};
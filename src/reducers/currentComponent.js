import { CURRENT_COMPONENT } from "./types";

const initialState = {
  currentComponent: "",
  sideBarMenuItemKey: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CURRENT_COMPONENT:
      return {
        ...state,
        currentComponent: action.payload.component,
        sideBarMenuItemKey: action.payload.sideBarMenuKey
      };
    default:
      return state;
  }
}

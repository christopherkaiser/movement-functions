import { UPDATE_AVATAR, MOVE_AVATAR, AvatarState, AvatarActionTypes } from "./types";

const initialState: AvatarState = {
  xPos: 0,
  yPos: 0,
}

export function AvatarReducer(
  state = initialState,
  action: AvatarActionTypes
): AvatarState {
  switch (action.type) {
    case UPDATE_AVATAR: {
      return {
        ...state,
        ...action.payload
      };
    }
    case MOVE_AVATAR: {
      return {
        xPos: state.xPos + action.payload.x,
        yPos: state.yPos + action.payload.y
      };
    }
    default:
      return state;
  }
}
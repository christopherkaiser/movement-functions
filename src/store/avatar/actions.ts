import { AvatarState, Vector, UPDATE_AVATAR, MOVE_AVATAR } from "./types";

export const updateAvatar = (newAvatar: AvatarState) => {
  return {
    type: UPDATE_AVATAR,
    payload: newAvatar
  };
}

export const moveAvatar = (newVector: Vector) => {
  return {
    type: MOVE_AVATAR,
    payload: newVector
  }
}
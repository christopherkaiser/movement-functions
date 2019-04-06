export interface AvatarState {
  xPos: number,
  yPos: number
}

export interface Vector {
  x: number,
  y: number
}

export const MOVE_AVATAR = "MOVE_AVATAR";

export const UPDATE_AVATAR = "UPDATE_AVATAR";

interface UpdateAvatarAction {
  type: typeof UPDATE_AVATAR;
  payload: AvatarState;
}

interface MoveAvatarAction {
  type: typeof MOVE_AVATAR;
  payload: Vector;
}

export type AvatarActionTypes = UpdateAvatarAction | MoveAvatarAction;
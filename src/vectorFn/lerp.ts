import {Vector2} from "./types";

export const lerp = (endVector: Vector2, t: number) => ({
  x: t * endVector.x,
  y: t * endVector.y
});


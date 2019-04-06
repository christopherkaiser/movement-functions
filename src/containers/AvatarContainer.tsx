import * as React from "react";
import {connect} from "react-redux";
import {AvatarState} from "../store/avatar/types";
import {AppState} from "../store";
import {moveAvatar} from "../store/avatar/actions";
import test from "../components/testComponent";

interface AvatarContainerProps {
  avatarState: AvatarState;
  moveAvatar: typeof moveAvatar;
  AvatarComponent: typeof React.Component;
}

export interface AvatarComponentProps {
  xPos: number;
  yPos: number;
  move: typeof moveAvatar;
}

const AvatarContainer: React.SFC<AvatarContainerProps> = ({avatarState, moveAvatar: moveFn, AvatarComponent}) => (
  <AvatarComponent 
    xPos={avatarState.xPos}
    yPos={avatarState.yPos}
    move={moveFn}
  />
);

const mapStateToProps = (state: AppState) => ({
  avatarState: state.avatar
});

export default connect(
  mapStateToProps,
  { moveAvatar }
)(AvatarContainer);
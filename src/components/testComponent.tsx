import * as React from "react";
import {AvatarComponentProps} from "../containers/AvatarContainer";
import logo from './logo.svg';

const test: React.SFC<AvatarComponentProps> = ({xPos, yPos, move}) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  </div>
);

export default test;
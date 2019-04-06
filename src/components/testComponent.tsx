import * as React from "react";
import {AvatarComponentProps} from "../containers/AvatarContainer";
import logo from './logo.svg';
import {Vector} from "../store/avatar/types";

const stylings = (xPos: number, yPos: number) => ({
  position: "absolute", 
  top: yPos,
  left: xPos
} as React.CSSProperties);

const handleKeyDown = (e: KeyboardEvent, dispatch: (v: Vector) => void) => {
  console.log("test" + e.key);
  switch(e.key){
    case "w":
      dispatch({x: 0, y: -1});
      break;
    case "a":
      dispatch({x: -1, y: 0});
      break;
    case "s":
      dispatch({x: 0, y: 1});
      break;
    case "d":
      dispatch({x: 1, y: 0});
      break;
    default:
      break;
  }
};

class test extends React.Component<AvatarComponentProps> {
  componentDidMount(){
    document.addEventListener("keydown", e => handleKeyDown(e, this.props.move))
  }
    
  render() { 
    const {xPos, yPos} = this.props;
    return(
      <div className="App" >
        <header className="App-header">
          <div style={stylings(xPos, yPos)} >
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </header>
      </div>
    );
  }
}

export default test;
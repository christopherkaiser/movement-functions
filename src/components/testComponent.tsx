import * as React from "react";
import {AvatarComponentProps} from "../containers/AvatarContainer";
import logo from './logo.svg';
import {Vector} from "../store/avatar/types";
import {lerp} from "../vectorFn/lerp";
//import { async } from "q";

const stylings = (xPos: number, yPos: number) => ({
  position: "absolute", 
  top: yPos,
  left: xPos
} as React.CSSProperties);

const moveLerp = async (endPoint: Vector, elapsedTime: number, totalTime: number, rate: number, dispatch: (v: Vector) => void) => {
  if(elapsedTime < totalTime){
    dispatch({
      x: (rate / totalTime) * endPoint.x,
      y: (rate / totalTime) * endPoint.y
    }); 

    setTimeout(
      () => moveLerp(endPoint, elapsedTime + rate, totalTime, rate, dispatch), 
      rate
    );
  }
  else{
    //dispatch(lerp(endPoint, elapsedTime / totalTime)); 
  }
}

const handleKeyDown = (e: KeyboardEvent, dispatch: (v: Vector) => void) => {
  console.log("test" + e.key);
  switch(e.key){
    case "w":
      moveLerp({x: 0, y: -500}, 0, 300, 10, dispatch);  
      //dispatch({x: 0, y: -1});
      break;
    case "a":
      moveLerp({x: -500, y: 0}, 0, 300, 10, dispatch);  
      //dispatch({x: -1, y: 0});
      break;
    case "s":
      moveLerp({x: 0, y: 500}, 0, 300, 10, dispatch);  
      //dispatch({x: 0, y: 1});
      break;
    case "d":
      moveLerp({x: 500, y: 0}, 0, 300, 10, dispatch);  
      //dispatch({x: 1, y: 0});
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
import { createStore, combineReducers, applyMiddleware, Middleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { AvatarReducer } from "./avatar/reducers";
import { createLogger } from 'redux-logger';

const rootReducer = combineReducers({
  avatar: AvatarReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {

  let middlewares = [thunkMiddleware] as Array<Middleware>;

  //if (process.env.NODE_ENV !== 'production') {
  //  middlewares.push(createLogger());
  //}

  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    middleWareEnhancer
    //composeWithDevTools(middleWareEnhancer)
  );
  
  return store;
}
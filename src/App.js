import './App.css';
import Home from './component/HomePage/Home';
import SideBar from './component/SideMenu/SideBar';
import {createContext, useReducer} from "react"
import { initialState, reducer } from "./component/State/State";
export const ReducerContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
   <>
   <div className='page'>
   <ReducerContext.Provider value={{state, dispatch}}>
    <SideBar />
    <Home />
    </ReducerContext.Provider>
   </div>
   </>
  );
}

export default App;

import './App.css'
import { PropBasics } from "./components/P1";
import { PropDestructuring } from "./components/P2";
import {PropChildren} from "./components/P3";
import {PropDrillingDemo} from "./components/P4";
import {SharedStateParent} from "./components/P5";
import {CompositionDemo} from "./components/P6";
function App() {
  return (
    <>
      {/* <PropBasics /> */}
      {/* <PropDestructuring /> */}
      {/* <PropChildren/> */}
      {/* <PropDrillingDemo/> */}
      {/* <SharedStateParent/> */}
      <CompositionDemo/>
    </>
  )
}
export default App
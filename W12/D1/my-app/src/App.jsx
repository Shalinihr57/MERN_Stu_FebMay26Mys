import { useState } from "react";
import {LoginFlow} from "./components/P1";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginFlow/>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import {FunctionName} from './components/FunctionalCompOne'
import {FunctionalComponentsBasics} from './components/FunctionalComponentsBasics'
import {ClassComponentsBasics} from './components/ClassComponentsBasics'
import {FunctionComponent} from './components/FunctionalComponentsAdv'
import {ClassComponentsState} from './components/ClassComponentsState'
function App() {
  return (
    // Fragment in react : <> </>
    <>
    {/* Component name */}
     {/*<FunctionName /> {/* Component name */}
     {/*<FunctionalComponentsBasics /> */}
     {/* <ClassComponentsBasics/> */}
     {/*<FunctionComponent/>*/}
     <ClassComponentsState/>
      </>
  )
}

export default App

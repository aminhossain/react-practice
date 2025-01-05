import { useState } from 'react'
import reactLogo from './assets/react.svg'
import CreateComponent from './components/CreateComponent';
import ComponentRendering from "./components/ComponentRendering";
import EventHandling from "./components/EventHandling";
import ReactHook from "./components/ReactHook";

function App() {
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <CreateComponent/>
        </div>
        <div className="mb-3">
          <ComponentRendering/>
        </div>
        <div className="mb-3">
          <EventHandling/>
        </div>
        <div className="mb-3">
          <ReactHook/>
        </div>
      </div>
    </>
  )
}

export default App

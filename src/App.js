import React, { useEffect } from 'react'
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./store"
import VideosContainer from './components/VideosContainer/VideosContainer'

import Header from './components/Header/Header'
import './App.scss'

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Header/>
          <VideosContainer/>
        </div>
      </PersistGate>
    </Provider>
  );
  
}

export default App;

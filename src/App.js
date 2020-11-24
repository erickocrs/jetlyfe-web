import React, { useEffect } from 'react'
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./store"
import VideosContainer from './components/VideosContainer/VideosContainer'

import Header from './components/Header/Header'
import './App.scss'
import MyAccount_Modal from 'components/MyAccount_Modal/MyAccount_Modal'

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Header/>
          <VideosContainer/>
          <MyAccount_Modal/>
        </div>
      </PersistGate>
    </Provider>
  );
  
}

export default App;

import React, { useEffect } from 'react'
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./store"
import VideosContainer from './components/VideosContainer/VideosContainer'

import Header from './components/Header/Header'
import './App.scss'

import Modal_MyAccount from 'components/Modal_MyAccount/Modal_MyAccount'
import Modal_NewVideo from 'components/Modal_NewVideo/Modal_NewVideo'
import Modal_Login from 'components/Modal_Login/Modal_Login'
import Modal_Register from 'components/Modal_Register/Modal_Register'

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Header/>
          <VideosContainer/>
          
          <Modal_MyAccount/>
          <Modal_NewVideo/>
          <Modal_Login/>
          <Modal_Register/>
        </div>
      </PersistGate>
    </Provider>
  );
  
}

export default App;

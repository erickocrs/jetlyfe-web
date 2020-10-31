import React, { useEffect } from 'react'
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./store"
import ScrollSauce from './components/ScrollSauce/ScrollSauce'

import logo from './logo.svg'
import './App.scss'
import VideoList from './components/VideoList/VideoList'
import Header from './components/Header/Header'

function App() {
  
  let currentVideoPlaying = false;
  const setCurrentVideoPlaying = (newVideo) => {currentVideoPlaying = newVideo;}
  const getCurrentVideoPlaying = () => {return currentVideoPlaying;}
  
  let currentListPlaying = false;
  const setCurrentListPlaying = (newList) => {currentListPlaying = newList;}
  const getCurrentListPlaying = () => {return currentListPlaying;}


  let isDown = false;
  let startX;
  let startY;
  let scrollLeft;
  let scrollTop;
  
  let pos = { top: 0, left: 0, x: 0, y: 0 };
  
  const [activeClass, setActiveClass] = React.useState(null);
  
  const [containerScrollTop, setContainerScrollTop] = React.useState(0);  
  const [containerScrollLeft, setContainerScrollLeft] = React.useState(0);

  const handlerMouseLeave = () =>{
    isDown = false;
    //slider.classList.remove('active'); 
    setActiveClass(false);
  }  

  const mouseMoveHandler = function(e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    // Scroll the element
    //ele.scrollTop = pos.top - dy;
    setContainerScrollTop(pos.top - dy);
    //ele.scrollLeft = pos.left - dx;
    setContainerScrollLeft(pos.left - dx);
};

  const mouseDownHandler = function(e) {
    pos = {
        // The current scroll 
        left: containerScrollLeft,
        top: containerScrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    //document.addEventListener('mouseup', mouseUpHandler);
};


const containerScrollHandler = (e) => {
  setContainerScrollTop(e.target.scrollTop);
  setContainerScrollLeft(e.target.scrollLeft);

}

  let videoListFunctions = {
    setCurrentVideoPlaying ,
    getCurrentVideoPlaying ,
    setCurrentListPlaying ,
    getCurrentListPlaying 
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Header/>
          <div
          className={`container`}>
            <ScrollSauce
              vertical={false}
              horizontal={true}>
                <div
                className={`container-lists`}>
                  <VideoList {...videoListFunctions}></VideoList>
                  <VideoList {...videoListFunctions} selected></VideoList>
                  <VideoList {...videoListFunctions}></VideoList>
                  <VideoList {...videoListFunctions}></VideoList>
                  <VideoList {...videoListFunctions}></VideoList>
                </div>
            </ScrollSauce> 
          </div>
        </div>
      </PersistGate>
    </Provider>
  );
  
}

export default App;


import React from 'react';
import ScrollSauce from '../ScrollSauce/ScrollSauce'
import VideoList from '../VideoList/VideoList'

const VideosContainer = () => {

    let currentVideoPlaying = false;
    const setCurrentVideoPlaying = (newVideo) => {currentVideoPlaying = newVideo;}
    const getCurrentVideoPlaying = () => {return currentVideoPlaying;}
    
    let currentListPlaying = false;
    const setCurrentListPlaying = (newList) => {currentListPlaying = newList;}
    const getCurrentListPlaying = () => {return currentListPlaying;}
  
    let videoListFunctions = {
      setCurrentVideoPlaying ,
      getCurrentVideoPlaying ,
      setCurrentListPlaying ,
      getCurrentListPlaying 
    }

    return (
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
    )
}

export default VideosContainer;
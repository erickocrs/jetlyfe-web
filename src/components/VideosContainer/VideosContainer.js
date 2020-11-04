
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

    React.useEffect(() => {
      
      loadVideosLists();

      return () => {
        //cleanup
      }
    }, []);

    const [videosLists, setVideosLists] = React.useState([]);

    const loadVideosLists = () => {
      fetch('/sampleData.json')
      .then(function(response) {
        response.json().then(data => {

          setVideosLists(data.lists);
          // do something with your data
          console.log(data);
        });
      })
    }

    return (
        <div
        className={`container`}>
          <ScrollSauce
            vertical={false}
            horizontal={true}>
              <div
              className={`container-lists`}>
                { videosLists.map((videoList, i) => {
                  return (
                    <VideoList
                      {...videoListFunctions}
                      videoListArray={videoList}
                      selected={i === 1 ? true : false }/>
                  );
                }) }
              </div>
          </ScrollSauce>
        </div>
    )
}

export default VideosContainer;
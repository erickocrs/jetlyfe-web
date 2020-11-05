
import React from 'react';
import styled from 'styled-components'
import ScrollSauce from '../ScrollSauce/ScrollSauce'
import VideoList from '../VideoList/VideoList'
import './VideosContainer.scss';

const VideosContainer = () => {

  const [videosLists, setVideosLists] = React.useState([]);
  const [containerWidth, setContainerWidth] = React.useState(null);

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

    React.useEffect(() => {
      let newWidth = 0;
      videosLists.map((item, i) => {
        if(
          item.reference &&
          item.reference.current &&
          item.reference.current.videoList &&
          item.reference.current.videoList.current &&
          item.reference.current.videoList.current.clientWidth )
        {
          newWidth += item.reference.current.videoList.current.clientWidth;
        }
      });
      setContainerWidth(newWidth);
    }, [videosLists]);

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
              <Container
              width={containerWidth}
              className={`container-lists`}>
                { videosLists.map((videoList, i) => {
                  let videoListRef = React.createRef();
                  videoList.reference = videoListRef;
                  return (
                    <VideoList
                      ref={videoListRef}
                      {...videoListFunctions}
                      videoListArray={videoList}
                      selected={i === 1 ? true : false }/>
                  );
                })} 
              </Container>
          </ScrollSauce>
        </div>
    )
}

const Container = styled.div`
  width:${(props) => props.width ? props.width + "px": "20000vw"}
`;

export default VideosContainer;
import React, { Component } from 'react'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import ScrollSauce from '../ScrollSauce/ScrollSauce'
import './VideoList.scss'
import styled from 'styled-components'

class VideoList extends Component {
        
    videoList = React.createRef();
    playing = false;
    state = {
        selectedClass : ""
    }
    
    constructor(props){
        super(props);
        if(props.selected === true)
        { this.setSelected(true); }
        console.log(props);
    }

    setSelected(isConstructing){                

        //If is Creating List
        if(isConstructing === true)
        {
            this.state.selectedClass = "selected-video-list";      
        }
        //Updating List
        else {
            let currentList = this.props.getCurrentListPlaying();
            if(currentList)
            {
                currentList.unsetSelect();
            }
            this.setState({selectedClass : "selected-video-list"})      
        }
        
        //Set currentList
        this.props.setCurrentListPlaying(this);
    }
    
    unsetSelect(){  
        this.setState({selectedClass : ""}) 
    }
    
    render(){
        return (        
            <div className={ "videolist " +  this.state.selectedClass }>      
                <ScrollSauce
                    vertical={true}
                    horizontal={false}>         
                    <div ref={this.videoList}  className="videolist-box">
                        { this.props.videoListArray ? this.props.videoListArray.list.map((videoItem,i) => {
                            return (
                            <VideoPlayer 
                                {...this.props}
                                videoList={ this }
                                videoTitle={videoItem.videoTitle}
                                videoUrl={videoItem.videoUrl}
                                videoPosterUrl={videoItem.videoPosterUrl}
                                views={videoItem.views}/>
                            )})
                        : null }
                    </div>   
                    <h3 className="video-list-title">#trance</h3>
                </ScrollSauce>
            </div>
        );
    }
};

export default VideoList;
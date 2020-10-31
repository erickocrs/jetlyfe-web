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
        console.log("this");
        console.log(props);

        if(props.selected === true)
        {
            this.setSelected(true);
        }
    }

    setSelected(isConstructing){                

        //If is Creating List
        if(isConstructing === true) {
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
                        <VideoPlayer 
                            {...this.props}
                            videoList={ this }
                            videoUrl="./videos/21 Savage - Bank Account (Official Audio).mp4"           
                            videoPosterUrl="./videos/21 Savage - Bank Account (Official Audio).png" >                                    
                        </VideoPlayer>
                        <VideoPlayer 
                            {...this.props}
                            videoList={ this }
                            videoUrl="./videos/Alpha Blondy - Coco de Rasta.mp4"      
                            videoPosterUrl="./videos/cocoderasta.png"                            
                        ></VideoPlayer>
                        <VideoPlayer 
                            {...this.props}
                            videoList={ this }
                            videoUrl="./videos/y2mate.com - PSY-TRANCE ◉ KOVA & Coblan - Barabana_c2pz71qnTmQ_1080p.mp4"          
                        ></VideoPlayer>
                        <VideoPlayer 
                            {...this.props}
                            videoList={ this }
                            videoUrl="./videos/Marcelo D2 - 1967.mp4"                    
                        ></VideoPlayer>
                        <VideoPlayer 
                            {...this.props}
                            videoList={ this }
                            videoUrl="./videos/21 Savage - Bank Account (Official Audio).mp4"           
                            videoPosterUrl="./videos/21 Savage - Bank Account (Official Audio).png" >                                    
                        </VideoPlayer>
                        <VideoPlayer 
                            {...this.props}
                            videoList={ this }
                            videoUrl="./videos/Alpha Blondy - Coco de Rasta.mp4"      
                            videoPosterUrl="./videos/cocoderasta.png"                            
                        ></VideoPlayer>
                        <VideoPlayer 
                            {...this.props}
                            videoList={ this }
                            videoUrl="./videos/y2mate.com - PSY-TRANCE ◉ KOVA & Coblan - Barabana_c2pz71qnTmQ_1080p.mp4"          
                        ></VideoPlayer>
                        <VideoPlayer 
                            {...this.props}
                            videoList={ this }
                            videoUrl="./videos/Marcelo D2 - 1967.mp4"                    
                        ></VideoPlayer>
                    </div>   
                    <h3 className="video-list-title">#trance</h3>
                </ScrollSauce>
            </div>
        );
    }
};

export default VideoList;
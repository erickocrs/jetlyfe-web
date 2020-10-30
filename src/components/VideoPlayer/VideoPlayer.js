import React, { Component } from 'react';
import './VideoPlayer.scss';
import { VideoShadow } from './VideoPlayer.styles.js';
import styled from 'styled-components'
import enableInlineVideo from 'iphone-inline-video';

class VideoPlayer extends Component {
        
    videoTag = React.createRef();
    videoEl = React.createRef();
    playing = false;

    constructor(props) {
        super(props);
        this.state = {
            previewStatus: true
        };
    }

    videoClickHandler = (e) => {
        e.preventDefault(); 

        //PLAY
        if(this.playing === false){            

            this.setState({previewStatus:false});
            console.log("this.state1" , this.state);
            let currentVideo = this.props.getCurrentVideoPlaying();
            let oldVideoList = this.props.videoList.videoList.current;
            this.props.videoList.setSelected();
            
            if(currentVideo)
            {
                currentVideo.videoEl.current.pause();
                currentVideo.playing = false;
            }

            this.videoEl.current.play();
            this.props.setCurrentVideoPlaying(this);
            this.playing = true;
            console.log("this.state1.2" , this.state);
        }
        //PAUSE
        else
        {
            this.setState({previewStatus:true});
            console.log("this.state2" , this.state);
            this.videoEl.current.pause();
            this.props.setCurrentVideoPlaying(null);
            this.playing = false;
        }
    }

    

    render(){
        return (
            <div
                ref={this.videoTag}
                className="video"
                onClick={this.videoClickHandler}>
                <video
                    ref={this.videoEl}
                    src={process.env.PUBLIC_URL + this.props.videoUrl}
                    className="video-player"
                    playsinline
                    controls="false">
                </video>
                { this.props.videoPosterUrl ?
                    <img
                        className={`video-preview ${ this.state.previewStatus ? "previewOn" : ""}`}
                        src={process.env.PUBLIC_URL + this.props.videoPosterUrl}/>
                : null }
                <VideoShadow shadowOn={this.state.previewStatus}/>
                <div className="video-list-description">                    
                    <h4 className="video-title">21 Savage - Bank Account</h4>
                    <h5 className="video-views">10 visualizações</h5>
                    <div className="btn-like">
                    </div>
                    <div className="btn-comment">
                    </div>
                    <div className="btn-play">
                    </div>                        
                </div>                
            </div>
        )
    }
};

export default VideoPlayer;
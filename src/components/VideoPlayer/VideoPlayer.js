import React, { Component } from 'react';
import './VideoPlayer.scss';
import styled from 'styled-components'
import VideoImagePreview from './VideoImagePreview/VideoImagePreview';
import VideoPreLoader from './VideoPreLoader/VideoPreLoader';

class VideoPlayer extends Component {
        
    videoTag = React.createRef();
    videoEl = React.createRef();
    playing = false;

    constructor(props) {
        super(props);
        this.state = {
            previewStatus: true,
            videoStatus: false,
            boxRatio : null,
            teste : "0"
        };
    }

    isInFullScreen = () => {
        let isFullScreen = false;
        /*
        if( window.innerHeight == window.screen.height)
        {
            isFullScreen = true;
        }
        */
        if(document.fullscreenElement)
        {
            isFullScreen = true;
        }
        return isFullScreen;
    }

    playVideo = (data) => {
        this.setState({previewStatus:false, videoStatus:true});
        
        let currentVideo = this.props.getCurrentVideoPlaying();
        let oldVideoList = this.props.videoList.videoList.current;
        this.props.videoList.setSelected();
        if(currentVideo)
        {
            currentVideo.videoEl.current.pause();
            currentVideo.playing = false;
        }
        if(!data || (data && !data.alredyFullScreen))
        {
            this.videoEl.current.play();
        }
        this.props.setCurrentVideoPlaying(this);
        this.playing = true;
        document.title = "jLyfe ♬ " + this.props.videoTitle;
    }

    pauseVideo = (data) => {
        if(!data || (data && !data.alredyFullScreen))
        {
            this.setState({previewStatus:true, videoStatus:false});
            this.videoEl.current.pause();
        }
        else
        {            
            this.setState({previewStatus:true, videoStatus:true});
        }
        this.props.setCurrentVideoPlaying(null);
        this.playing = false;
    }

    videoOnCanPlayHandler = (a,b,c) => {
        const video = this.videoEl.current;
        if(video)
        {
            let newBoxRatio = video.videoHeight/ video.videoWidth ;
            this.setState({boxRatio : newBoxRatio});
        }        
    }

    videoOnPlayHandler = () => {
        if(this.isInFullScreen())
        {
            this.playVideo({alredyFullScreen : true})
        }
    }

    videoOnPauseHandler = () => {
        if(this.isInFullScreen())
        {
            this.pauseVideo({alredyFullScreen : true})
        }
    }

    doubleTap = false;
    fullScreenMode = false;
    videoClickHandler = (e) => {
        e.preventDefault();

        if(!this.isInFullScreen())//If is not in full screen any more
        {
            this.fullScreenMode = false;
        }
        
        if(!this.fullScreenMode) 
        {
            if(!this.doubleTap)
            {
                //PLAY
                if(this.playing === false)
                { this.playVideo(); }
                //PAUSE
                else
                { this.pauseVideo(); }
                
                this.doubleTap = true;
                const _this = this;
                setTimeout(() => {
                    _this.doubleTap = false;
                },500);
                
            }            
            else//If is DoubleTap
            {
                this.doubleTap = false;            
                const video = this.videoEl.current;                 
                if (video.enterFullscreen)
                {
                    video.enterFullscreen();
                }
                else if (video.webkitEnterFullscreen)
                {
                    video.webkitEnterFullscreen();
                }
                this.fullScreenMode = true;
                this.playVideo({goingToFullScreen: true});
                
                const _this = this;
                document.addEventListener("fullscreenchange", () => {_this.exitFullScreenMode()});
                document.addEventListener("mozfullscreenchange", () => {_this.exitFullScreenMode()});
                document.addEventListener("webkitfullscreenchange", () => {_this.exitFullScreenMode()});
                document.addEventListener("webkitendfullscreen", () => {_this.exitFullScreenMode()});
                video.addEventListener("fullscreenchange", () => {_this.exitFullScreenMode()});
                video.addEventListener("mozfullscreenchange", () => {_this.exitFullScreenMode()});
                video.addEventListener("webkitfullscreenchange", () => {_this.exitFullScreenMode()});
                video.addEventListener("webkitendfullscreen", () => {_this.exitFullScreenMode()});
            }
        }
    }

    exitFullScreenMode = () => {
        
        if(this.fullScreenMode)
        {
            this.fullScreenMode=false;
            if(!this.isInFullScreen())//If is not in full screen any more
            {
                this.pauseVideo();
                console.log(this.videoEl.current.paused);
                document.removeEventListener('fullscreenchange', () => {this.exitFullScreenMode()});
                document.removeEventListener('mozfullscreenchange', () => {this.exitFullScreenMode()});
                document.removeEventListener('webkitfullscreenchange', () => {this.exitFullScreenMode()});
                document.removeEventListener('webkitendfullscreen', () => {this.exitFullScreenMode()});              
                const video = this.videoEl.current;   
                video.removeEventListener('fullscreenchange', () => {this.exitFullScreenMode()});
                video.removeEventListener('mozfullscreenchange', () => {this.exitFullScreenMode()});
                video.removeEventListener('webkitfullscreenchange', () => {this.exitFullScreenMode()});
                video.removeEventListener('webkitendfullscreen', () => {this.exitFullScreenMode()});
            }
        }
    }
    
    render(){
        return (
            <VideoBox
                className="video-box"
                onClick={this.videoClickHandler}
                boxRatio={this.state.boxRatio}>
                <VideoPreLoader/>
                <video
                    ref={this.videoEl}
                    src={process.env.PUBLIC_URL + this.props.videoUrl}
                    className={`
                        video-player
                        ${ this.state.videoStatus ? "" : "video-status-off" }`}
                    preload="auto"
                    webkit-playsinline="true"
                    playsinline="true"
                    playsInline={true}
                    onCanPlay={this.videoOnCanPlayHandler}
                    onPlay={this.videoOnPlayHandler}
                    onPause={this.videoOnPauseHandler}
                    onfullscreenchange={this.exitFullScreenMode}
                    onmozfullscreenchange={this.exitFullScreenMode}
                    onwebkitfullscreenchange={this.exitFullScreenMode}
                    onwebkitendfullscreen={this.exitFullScreenMode}
                    >
                </video>                
                <VideoImagePreview
                    previewOn={this.state.previewStatus}
                    videoPosterUrl={this.props.videoPosterUrl}/>
                <VideoShadow
                    className="video-shadow"
                    shadowOn={this.state.previewStatus}/>
                <VideoDescription
                    className={`video-list-description ${ this.state.previewStatus ? "" : "description-off" }`}>
                    <h4 className="video-title">{this.props.videoTitle}</h4>
                    <h5 className="video-views">{this.props.views} visualizações</h5>
                    <div className="btn-like"></div>
                    <div className="btn-comment"></div>
                    <div className="btn-play"></div>                        
                </VideoDescription>
            </VideoBox>
        )
    }
};

const VideoDescription = styled.div``;

const VideoBox = styled.div`
    padding-bottom:${ props => (props.boxRatio ? (( props.boxRatio * 100 ) + "%") : "56.25%" ) };
`;

const VideoShadow = styled.div`
    opacity:${props => props.shadowOn? 1: 0};
`;
export default VideoPlayer;
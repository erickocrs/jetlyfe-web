import React, { Component } from 'react';
import './VideoPlayer.scss';
import { VideoShadow } from './VideoPlayer.styles.js';

class VideoPlayer extends Component {
        
    videoTag = React.createRef();
    videoEl = React.createRef();
    playing = false;    
    

    videoClickHandler = (e) => {
        e.preventDefault(); 

        //PLAY
        if(this.playing === false){            

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

            console.log(this.videoTag.current.scrollTop);
            console.log(this.videoTag.current.scrollLeft);

            let _this = this;//kraicuzao
            this.props.videoList.videoList.current.scrollTop = this.videoTag.current.offsetTop;
            //this.videoTag.current.scrollIntoView({behavior: 'smooth'});
            console.log("this.props.getCurrentListPlaying().videoList.current", this.props.getCurrentListPlaying().videoList);
            console.log("oldVideoList",oldVideoList);
            if(oldVideoList !== this.props.getCurrentListPlaying().videoList) {
                console.log('dif');
                const animaScroll2 = (i) => {
                    setTimeout(()=> {
                        i++;
                        if(i < 4){
                            this.props.videoList.videoList.current.scrollTop = this.videoTag.current.offsetTop;
                            animaScroll2(i);
                        }
                    },100);
                };            
                animaScroll2(0);
            }

            /*
            let currentTop;
            let currentOffSetTop;
            let xTop;
            let isAnimating = true;

            
            const animaScroll = (i, init) => {
                        
                if(init)
                {
                    console.log("INIT");
                    currentTop = this.props.videoList.videoList.current.scrollTop;
                    currentOffSetTop = this.videoTag.current.offsetTop;

                    if(currentTop > currentOffSetTop)
                    {xTop = currentTop - currentOffSetTop}
                    else
                    {xTop = currentOffSetTop - currentTop}
                    
                }
                
                console.log("currentTop\n", currentTop)
                console.log("currentOffSetTop\n", currentOffSetTop)
                console.log("xTop\n", xTop)
            

                if(i <= 100){
                    setTimeout(function(){
                        _this.props.videoList.videoList.current.scrollTop = currentTop + ( xTop * (i/100) );
                        i = i  + 1;
                        if(_this.props.videoList.videoList.current.scrollTop != (currentTop + xTop))
                        {
                            animaScroll(0, true);    
                        }
                        animaScroll(i, false);
                    },30);
                }
                else if(currentOffSetTop != this.videoTag.current.offsetTop)
                {
                    animaScroll(0, true);
                }
            }

            animaScroll(0, true);            
            console.log(this.videoTag.current.offsetTop);
            */

        }
        //PAUSE
        else
        {
            this.videoEl.current.pause();
            this.props.setCurrentVideoPlaying(null);
            this.playing = false;
        }
    }

    render(){
        return (
            <div
            ref={this.videoTag} className="video" onClick={this.videoClickHandler}
            

            >
                <video ref={this.videoEl} className="video-player" constrols="false">
                    <source src={process.env.PUBLIC_URL + this.props.videoUrl} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <VideoShadow/>
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
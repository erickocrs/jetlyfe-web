import React, { Component } from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import './VideoList.scss';
import App from '../../App';
import ScrollContainer from 'react-indiana-drag-scroll'

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
        if(isConstructing === true)
        {
            this.state.selectedClass = "selected-video-list";      
        }
        //Updating List
        else
        {
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
            <ScrollContainer
                className="scroll-container"
                horizontal={false}
                hideScrollbars={false}
                activationDistance={1}>         
                <div ref={this.videoList}  className="videolist-box">
                        <VideoPlayer 
                            {...this.props}
                            videoList={ this }
                            videoUrl="./videos/21 Savage - Bank Account (Official Audio).mp4"           
                            videoPosterUrl="./videos/21 Savage - Bank Account (Official Audio).png"
                        ></VideoPlayer>
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
                            videoUrl="./videos/Ice Mob - Alaska (ft. Duk, Lil Kyzzar) Prod.IlluzionOnTheBeat.mp4"                    
                        ></VideoPlayer>  
                        <VideoPlayer 
                            {...this.props}
                            videoList={ this }
                            videoUrl="./videos/Chorão & Sabotage - Cantando pro Santo [ETERNOS].mp4"                    
                        ></VideoPlayer>
                        <VideoPlayer 
                            {...this.props}
                            videoList={ this }
                            videoUrl="./videos/Gil Scott Heron - We almost Lost Detroit.mp4"                    
                        ></VideoPlayer>
                        <VideoPlayer 
                            {...this.props}
                            videoList={ this }
                            videoUrl="./videos/Chorão & Sabotage - Cantando pro Santo [ETERNOS].mp4"                    
                        ></VideoPlayer>
                        <VideoPlayer 
                            {...this.props}
                            videoList={ this }
                            videoUrl="./videos/Swae Lee - Hurt To Look (Audio) ft. Rae Sremmurd.mp4"                    
                        ></VideoPlayer>   
                </div>   
                <h3 className="video-list-title">#trance</h3>
                    </ScrollContainer>               
            </div>   
        );
    }
};

export default VideoList;
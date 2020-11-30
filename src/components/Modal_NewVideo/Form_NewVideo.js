import React from "react";
import styled from "styled-components";
import Button from "components/_Elements/Button/Button"
import Input from "components/_Elements/Input/Input"
import Validation from '../../utils/Validation';
import API from "services/API";
import { useToast } from "components/Toast/Toast"

export const Form_NewVideo = () => {
    const toast = useToast();

    const [videoData, setVideoData] = React.useState({
        title : { value : "", init : true, validation : Validation.usernameValidation },
        videoFile : { value : null, init : true, validation : Validation.usernameValidation },
        customUrlTitle : { value : "", init : true, validation : Validation.usernameValidation },
        description : { value : "", init : true, validation : Validation.usernameValidation },
        tagList : { value : [], init : true, validation : Validation.usernameValidation },
    });
    
    const handleFormChange = (e) => {
        setVideoData({
                 ...videoData,
                [e.target.name] : { ...videoData[e.target.name], value : e.target.value, init : false }
             }
        );
     }

    const handleClickSaveVideo = () => {
        toast("Test message");

        let newVideoData = videoData;
        Object.entries(videoData).map(([key, value]) => {
            newVideoData = {...newVideoData, [key] : { ...value, init : false } };
        });

        let validated = true;
        Object.entries(newVideoData).map(([key, value]) => {
            if(newVideoData[key].validation(value) === false) {
                validated = false;
            }
        });

        setVideoData(newVideoData);

        if(validated)
        {    
            const APIData = {
                film : {
                    title : videoData.title.value,
                    videoUrl : videoData.videoFile.value,
                    videoCustomUrlTitle : videoData.customUrlTitle.value,
                    description : videoData.description.value,
                    tagList : videoData.tagList.value
                }
            }

            API.post("/films", APIData)
            .then((response) => {
                console.log("response", response);
            });
        }
        else
        {
            return false;
        }        
    }

    return (
        <Form>
            <Input
                label="Title"
                type="text"
                name="title"
                value={videoData.title}
                onChange={handleFormChange}/>
            <Input
                label="Video"
                type="file"
                name="videoFile"
                value={videoData.videoFile}
                onChange={handleFormChange}/>
            <Input
                label="Custom Url Title"
                type="text"
                name="customUrlTitle"
                value={videoData.customUrlTitle}
                onChange={handleFormChange}/>
            <Input
                label="Description"
                type="text"
                name="description"
                value={videoData.description}
                onChange={handleFormChange}/>
            <Input
                label="Tag List"
                type="text"
                name="tagList"
                value={videoData.tagList}
                onChange={handleFormChange}/>
            <Button
                onClick={handleClickSaveVideo}>
                Save
            </Button>
        </Form>
    );
}

const Form = styled.div`
    position:relative;
    width:100%;
    max-width:600px;
    height:auto;
    padding:10px;

    color:#ffffff;
    background:rgba(30,30,30,1);
    
    border-radius:5px;

    box-sizing:border-box;
    padding:30px;
`;

export default Form_NewVideo;
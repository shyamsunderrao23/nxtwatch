import ReactPlayer from "react-player"
import {AiOutlineLike , AiOutlineDislike} from "react-icons/ai"
import {BiListPlus} from "react-icons/bi"
import ThemeAndVideoContext from "../../context/ThemeandVideoContext"

import {
    videoPlayer,
    playVideoTitle,
    playVideoStatus,
    playVideoStatusContainer,
    playVideoDot,
    playSocialButtonsContainer,
    SocialButton,
    ButtonText,
    HrLine,
    channelImage,
    channelContainer,
    channelInfo,
    channelName,
    channelSubscribes,
    channelDescription,
    BtnContainer,
} from "./StyledComponent"


const PlayVideoView = props => {
    const {
        videoDetails,
        isLiked,
        isDisLiked,
        clickLiked,
        clickDisLiked
    } = props

    const onClickLike = () => {
        clickLiked()
    }

    const onClickDisLike = () => {
        clickDisLiked()
    }

    return(
        <ThemeAndVideoContext.Consumer>
            {value => {
                const {isDarkTheme , addVideo , savedVideos} = value
                const textColor = isDarkTheme ? "#64748b" : "#231f20"
                let isSaved 
                const index = savedVideos.findIndex(
                    eachVideo => eachVideo.id === videoDetails.id,
                )

                if (index === -1){
                    isSaved = false
                }
                else{
                    isSaved = true
                }

                const saveIconColor = isSaved ? "#2563eb" : textColor

                const onClickSave  = () => {
                    addVideo(videoDetails)
                }

                return(
                    <videoPlayer>
                        <ReactPlayer url = {videoDetails.videoUrl} controls width = "100%"/>
                        <playVideoTitle>
                          {videoDetails.title}
                        </playVideoTitle>
                        <playVideoStatusContainer>
                            <playVideoStatus color = {textColor}>
                                {videoDetails.viewCount} views
                                <playVideoDot>&#8226;</playVideoDot>
                                {videoDetails.publishedAt}
                            </playVideoStatus>
                        </playVideoStatusContainer>
                        <BtnContainer>
                            <SocialButton
                            type = "button"
                            color = {isLiked ? "#2563eb" : "#64748b"}
                            onClick = {onClickLike}
                            >
                                <AiOutlineLike size = {25}/>
                                <ButtonText>Like</ButtonText>
                            </SocialButton>
                        </BtnContainer>
                        <BtnContainer>
                            <SocialButton
                            type = "button"
                            color = {isDisLiked ? "#2563eb" : "#64748b"}]
                            onClick = {onClickDisLike}
                            >
                                <AiOutlineDisLike size = {25}/>
                                <ButtonText>Dislike</ButtonText>
                            </SocialButton>
                        </BtnContainer>
                        <BtnContainer>
                            <SocialButton
                            type = "button"
                            onClick = {onClickSave}
                            color = {saveIconColor}
                            >
                                <BiListPlus size = {25}/>
                                <ButtonText>{isSaved </ButtonText>
                            </SocialButton>
                        </BtnContainer>
                    </videoPlayer>
                )
            }}
        </ThemeAndVideoContext.Consumer>
    )
}
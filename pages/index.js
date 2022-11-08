import myconfig from "../myconfig.json";
import styled from "styled-components";
import { CSSreset } from "../src/components/CSSreset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/TimeLine";

function HomePage(){
    return (
        <>
            <CSSreset/>
            <div>
                <Menu/>
                <Header/>
                <TimeLine playlists={myconfig.playlists}/>
            </div>
        </>
    );
}

export default HomePage

const StyledHeader = styled.section`
    img {
        width: 1512px;
        height: 230px;    
    }

    .userInfor {
        display: flex;
        align-items: center;
        gap: 11px;
    }
    
    .userInfor img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    
    .userInforTxt h1, p{
        margin: 0;
    }
`

function Header(){
    return (
        <StyledHeader>
            <img src={myconfig.banner}></img>
            <div className="userInfor">
                <img src={`https://github.com/${myconfig.github}.png`}></img>
                <div className="userInforTxt">
                    <h1>{myconfig.name}</h1>
                    <p>{myconfig.job}</p>
                </div>
            </div>
        </StyledHeader>
    );
}

function TimeLine(props){
    const playlistNames = Object.keys(props.playlists)
    return(
        <StyledTimeline>
            {playlistNames.map((playlistName)=>{
                const videos = props.playlists[playlistName]
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video)=> {
                                return (
                                    <a href={video.url} target="_blank">
                                        <img src={video.thumb}></img>
                                        <span>
                                            {video.title}
                                        </span>                
                                    </a>
                                )}
                            )}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    );
}
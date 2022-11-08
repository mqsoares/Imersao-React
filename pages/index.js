import React from "react";
import myconfig from "../myconfig.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { CSSreset } from "../src/components/CSSreset";
import { StyledTimeline } from "../src/components/TimeLine";

function HomePage(){
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    return (
        <>
            <CSSreset/>
            <div>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header/>
                <TimeLine searchValue={valorDoFiltro} playlists={myconfig.playlists}/>
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
const StyledBanner = styled.div`
    background-image: url(${myconfig.banner});
    height: 250px;
`;

function Header(){
    return (
        <StyledHeader>
            <StyledBanner/>
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

function TimeLine({ searchValue, ...props }){
    const playlistNames = Object.keys(props.playlists)
    return(
        <StyledTimeline>
            {playlistNames.map((playlistName)=>{
                const videos = props.playlists[playlistName]
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos
                                .filter((video) => {
                                    const titleNormalized = video.title.toLowerCase();
                                    const searchValueNormalized = searchValue.toLowerCase();
                                    return titleNormalized.includes(searchValueNormalized)
                                })
                            
                                .map((video)=> {
                                    return (
                                        <a key={video.url} href={video.url} target="_blank">
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
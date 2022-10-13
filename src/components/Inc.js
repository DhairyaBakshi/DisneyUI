import React from 'react';
import styled from 'styled-components';

function Inc() {
  return (
    <Container>
      <Background>
          <img src="/images/Inc.jpg" />
      </Background>
      <ImageTitle>
          <img src="/images/IN.jpg" />
      </ImageTitle>
      <Controls>
            <PlayButton>
                <img src="/images/play-icon-black.png"/>
                <span><b>PLAY</b></span>
            </PlayButton>
            <TrailerButton>
                <img src="/images/play-icon-white.png"/>
                <span><b>Trailer</b></span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupWatchButton>
            <img src="/images/group-icon.png"/>
                <span></span>
            </GroupWatchButton>
      </Controls>
      <SubTitle>
          1Hr 55min ·2004 ·Animation ·U  
      </SubTitle>
      <Description>
      Forced to adopt a civilian identity and stuck in a white-collar job, 
      Mr Incredible itches to get back into action. 
      When he is lured into a trap by the evil Syndrome, 
      his family contrives to save him.
      </Description>
    </Container>
  );
}

export default Inc;

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: realtive;

`
const Background = styled.div`
position: fixed;
top:0;
left: 0;
bottom: 0;
right: 0;
z-index:-1;
opacity: 0.8;

img{
    width: 100%;
    height: 100;
    object-fit: cover;    
}
`
const ImageTitle = styled.div`
height:30vh;
min-height: 170px;
min-width:200px;
width:35vw;
margin-top:20px;

img {
    height:100%;
    width:100%;
    object-fit: contain;
}
`
const Controls = styled.div`
display:flex;
align-item: center;
padding:20px;

`
const PlayButton = styled.button`
border-radius:4px;
font-size:15px;
padding:0px 24px;
margin-right: 20px;
display:flex;
align-items:center;
background:rgb (249, 249, 249);
border: none;
letter-spacing: 1.8px;
cursor:pointer;
&:hover{
    background: rgb(198, 198, 198);
}
`
const TrailerButton = styled(PlayButton)`
background:rgba(0, 0, 0, 0.3);
border: 1px solid rgb(249, 249, 249);
color:rgba(249, 249, 249);
text-transform: uppercase;

`
const AddButton = styled.button`
margin-right:16px;
width:44px;
height:44px;
display:flex;
align-itme: center;
justify-content:center;
border-radius:50%;
border: 2px solid white;
background-color: rgba(0, 0, 0, 0.6);
span{
    font-size: 33px;
    color:white;
}
cursor:pointer;
`
const GroupWatchButton = styled(AddButton)`
background-color: rgba(0, 0, 0);
cursor:pointer;
`

const SubTitle = styled.div`
color: rgb(249,249,249);
font-size: 15px;
min-height: 20px;
margin-top: 26px;


`
const Description = styled.div`
line-height: 1.4;
font-size:20px;
margin-top:16px;
color: rgba(249, 249, 249);
max-width: 500px;

`

import React from 'react';
import styled from 'styled-components';



function Header() {
  return (
    <Nav>
    <Logo src="../images/logo.svg" alt= "Logo" />
    <NavMenu>
    <a href="/home">
                <img src="/images/home-icon.svg" alt= "Home"/>
            <span >HOME</span>
            </a>
            <a>
                <img src="/images/search-icon.svg" alt= "Search"/>
            <span>Search</span>
            </a>  
            <a>
                <img src="/images/watchlist-icon.svg" alt= "WatchList" />
            <span>WATCHLIST</span>
            </a>            
            <a href ="http://localhost:3000/Originals" >
                <img src="/images/original-icon.svg" alt= "Originals"/>
            <span>ORIGINALS</span>
            </a>            
            <a href ="http://localhost:3000/Movies" >
                <img src="/images/movie-icon.svg" alt="Movies" />
            <span>MOVIES</span>
            </a>
            <a href ="http://localhost:3000/Series">
                <img src="/images/series-icon.svg" alt="Series" />
            <span>SERIES</span>
            </a>
    </NavMenu>
    <a href ="http://localhost:3000/login">
    <UserImg src="/images/PIC.PNG"  alt="pic"/>
    </a>
    </Nav>
  );
}

export default Header;

const Nav = styled.div`
height: 70px;
background-color: #090b13;
display:flex;
align-item:ceneter;
padding:0 36px;
overflow-x:hidden;

`

const Logo = styled.img`
width : 80px;
`

const NavMenu = styled.div`
display: flex;
align-items: center;
flex: 1;
margin-left: 25px;
a {
    display: flex;
    padding: 0 12px;
    cursor: pointer;
    align-items: center;
    

    img{
        height:20px;
    }
    span {
        font-size:13px;
        letter-spacing:1.42px;
        position: relative;

        &:after{
            content:"";
            height: 2px;
            background: white;
            position: absolute;
            left:0;
            right:0;
            bottom:-6px;
            opacity:0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);
        }
    }
    &:hover {
        span:after{
            transform: scaleX(1);
            opacity: 1;
        }
    }
}
`
const UserImg = styled.img`
width: 48px;
height: 48px;
border-radius: 100%;
cursor: pointer;
margin-top: 10px;
`

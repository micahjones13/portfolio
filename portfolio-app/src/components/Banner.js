import React from 'react'
import BannerImg from '../assets/img/mountainlinkedin.jpg';
import MyImg from '../assets/img/mypic.jpg';
import styled from 'styled-components';

import './banner.scss';

const Wrapper = styled.div`
    height: 100vh;
    position: relative;
    overflow: hidden;
    background-image: url(${BannerImg});
    background-size: cover;
    background-position: center;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.4);
    
`;
const BannerContainer = styled.div`
    width: 100%;
    background: rgba(37%, 45%, 52%, 0.5);
    height: 100vh;
    h1{
        z-index: 100;
        position: absolute;
        width: 100%;
        font-family: 'Gayathri', sans-serif;
        font-size: 4.3rem;
        color: white;
        text-shadow: 4px 2px black;
        top: 47%
    }
    h2{
        font-family: 'Gayathri', sans-serif;
        font-size: 3.4rem;
        z-index: 100;
        width: 100%;
        top: 60%;
        position: absolute;
        color: white;
        text-shadow: 4px 2px black;
    }
    button {
        color: darkgreen;
        border: 2px solid green;
        background: rgba(54%, 62%, 52%, 0.8);
        font-size: 20px;
        font-family: "Gayathri", sans-serif;
        width: 205px;
        height: 45px;
        margin: 15px;
        position: absolute;
        z-index: 5;
        top: 80%;
        right: 0;
        left: 41%;
        bottom: 0;
        animation: TEXT-FADE 4s ease;
        padding-top: 5px;
        &:hover {
          background: forestgreen;
          color: white;
          cursor: pointer;
        }

}
    

    

`;
// const BannerPic = styled.img`
//     width: 98%;
//     height: 700px;
//     z-index: 1;
// `
const HeadShot = styled.img`
    z-index: 2;
    width: 27%;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 25%;
    left: 0;
    right: 0;
    border-radius: 40%;

`;

const Banner = (props) => {
    return(
        <Wrapper>
            <BannerContainer>
                <HeadShot src = {MyImg} alt = 'headshot' />
                <h1>Micah Jones</h1> 
                <h2>Full-Stack Web Developer</h2>
                <button>See My Projects</button>
            </BannerContainer>
        </Wrapper>
    )

}

export default Banner;


// <BannerPic src = {BannerImg} alt = 'banner img' />
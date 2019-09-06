import React from 'react'
import MyImg from '../assets/img/anotherpicofme.jpg';
import styled from 'styled-components';

import './banner.scss';

const Wrapper = styled.div`
    height: 100vh;
    position: relative;
    overflow: hidden;
    background-image: url(${MyImg});
    background-size: cover;
    background-position: center;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.4);
    
`;
const BannerContainer = styled.div`
    width: 100%;
    background: rgba(37%, 45%, 52%, 0.5);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        z-index: 100;
        // position: absolute;
        // width: 135%;
        font-family: 'Gayathri', sans-serif;
        font-size: 4.3rem;
        color: white;
        text-shadow: 2px 2px black;
        // top: 10%
        // margin-top: 10%;
    }
    h2{
        font-family: 'Gayathri', sans-serif;
        font-size: 3.4rem;
        z-index: 100;
        // width: 135%;
        // top: 30%;
        // position: absolute;
        color: white;
        text-shadow: 2px 2px black;
        // padding-top: 3%;
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
        // position: absolute;
        z-index: 5;
        // top: 80%;
        // right: 0;
        // left: 41%;
        // bottom: 0;
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
                <h1>Micah Jones</h1> 
                <h2>Full-Stack Web Developer</h2>
                <button>See My Projects</button>
            </BannerContainer>
        </Wrapper>
    )

}

export default Banner;


// <BannerPic src = {BannerImg} alt = 'banner img' />
//<HeadShot src = {MyImg} alt = 'headshot' />
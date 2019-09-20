import React from "react";
import MyImg from "../assets/img/anotherpicofme.jpg";
import styled from "styled-components";

// import "./banner.scss";

const Wrapper = styled.div`
  height: 100vh;
  // max-width: 100%;
  position: relative;
  overflow: hidden;
  background-image: url(${MyImg});
  background-size: cover;
  background-position-y: center;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.4);
  // @media (max-width: 700px) {
  //   height: 65vh;
  // }
`;
const BannerContainer = styled.div`
  width: 100vw;
  background: rgba(37%, 45%, 52%, 0.5);
  overflow: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    z-index: 100;
    // position: absolute;
    // width: 135%;
    font-family: "Gayathri", sans-serif;
    font-size: 4.3rem;
    color: white;
    text-shadow: 2px 2px black;
    // top: 10%
    // margin-top: 10%;
    margin: 0;
    // margin-top: 100%;
    @media (max-width: 1000px) {
      margin-top: 50%;
    }
    @media (max-width: 650px) {
      font-size: 3.3rem;
      margin-top: 60%;
    }
    @media (max-width: 600px) {
      margin-top: 75%;
    }
    @media (max-width: 400px) {
      margin-top: 100%;
    }
  }
  // hr {
  //   width: 85%;
  //   border: none;
  //   color: white;
  //   background-color: darkgreen;
  //   height: 2px;
  //   // margin-top: -5%;
  //   // margin-bottom: -2%;
  // }
  h2 {
    font-family: "Gayathri", sans-serif;
    font-size: 3.4rem;
    z-index: 100;
    // width: 135%;
    // top: 30%;
    // position: absolute;
    color: white;
    text-shadow: 2px 2px black;
    // padding-top: 3%;
    @media (max-width: 650px) {
      font-size: 2.4rem;
    }
  }
  button {
    color: black;
    border: 2px solid darkgreen;
    background: rgba(54%, 62%, 52%, 0.8);
    font-size: 20px;
    font-family: "Gayathri", sans-serif;
    width: 205px;
    height: 45px;
    // margin: 15px;
    // position: absolute;
    z-index: 5;
    // top: 80%;
    // right: 0;
    // left: 41%;
    // bottom: 0;
    animation: TEXT-FADE 4s ease;
    padding-top: 5px;
    &:hover {
      background: #00b359;
      color: white;
      cursor: pointer;
    }
  }
`;
const Socials = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 200px;
  display: flex;
  justify-content: flex-end;
  font-size: 30px;
  color: white;
  z-index: 3;
  a {
    color: white;
  }
  i {
    margin: 3px 8px;
    cursor: pointer;
    &:hover {
      color: lightgreen;
    }
  }
`;
// const BannerPic = styled.img`
//     width: 98%;
//     height: 700px;
//     z-index: 1;
// // `
// const HeadShot = styled.img`
//   z-index: 2;
//   width: 27%;
//   position: absolute;
//   margin: auto;
//   top: 0;
//   bottom: 25%;
//   left: 0;
//   right: 0;
//   border-radius: 40%;
// `;

const Banner = props => {
  return (
    <Wrapper>
      <BannerContainer>
        <h1>Micah Jones</h1>
        <h2>Full-Stack Web Developer</h2>
        <button
          onClick={e => {
            //! Probably need to change this, might not work on diff screens
            window.scrollTo(
              window.innerWidth > 900
                ? {
                    top: window.innerHeight * 2 + 150,
                    left: 0,
                    behavior: "smooth"
                  }
                : {
                    top: window.innerHeight * 3 + 800,
                    left: 0,
                    behavior: "smooth"
                  }
            );
          }}
        >
          See My Projects
        </button>
      </BannerContainer>
      <Socials>
        <a
          href="https://github.com/micahjones13"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/micah-jones/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin" />
        </a>

        <i
          onClick={e => {
            window.location.href = "mailto:micahjones13@gmail.com";
          }}
          className="fas fa-envelope-open"
        />
      </Socials>
    </Wrapper>
  );
};

export default Banner;

// <BannerPic src = {BannerImg} alt = 'banner img' />
//<HeadShot src = {MyImg} alt = 'headshot' />

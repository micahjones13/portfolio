import React from "react";
import MyImg from "../assets/img/JPEG/bannerpic.jpg";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 99vw;
  position: relative;
  overflow: hidden;
  background-image: url(${MyImg});
  background-size: cover;
  background-position-y: center;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
`;
const BannerContainer = styled.div`
  width: 100%;
  background: rgba(37%, 45%, 52%, 0.5);
  overflow: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .projects-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 30vw;
    height: 5vh;
    border: 2px solid darkgreen;
    background: rgba(54%, 62%, 52%, 0.8);
    padding: 1%;
    border-radius: 10px;
  }

  h1 {
    z-index: 100;
    font-family: "Gayathri", sans-serif;
    font-size: 4.3rem;
    color: white;
    text-shadow: 3px 2px black;
    margin: 0;
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
  h2 {
    font-family: "Gayathri", sans-serif;
    font-size: 3.4rem;
    z-index: 100;

    color: white;
    text-shadow: 2px 2px black;
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
    z-index: 5;
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

const Banner = (props) => {
  return (
    <Wrapper>
      <BannerContainer>
        <h1>Micah Jones</h1>
        <h2>Full-Stack Web Developer</h2>
        <div className="projects-wrapper">
          <a href="#about">About</a>
          <a href="#recent-projects">Projects</a>
          <a href="/articles">Articles</a>
        </div>
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
          onClick={(e) => {
            window.location.href = "mailto:micahjones13@gmail.com";
          }}
          className="fas fa-envelope-open"
        />
      </Socials>
    </Wrapper>
  );
};

export default Banner;

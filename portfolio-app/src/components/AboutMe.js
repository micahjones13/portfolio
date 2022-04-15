import React from "react";
import styled from "styled-components";

const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 300px;
  padding: 5%;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;
const AboutMeWrapper = styled.div`
  width: 48%;
  font-family: "Gayathri", sans-serif;
  font-size: 1.3rem;
  padding-bottom: 2%;
  @media (max-width: 600px) {
    width: 90%;
  }
  h1 {
    font-size: 2rem;
    color: forestgreen;
  }
  p {
    @media (min-width: 1200px) {
      font-size: 1.7rem;
    }
    @media (min-width: 2000px) {
      font-size: 2rem;
    }
  }
`;
const SkillsWrapper = styled.div`
    width: 100%
    background: grey;
    color: white;
    display: flex;
    font-weight: bold;
    flex-direction: column;
        @media (max-width: 600px){
        margin-bottom: 2%;
        width: 100%;
        margin-top: 2%;
    }
    .bottom{
        margin-bottom: 5%;
    }
`;
const Skills = styled.div`
    background: darkgreen;
    height: 5vh;
    text-align: center;
    padding: 1%;
    margin-top: 1%;
    margin-left: 5%;
    margin-right: 5%
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 970px){
        justify-content: center;
    }
    .hoverSkills{
       font-size: 1.2rem;
        @media (max-width: 970px){
               display: none;
           }
        
     
    }
    :hover{
        transform: scale(1.1);
        .hoverSkills{
            color: white;
            display: block;
            width: 100%;
           margin: 0;
           @media (max-width: 450px){
               display: none;
           }
           
        }
    }
    i {
        font-size: 3rem;
    }
    h3{
        font-size: 2.5rem;
        margin: 5px;
        @media(max-width: 600px){
            font-size: 3rem;
            margin-left: 3%;
            margin-top: 5%;
        }
    }
`;

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <AboutMeWrapper>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a name="about" id="about"></a>
        <h1>Hey, there!</h1>
        <p>
          My name is Micah Jones, and I'm a full-stack web developer living in
          the American Fork, Utah area. I'm a CSS warrior, web-component
          advocate, and React enthusiast.
        </p>
      </AboutMeWrapper>
      <SkillsWrapper>
        <h1>Technical Skills</h1>

        <Skills>
          <i className="fab fa-html5" />
          <div className="hoverSkills">
            <p>Well versed in semantic HTML and JSX</p>
          </div>
          <h3>HTML</h3>
        </Skills>

        <Skills>
          <i className="fab fa-css3" />
          <div className="hoverSkills">
            <p>Fluent in CSS, LESS, and SASS</p>
          </div>
          <h3>CSS</h3>
        </Skills>

        <Skills>
          <i className="fab fa-js-square" />
          <div className="hoverSkills">
            <p>Solid JavaScript fundamentals</p>
          </div>
          <h3>JavaScript</h3>
        </Skills>
        <Skills>
          <i className="fa-code" />
          <div className="hoverSkills">
            <p>Very familiar with building web-components in Stencil JS</p>
          </div>
          <h3>Stencil</h3>
        </Skills>
        <Skills>
          <i className="fab fa-python" />
          <div className="hoverSkills">
            <p>Practiced in Python </p>
          </div>
          <h3>Python</h3>
        </Skills>

        <Skills>
          <i className="fab fa-react" />
          <div className="hoverSkills">
            <p>Using React/Redux is a personal favorite</p>
          </div>
          <h3>React.js</h3>
        </Skills>

        <Skills>
          <i className="fab fa-node-js" />
          <div className="hoverSkills">
            <p>Experience with Node.js/Express backends</p>
          </div>
          <h3>Node.js</h3>
        </Skills>

        <Skills>
          <i className="fas fa-laptop-code" />
          <div className="hoverSkills">
            <p>Currently learning and building with C#</p>
          </div>
          <h3>C#</h3>
        </Skills>

        <div className="bottom">
          <Skills>
            <i className="fab fa-github" />
            <div className="hoverSkills">
              <p>Well versed in Git flow</p>
            </div>
            <h3>Git</h3>
          </Skills>
        </div>
      </SkillsWrapper>
    </AboutMeContainer>
  );
};

export default AboutMe;

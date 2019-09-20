import React from "react";
import styled from "styled-components";

const AboutMeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  //   max-width: 1800px;
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
  @media (max-width: 600px) {
    width: 90%;
  }
  h1 {
    text-align: left;
    font-size: 2rem;
    color: forestgreen;
  }
  p {
    text-align: left;
    // @media (max-width: 3000px) {
    //   font-size: 2rem;
    // }
    // @media (max-width: 1650px) {
    //   font-size: 1.7rem;
    // }
    // @media (max-width: 1300px) {
    //   font-size: 1.4rem;
    // }
    // @media (max-width: 1000px) {
    //   font-size: 1.2rem;
    // }
    // @media (max-width: 750px) {
    //   font-size: 1.1rem;
    // }
    @media (min-width: 1200px) {
      font-size: 1.7rem;
    }
    @media (min-width: 2000px) {
      font-size: 2rem;
    }
  }
`;
const SkillsWrapper = styled.div`
    width: 48%
    font-family: 'Gayathri', sans-serif;
    background: grey;
    color: white;
    display: flex;
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
    height: 10vh;
    text-align: center;
    padding: 1%;
    margin-top: 2%;
    margin-left: 5%;
    margin-right: 5%
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 800px){
        justify-content: center;
    }
    .hoverSkills{
        display: none;
     
    }
    :hover{
        transform: scale(1.1);
        .hoverSkills{
            color: white;
            display: block;
            // background: #07a828;
            width: 100%;
           margin: 0;
           @media (max-width: 450px){
               display: none;
           }
           
        }
    }
    i {
        font-size: 3rem;
        // @media (max-width: 800px){
        //     display: none;
        // }
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

const AboutMe = props => {
  return (
    <AboutMeContainer>
      <AboutMeWrapper>
        <h1>Hey, there!</h1>
        <p>
          My name is Micah Jones, and I'm a full-stack web developer living in
          the Provo, Utah area. I love coding and creating, and am excited for
          any opportunities in the tech field.
        </p>
        <p>
          I've worked mostly in the caregiving industry supporting individuals
          with special needs. After 3 years of caregiving, I was promoted to the
          office assitant position where I managed those same individuals
          finacials and facilitated communication throught the 4 different
          departments there. Throughout all of this, I was learning to code on
          the side, waiting for the opportunity to attend a school that would
          solidify my knowledge.
        </p>
        <p>
          That school came in the form of Lambda School, a 9+ month, fully
          immersive full stack bootcamp. I began Lambda in April of 2019, and
          can proudly say I am on track to graduate in Janurary of 2020. I'm
          thrilled to begin my career in web development, and would love to hear
          from you! Let's find out what my skills can do for your company.
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
            <p>Practiced in CSS, LESS, and SASS</p>
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

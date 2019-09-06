import React from 'react'
import styled from 'styled-components';

import { } from '@fortawesome/fontawesome-svg-core';

const AboutMeContainer = styled.div`
    display: flex;
    justify-content: space-around;
    max-width: 1800px; 
    min-height: 300px;
    padding: 5%;

`;
const AboutMeWrapper = styled.div`
    width: 48%;
    font-family: 'Gayathri', sans-serif;
    font-size: 1.3rem;
    h1{
        text-align: left;
        font-size: 2rem;
        color: forestgreen;
    }
    p{
        text-align: left;
    }
`;
const SkillsWrapper = styled.div`
    width: 48%
    font-family: 'Gayathri', sans-serif;
    background: grey;
    color: white;
    display: flex;
    flex-direction: column;

`;
const Skills = styled.div`
    background: darkgreen;
    height: 10vh;
    text-align: center;
    padding: 1%;
    margin-top: 2%;
    display: flex;
    justify-content: space-evenly;
    i {
        font-size: 3rem;
    }
    h3{
        font-size: 2.5rem;
        margin: 5px;
    }
   
`;

const AboutMe = (props) => {
    return (
        <AboutMeContainer>
            <AboutMeWrapper>
                <h1>Hey, there!</h1>
                <p>My name is Micah Jones, and I'm a full-stack web developer living in the Provo, Utah area. 
                I love coding and creating, and am excited for any opportunities in the tech field.
                </p>
                <p>
                    Lorem ipsum Lorem ipsum lorem ipsum. Lorem ipsum Lorem ipsum lorem ipsum. Lorem ipsum Lorem ipsum lorem ipsum.
                    Lorem ipsum Lorem ipsum lorem ipsum. Lorem ipsum Lorem ipsum lorem ipsum.
                </p>
                <p>
                Lorem ipsum Lorem ipsum lorem ipsum.Lorem ipsum Lorem ipsum lorem ipsum.Lorem ipsum Lorem ipsum lorem ipsum.Lorem ipsum Lorem ipsum lorem ipsum.
                Lorem ipsum Lorem ipsum lorem ipsum.Lorem ipsum Lorem ipsum lorem ipsum.Lorem ipsum Lorem ipsum lorem ipsum.
                </p>
            </AboutMeWrapper>
            <SkillsWrapper>
                <h1>My Skills</h1>
                    <Skills><i className="fab fa-react" /><h3>React.js</h3></Skills>
                    <Skills><i className="fab fa-react" /><h3>React.js</h3></Skills>       
            </SkillsWrapper>
        </AboutMeContainer>
    )
}

export default AboutMe

import React from 'react'
import styled from 'styled-components';
import BlackSand from '../assets/img/blacksand.jpg';

const AboutMeContainer = styled.div`
    display: flex;
    justify-content: space-around;
    max-width: 1800px; 
    min-height: 300px;
   

`;
const AboutMeWrapper = styled.div`
    width: 48%;
    font-family: 'Gayathri', sans-serif;
    font-size: 1.3rem;
    h1{
        text-align: left;
    }
    span{
        text-align: left;
    }
    p{
        text-align: left;
    }


`;
const SkillsWrapper = styled.div`
width: 48%
font-family: 'Gayathri', sans-serif;

`;

const AboutMe = (props) => {
    return (
        <AboutMeContainer>
            <AboutMeWrapper>
                <h1>About Me!</h1>
                <span>Hey, there!</span>
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
            </SkillsWrapper>
        </AboutMeContainer>
    )
}

export default AboutMe

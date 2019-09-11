import React from 'react'
import styled from 'styled-components';



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
           
        }
    }
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
                <h1>Technical Skills</h1>
                
                <Skills><i className="fab fa-html5" />
                        <div className = 'hoverSkills'>
                            <p>Well versed in semantic HTML and JSX</p>
                        </div>
                        <h3>HTML</h3>
                    </Skills>  

                    <Skills><i className="fab fa-css3" />
                        <div className = 'hoverSkills'>
                            <p>Practiced in CSS, LESS, and SASS</p>
                        </div>
                        <h3>CSS</h3>
                    </Skills>      

                    <Skills><i className="fab fa-js-square" />
                        <div className = 'hoverSkills'>
                            <p>Solid JavaScript fundamentals</p>
                        </div>
                        <h3>JavaScript</h3>
                    </Skills>   

                    <Skills><i className="fab fa-react" />
                        <div className = 'hoverSkills'>
                            <p>Using React/Redux is a personal favorite</p>
                        </div>
                        <h3>React.js</h3>
                    </Skills>

                    <Skills><i className="fab fa-node-js" />
                        <div className = 'hoverSkills'>
                            <p>Experience with Node.js/Express backends</p>
                        </div>
                        <h3>Node.js</h3>
                    </Skills>

                    <div className = 'bottom'>
                        <Skills><i className="fab fa-github" />
                            <div className = 'hoverSkills'>
                                <p>Well versed in Git flow</p>
                            </div>
                            <h3>Git</h3>
                        </Skills>       
                    </div>
            </SkillsWrapper>
        </AboutMeContainer>
    )
}

export default AboutMe

import React from "react";
import styled from "styled-components";

const ContactMe = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  font-family: "Gayathri", sans-serif;
  padding-top: 1%;
  h2 {
    margin-bottom: 0;
  }
  a {
    margin-left: 5%;
    margin-right: 5%;
    @media (max-width: 500px) {
      display: none;
    }
  }
`;
const FooterWrapper = styled.div`
  width: 70%;
`;

const Footer = () => {
  return (
    <ContactMe>
      <FooterWrapper>
        <a href="mailto:micahjones13@gmail.com">micahjones13@gmail.com</a>

        <a
          href="https://www.linkedin.com/in/micah-jones/"
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/micahjones13"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>
        <a
          href="https://resume.creddle.io/resume/haa3tyrytqy"
          rel="noopener noreferrer"
          target="_blank"
        >
          Resume
        </a>
      </FooterWrapper>
    </ContactMe>
  );
};

export default Footer;

/*

        <span>
          Click <a href="mailto:micahjones13@gmail.com">here </a>
          to send me an email!
        </span>
        <p>Email: micahjones13@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/micah-jones/"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://www.linkedin.com/in/micah-jones/
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/micahjones13"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://github.com/micahjones13
          </a>
        </p>


    <ContactMe>
      <h3>Contact</h3>
      <FooterWrapper>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:micahjones13@gmail.com">micahjones13@gmail.com</a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/micah-jones/"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://www.linkedin.com/in/micah-jones/
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/micahjones13"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://github.com/micahjones13
            </a>
          </li>
          <li>
            Resume:{" "}
            <a
              href="https://resume.creddle.io/resume/haa3tyrytqy"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://resume.creddle.io/resume/haa3tyrytqy
            </a>
          </li>
        </ul>
      </FooterWrapper>
    </ContactMe>


*/

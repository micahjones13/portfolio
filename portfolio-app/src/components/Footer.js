import React from "react";
import styled from "styled-components";

const ContactMe = styled.div`
  background: lightgray;
  display: flex;
  flex-direction: column;
  font-family: "Gayathri", sans-serif;
`;
const FooterWrapper = styled.div`
  background: lightgray;
  display: flex;
  //   flex-direction: column;
  align-items: center;
  justify-content: space-around;
  a {
    text-decoration: none;
  }
`;
//#00cc66
const Footer = () => {
  return (
    <ContactMe>
      <h3>Contact Me!</h3>
      <FooterWrapper>
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
      </FooterWrapper>
    </ContactMe>
  );
};

export default Footer;

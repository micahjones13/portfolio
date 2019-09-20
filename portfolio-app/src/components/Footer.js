import React from "react";
import styled from "styled-components";

const ContactMe = styled.div`
  background: rgb(51, 51, 51) none repeat scroll 0% 0%;
  color: white;
  a {
    color: white;
    :visited {
      color: lightgreen;
    }
    :active {
      color: blue;
    }
  }
  display: flex;
  flex-direction: column;
  font-family: "Gayathri", sans-serif;
  h3 {
    margin-bottom: 0;
  }
`;
const FooterWrapper = styled.div`
  background: rgb(51, 51, 51) none repeat scroll 0% 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: space-around;

  ul {
    list-style-type: none;
    text-align: left;
    li {
      margin-top: 2%;
    }
  }
`;
//#00cc66
const Footer = () => {
  return (
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
        </ul>
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


*/

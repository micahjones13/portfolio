import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavWrapper = styled.div`
  background: darkgreen;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  width: 100%;
  position: sticky;
  top: 0;
  border-bottom: 3px solid lightgreen;
  h1 {
    color: white;
    padding-left: 2%;
  }
  @media (max-width: 600px) {
    h1 {
      display: none;
    }
  }
`;
const NavItems = styled.div`
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  li {
    color: white;
    list-style: none;
    a {
      text-decoration: none;
      font-size: 2rem;
      color: white;
      list-style: none;
    }
    a:hover {
      color: lightgreen;
      text-decoration: underline;
    }
    a:visited {
      color: white;
    }
    a:visited:hover {
      color: lightgreen;
    }
  }
  @media (max-width: 600px) {
    width: 100%;
    justify-content: space-evenly;
  }
  @media (min-width: 601px) {
    width: 60%;
  }
  @media (min-width: 900px) {
    width: 20%;
  }
`;
const Socials = styled.div`
  display: flex;
  justify-content: flex-end;
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

const Nav = () => {
  return (
    <NavWrapper>
      <h1>
        <Link to="/">Micah Jones</Link>
      </h1>
      {/* <img src={MyFace} alt="me" /> */}
      <NavItems>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
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
        </Socials>
      </NavItems>
    </NavWrapper>
  );
};

export default Nav;

import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  h1 {
    font-size: 3rem;
  }
  @media (max-width: 400px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

const ArticleHeader = (props) => {
  return (
    <HeaderWrapper>
      <header>
        <span>{props.date}</span>
        <h1>{props.title}</h1>
      </header>
    </HeaderWrapper>
  );
};

export default ArticleHeader;

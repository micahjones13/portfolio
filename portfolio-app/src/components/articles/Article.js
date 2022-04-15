import React from "react";
import styled from "styled-components";

const FullArticle = styled.article`
  width: 100%;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: darkgreen;
  }
`;

const Article = (props) => {
  {
    props.data.map((art) => {
      return (
        <FullArticle>
          <header>
            <span>{art.date}</span>
            <h1>{art.title}</h1>
          </header>
          <main></main>
        </FullArticle>
      );
    });
  }
};

export default Article;

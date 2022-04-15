import React from "react";
import styled from "styled-components";
import { articleData } from "../../assets/articleData";
import ArticlePreview from "./ArticlePreview";

const ArticleWrapper = styled.div`
  h2 {
    color: darkgreen;
    text-align: left;
  }
  h1 {
    color: darkgreen;
    text-align: left
    padding-left: 5%;
  }
`;

const Articles = () => {
  return (
    <ArticleWrapper>
      <h1>Recent Articles</h1>
      <ArticlePreview data={articleData} />
    </ArticleWrapper>
  );
};

export default Articles;

import React from "react";
import styled from "styled-components";
import ArticleContent from "../components/articles/ArticleContent";
import ArticleHeader from "../components/articles/ArticleHeader";

const Wrapper = styled.article`
  width: 100%;
  text-align: left;
  padding: 5%;
  h1 {
    color: darkgreen;
  }
`;

const SliderArticle = () => {
  return (
    <Wrapper>
      <ArticleHeader
        date="15 April 2022"
        title="Designing an input range at two differnet heights"
      />
      <ArticleContent
        preamble="Styling native HTML elements can be tricky, and the range input is certainly no different. I was tasked with updating our slider component, which uses the classic <input type=’range’>."
        titles={["The Problem", "The Solution"]}
      />
    </Wrapper>
  );
};

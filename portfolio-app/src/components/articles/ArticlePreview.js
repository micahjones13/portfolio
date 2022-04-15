import React from "react";
import styled from "styled-components";

const ArticlePreviewWrapper = styled.div`
  font-weight: bold;
  padding: 5% 5% 10% 5%;
  font-size: 1.5rem;
  text-align: left;
  .date {
    font-weight: normal;
  }
`;

const ArticlePreviewCard = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 1%;
  border: 3px solid darkgreen;
  border-radius: 30px;
  &:hover {
    transform: scale(1.025);
  }
  a {
    text-decoration: none;
    color: darkgreen;
  }
  a:hover {
    text-decoration: underline;
  }
  hr {
    align-self: start;
    width: 100%;
    height: 1px;
    color: darkgreen;
    background: darkgreen;
  }
`;

const ArticlePreview = (props) => {
  const handleClick = (e) => {};
  return (
    <ArticlePreviewWrapper>
      {props.data.map((art) => {
        return (
          <ArticlePreviewCard key={art.id}>
            <span className="date">{art.date}</span>
            <h2>
              <a href="#">{art.title}</a>
            </h2>
            <p>{art.content}</p>
          </ArticlePreviewCard>
        );
      })}
    </ArticlePreviewWrapper>
  );
};

export default ArticlePreview;

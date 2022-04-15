import React from "react";

const ArticleHeader = (props) => {
  return (
    <div>
      <header>
        <span>{props.date}</span>
        <h1>{props.title}</h1>
      </header>
    </div>
  );
};

export default ArticleHeader;

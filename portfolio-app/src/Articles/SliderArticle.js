//prettier-ignore
import React from "react";
import styled from "styled-components";
import ArticleHeader from "../components/articles/ArticleHeader";
import sliderImg from "../assets/img/slider.png";

const Wrapper = styled.article`
  margin-left: 10%;
  margin-right: 10%;
  padding: 5%;
  text-align: left;
  h1 {
    color: darkgreen;
  }
  pre {
    background: darkgreen;
    border: 5px solid green;
    border-radius: 30px;
    color: white;
    padding: 1%;
    text-wrap: wrap;
    align-self: center;
  }
  img {
    align-self: center;
  }
  p {
    font-size: 1.3rem;
    text-align: left;
  }
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
  code {
    background: lightgray;
  }
  pre > code {
    background: none;
  }
  a {
    color: darkgreen;
    font-size: inherit;
    text-decoration: underline;
  }
  a:visited {
    color: darkgreen;
  }
  a:hover {
    color: lightgreen;
  }
`;

const SliderArticle = () => {
  return (
    <Wrapper>
      <ArticleHeader
        date="15 April 2022"
        title="Designing an input range at two differnet heights"
      />
      <main>
        <img src={sliderImg} alt="Fully styled slider" />
        <span style={{ alignSelf: "center", paddingTop: "5px" }}>
          The cool kid on the slider block
        </span>
        <p className="preamble">
          Styling native HTML elements can be tricky, and the range input is
          certainly no different. I was tasked with updating our slider
          component, which uses the classic{" "}
          <code>&#60;input type="range"&#62;</code>
        </p>
        <h2>The Problem</h2>
        <p>
          You probably know about styling the track and the thumb through pseudo
          classes such as <code>::-webkit-slider-runnable-track</code> and{" "}
          <code>::-webkit-slider-thumb</code>, or the Moz and MS versions of
          each. These are great, and allow you to style the track and thumb
          respectively, but what gets tricky is when you want the height of the
          track different on each side of the thumb, like my design called for.
        </p>
        <p>
          My first thought was, “I'll just ::before or ::after the thumb, and
          change the track height that way. Unfortunately, the ::before and
          ::after pseudo-elements don't work with the pseudo-classes for the
          track and thumb. Well, what now? I can change the height of the track,
          but that sets the height for the entire track, which we don’t want.
        </p>
        <h2>The Solution</h2>
        <p>
          In order to get the track two different heights on either side of the
          thumb, you can take advantage of passing the background-image
          attribute two arguments. The caveat to this though, is that
          background-image doesn’t accept a straight color - so no hex or rgb
          values allowed. It does, however, accept gradients! So, you can do
          something like:
        </p>
        <pre>
          <code>
            .slider::-webkit-runnable-track &#123;
            <br />
            {"    "}background-image: linear-gradient(blue, blue),
            linear-gradient(blue, blue);
            <br />
            &#125;
          </code>
        </pre>
        <p>
          Adding two linear gradients of just blue won’t make it look any
          different right now from simply doing{" "}
          <code>background-color: blue</code>, but once we add the other
          background properties, some magic can happen.
        </p>
        <p>
          The other background properties we’ll use are{" "}
          <code>background-size</code>, <code>background-repeat</code>, and{" "}
          <code>background-position</code>.
        </p>
        <pre>
          <code>
            .slider::-webkit-runnable-track &#123;
            <br />
            {"    "}background-image: linear-gradient(blue, blue),
            linear-gradient(blue, blue);
            <br />
            {"    "}background-repeat: no-repeat no-repeat;
            <br />
            {"    "}background-position: left;
            <br />
            {"    "}/* background-size: ???? */ <br />
            &#125;
          </code>
        </pre>
        <p>
          Setting the background repeat to <code>no-repeat no-repeat</code>{" "}
          makes the track color consistent, and setting the position to left
          left-centers the track.
        </p>
        <p>
          The next property we’ll need is <code>background-size</code>, and this
          is where we’ll need some sort of logic. In this example, I’ll be using
          vanilla JS and CSS custom properties.
        </p>
        <p>
          We’ll need to set a CSS custom property, and then change that
          properties value based on events from the user. For reference, this is
          the HTML structure we’ll be using:
        </p>
        <pre>
          <code>
            &#60;div class="wrapper"&#62;
            <br />
            {"    "}&#60;div class="slider-wrapper"&#62;
            <br />
            {"    "}
            {"    "}&#60;input class="slider" type="range" max="100"
            min="0"&#62;&#60;/input&#62;
            <br />
            {"    "}&#60;/div&#62;
            <br />
            &#60;/div&#62;
          </code>
        </pre>
        <p>
          First, we’ll need to create a CSS custom property to change inside of
          our .css file. For this, I’m using <code>--valuePercent</code>.
        </p>
        <pre>
          <code>
            .wrapper&#123;
            <br />
            {"    "}--valuePercent = 50%; <br />
            &#125;
            <br />
            .slider::-webkit-runnable-track &#123;
            <br />
            {"    "}background-image: linear-gradient(blue, blue),
            linear-gradient(blue, blue);
            <br />
            {"    "}background-repeat: no-repeat no-repeat; background-position:
            left;
            <br />
            {"    "}/* background-size: ???? */
            <br />
            &#125;
          </code>
        </pre>
        <p>
          Now that the CSS custom prop is created, we can modify it in our JS.
          Next, find the slider:
          <br />
          <code>const slider = document.querySelector('.slider');</code>
        </p>
        <p>
          Then, we need to add an event listener to it and create a function
          that runs when that listener is triggered.
        </p>
        <pre>
          <code>
            const slider = document.querySelector('.slider');
            <br />
            slider.addEventListener('input', updateValue);
            <br />
            function updateValue()&#123;
            <br />
            {"    "}const val = slider.value; const valPercent =
            `$&#123;val&#125;%`;
            <br />
            {"    "}slider.style.setProperty('--valuePercent', valPercent);
            <br />
            &#125;
          </code>
        </pre>
        <p>
          Since this is an input element, we can listen to the input event. Our{" "}
          <code>updateValue</code> function then fires and in turn gets the
          current value of the slider, changes that to a percent string, and
          updates our CSS custom prop with that percent.
        </p>
        <p>
          Now, we can use the <code>background-size</code> to determine when the
          track should be different heights!
        </p>
        <pre>
          <code>
            .wrapper&#123;
            <br />
            {"    "}--valuePercent = 50%;
            <br />
            &#125;
            <br />
            .slider::-webkit-runnable-track&#123;
            <br />
            {"    "}background-image: linear-gradient(blue, blue),
            linear-gradient(blue, blue);
            <br />
            {"    "}background-repeat: no-repeat no-repeat;
            <br />
            {"    "}background-position: left;
            <br />
            {"    "}background-size: var(--valuePercent) 5px, 100% 1px;
            <br />
            &#125;
          </code>
        </pre>
        <p>
          Because we have two background image’s, we can set each one of those
          to a different width and height using <code>background-size</code>.
          Now, the width of the first background image is equal to{" "}
          <code>--valuePercent</code>, and will be 5px tall. The second
          background size is set to 100% width, which means that the entire
          track will be effected by the 1px height. But since the left side of
          the thumb is 5px, that’s what we’ll see.
        </p>
        <p>
          Now our track is two different heights on either side of the thumb!
          You can now use the <code>::-webkit-slider-thumb</code> and the other
          div classes to style this however you’d like. Keep in mind, this
          implementation is only using webkit, and other browsers use different
          prefixes: -mz for Firefox and -ms for Internet explorer.
        </p>
        <p>
          You can see my entire example at this CodePen{" "}
          <a href="https://codepen.io/micahjones/pen/gOWXRjY">here</a>.
        </p>
      </main>
    </Wrapper>
  );
};

export default SliderArticle;

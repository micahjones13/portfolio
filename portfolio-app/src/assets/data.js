import astroSb from "../assets/img/astro-sb.png";
import astroReact from "../assets/img/astro-react.png";
export const data = [
  {
    id: 1,
    title: "Astro Web Components",
    image: astroSb,
    description:
      "Web components and patterns built for the Astro Space UX Design System (Astro UXDS)",
    gitLink: "https://github.com/RocketCommunicationsInc/astro",
    deployedLink:
      "https://astro-components.netlify.app/?path=/story/astro-uxds-welcome-start-here--page",
    content:
      "My favorite project so far has been creating Stencil web-components for the Astro UX Design System. This involves a lot of talk with designers, working with shadow DOM, design tokens, and DOM manipulation. I've learned so much from this, and hope to be working on it for the forseeable futrue!",
  },
  {
    id: 2,
    title: "Astro in React",
    image: astroReact,
    description:
      "Astro Space UX Design System web-components wrapper for React",
    gitLink:
      "https://github.com/RocketCommunicationsInc/astro/tree/main/packages/react",
    deployedLink:
      "https://astro-components.netlify.app/?path=/story/astro-uxds-welcome-react--page",
    content:
      "This was an effort that I lead to wrap our Stencil components for React so they could be used as regular React comopnents. Stencil provides a React output target, but it's not perfect. I had to write a middleware fix for the boolean props to work correctly, as well as learn how to use the react testing library with shadow DOM'd components.",
  },
];

import React from "react";
import ReactDOM from "react-dom";

// Your top level component
import App from "./components/App";
import netlifyIdentity from "netlify-identity-widget";

// Export your top level component as JSX (for static rendering)
export default App;

// Render your app
if (typeof document !== "undefined") {
  window.netlifyIdentity = netlifyIdentity;
  netlifyIdentity.init();
  const renderMethod = module.hot
    ? ReactDOM.render
    : ReactDOM.hydrate || ReactDOM.render;
  const render = Comp => {
    renderMethod(<Comp />, document.getElementById("root"));
  };

  // Render!
  render(App);
}

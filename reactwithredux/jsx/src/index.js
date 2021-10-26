import React from "react";
import ReactDom from "react-dom";

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  const ab = "Enter Name:";
  return (
    <div>
      <label className="label" for="name">
        {ab}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        Submit
      </button>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));

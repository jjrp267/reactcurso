import React, { Component } from "react";
import "./ComponentStyles.css";

class ComponentStyles extends Component {
  render() {

    const h1Css = {
      color: "blue",
      fontWeight: "bold"
    };
    
    const headerCss =  { backgroundColor: "#333" };

    return (
      <div>
        <header>
          <h1>Styled component</h1>
        </header>
        <main>
          <h2 id="supertitle">Main content</h2>
          <p className="regular">This component is very nice</p>
          <header style={headerCss}>
          <h1 style={h1Css}>Styled component</h1>
        </header>
          </main>
      </div>
    );
  }
}

export default ComponentStyles;

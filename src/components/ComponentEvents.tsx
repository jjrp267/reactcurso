import React, { Component, MouseEvent } from "react";

class ComponentEvents extends Component {

  arrowHandleClick = (e: MouseEvent ) => {
    e.preventDefault();
    alert("The first link was clicked.");
  }

  handleClick(e : React.MouseEvent<HTMLAnchorElement> ) {
    e.preventDefault();
    alert("The second link was clicked.");
  }

  render() {
    return (
    <>
      <button onClick={() => alert("It works")}>
          Click on this button
      </button><br />
      <a href="#" onClick={this.arrowHandleClick}>
        Click first link
      </a><br />
      <a href="#" onClick={(e) => this.handleClick(e)}>
        Click second link
      </a><br />
      </>

    );
  }
}

export default ComponentEvents;

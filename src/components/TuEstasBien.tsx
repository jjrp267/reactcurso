import React from "react";

interface AwaysCoolStateProps {
  comoEstasFlag: boolean;
  descripcion: string
}

const TuEstasBien = (ChildComp: React.ComponentType<any | string>) => {
  return class Component extends React.Component<{}, AwaysCoolStateProps> {
    state = {
      comoEstasFlag: false,
      descripcion: ''
    };

    handleClick = () => {
      this.setState({ comoEstasFlag: this.state.comoEstasFlag? false:true,
                      descripcion: this.state.comoEstasFlag?'estoy mal':'estoy bien'
                     });
    }

    render() {
      return (
        <>
          <button onClick={this.handleClick}>Pregunta como estás</button>
          <ChildComp comoEstas={this.state.comoEstasFlag} descripcion={this.state.descripcion} />
        </>
      );
    }
  };
};

export default TuEstasBien;

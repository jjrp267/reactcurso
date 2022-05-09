import { Component } from 'react'

class CmpClaseCicloVida extends Component <{} , {name? : number}> {

  constructor(props: any) {
    super(props);
    this.state = {name:5};

    console.log("App>constructor", props);
  }

  componentDidMount(){
    console.log("App> componentDidMount", this.state, this.props);
  }

  componentWillReceiveProps(nextProps : any){
    console.log("App> componentWillReceiveProps",this.state, this.props);
    console.log("App> componentWillReceiveProps", nextProps);
  }

  shouldComponentUpdate(nextProps: any, nextState: any){
    console.log("App> shouldComponentUpdate", this.state, this.props);
    console.log("App> shouldComponentUpdate", nextState, nextProps);
    return true;
  }

  componentWillUpdate(nextProps: any, nextState: any){
    console.log("App> componentWillUpdate", this.state, this.props);
    console.log("App> componentWillUpdate", nextState, nextProps);
  }

  componentDidUpdate(nextProps: any, nextState: any){
    console.log("App> componentDidUpdate", this.state, this.props);
    console.log("App> componentDidUpdate", nextState, nextProps);
  }
  render() {
    console.log("App> render> ", this.state, this.props);
    return (
      <div className="App">
          <button onClick={() => this.setState({name:Math.random()})}>
            Update
          </button>
          <p>este es el dato: {this.state.name} </p>
      </div>
    );
  }

  componentWillUmount(){
    console.log("App> componentWillUmount", this.state, this.props);
  }
}


export default CmpClaseCicloVida;
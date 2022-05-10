import React, { Component } from "react";

class FormValidation extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      login: "",
      password: "",
      loginValid: true,
      passwordValid: true,
      emailValid: true,
    };
  }

  loginCheck = (event: any) => {
    const target = event.target;

    this.setState({
      [target.name]: target.value,
      loginValid: this.isLoginValid(target.value),
    });
  };

  passwordCheck = (event: any) => {
    const target = event.target;

    this.setState({
      [target.name]: target.value,
      passwordValid: this.isPasswordValid(target.value),
    });
  };

  emailCheck = (event: any) => {
    const target = event.target;

    this.setState({
      [target.name]: target.value,
      emailValid: this.isEmailValid(target.value),
    });
  };

  isLoginValid = (login: string) => login.length > 2;
  isPasswordValid = (password: string) => password.length > 7;

  isEmailValid = (email: string) => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regex.test(email) === false) {
      return false;
    }

    return true;
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    if (
      !this.isLoginValid(this.state.login) ||
      !this.isPasswordValid(this.state.password)
    )
      alert("Form fields are incorrect");
    else alert("Form fields correct");
  };

  render() {
    console.log(this.state.loginValid);
    let loginError = this.state.loginValid ? (
      ""
    ) : (
      <div className="error">Login not valid</div>
    );
    let passwordError = this.state.passwordValid ? (
      ""
    ) : (
      <div className="error">Password not valid</div>
    );
    let emailError = this.state.emailValid ? (
      ""
    ) : (
      <div className="error">email not valid</div>
    );

    return (
      <div className="App">
        <div>
          <h2>Validaciones</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Login</label>
            </div>
            {loginError}
            <div>
              <input type="text" name="login" onBlur={this.loginCheck} />
            </div>

            <div>
              <label>Password</label>
            </div>
            {passwordError}
            <div>
              <input
                type="password"
                name="password"
                onBlur={this.passwordCheck}
              />
            </div>
            <div>
              <label>Email</label>
            </div>
            {emailError}
            <div>
              <input type="text" name="email" onBlur={this.emailCheck} />
            </div>
            <div>
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
        <div>
          Login: {this.state.login}, password: {this.state.password}, email:{" "}
          {this.state.email}
        </div>
      </div>
    );
  }
}

export default FormValidation;

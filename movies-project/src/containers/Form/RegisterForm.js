import React, { Component } from "react";
import classes from "./Form.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import fireDb from "../../connection/Firebase";

class RegisterForm extends Component {
  state = {
    username: "",
    password: "",
    repeatPassword: "",
  };

  submitHandler = (event) => {
    event.preventDefault();

    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    let ref = fireDb.database().ref();

    ref
      .child("users")
      .orderByChild("password")
      .equalTo(this.state.password)
      .once("value")
      .then((snapshot) => {
        if (snapshot.exists()) {
          alert("Can not set this password! Please, choose another one.");
        } else if (this.state.password !== this.state.repeatPassword) {
          alert("The password and repeat password doesn't match. Try again!");
        } else {
          ref.child("users").push(data, (err) => {
            if (err) console.log(err);
          });
          alert("Successful registration! Click OK to go to Login page.");
          this.props.history.push("/login");
        }
      });
  };

  render() {
    return (
      <Auxiliary>
        <h2 className={classes.Register}>Register</h2>
        <form onSubmit={this.submitHandler} className={classes.Form}>
          <input
            className={classes.Input}
            required
            type="text"
            placeholder="Username.."
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <input
            className={classes.Input}
            required
            type="password"
            placeholder="Password.."
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <input
            className={classes.Input}
            required
            type="password"
            placeholder="Repeat Password.."
            value={this.state.repeatPassword}
            onChange={(e) => this.setState({ repeatPassword: e.target.value })}
          />
          <button className={classes.Button}>SUBMIT</button>
        </form>
        <div className={classes.Register}>
          <p>Ukoliko vec imate nalog, onda kliknite 'Login'.</p>
          <button
            className={classes.Button}
            onClick={() => this.props.history.push("/login")}
          >
            Login
          </button>
        </div>
      </Auxiliary>
    );
  }
}

export default RegisterForm;

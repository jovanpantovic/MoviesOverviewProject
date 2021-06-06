import React, { Component } from "react";
import classes from "./Form.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import fireDb from "../../connection/Firebase";

class Form extends Component {
  state = {
    password: "",
  };

  submitHandler = (event) => {
    event.preventDefault();

    let ref = fireDb.database().ref();

    ref
      .child("users")
      .orderByChild("password")
      .equalTo(this.state.password)
      .once("value")
      .then((snapshot) => {
        if (snapshot.exists()) {
          let userData = snapshot.val();
          console.log(userData);
          alert('Successful login!');
          this.props.history.push("/movies");
        } else {
          alert('Incorrect Password!');
        }
      });
  };

  render() {
    return (
      <Auxiliary>
        <h2 className={classes.Login}>Login</h2>
        <form onSubmit={this.submitHandler} className={classes.Form}>
          <input
            className={classes.Input}
            required
            type="password"
            placeholder="Password.."
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <button className={classes.Button}>SUBMIT</button>
        </form>
      </Auxiliary>
    );
  }
}

export default Form;

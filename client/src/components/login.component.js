import React, { Component } from "react";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Button } from "react-bootstrap";
import * as emailjs from "emailjs-com";
import Form from "./Form";
import SignUp from "./signup.component";
export default class IrinaForm extends Component {
  state = {
    submited: false,
  };

  handler = () => {
    this.setState({ submited: true });
  };

  render() {
    return this.state.submited === false ? (
      <Form handler={this.handler} />
    ) : (
      <SignUp />
    );
  }
}

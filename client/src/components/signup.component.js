import React, { Component } from "react";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Button } from "react-bootstrap";
import * as emailjs from "emailjs-com";

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <h2>
          Thank you! Your budget numbers will be in your email within the next
          24 working hours.
        </h2>
        {/* <button type="submit" className="btn btn-dark btn-lg btn-block">
          Submit
        </button> */}
        <p className="forgot-password text-right">&copy;Irina Buse 2021</p>
      </div>
    );
  }
}

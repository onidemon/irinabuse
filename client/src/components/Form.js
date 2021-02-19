import React, { Component } from "react";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Button } from "react-bootstrap";
import * as emailjs from "emailjs-com";

export default class Form extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    howMuchMoney: "",
    averagePrice: "",
    howManyHoursProduct: "",
    dedicatedHours: "",
    weeks: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      email,
      subject,
      message,
      howMuchMoney,
      averagePrice,
      howManyHoursProduct,
      dedicatedHours,
      weeks,
    } = this.state;
    let templateParams = {
      from_name: email,
      to_name: "Irina Buse",
      subject: "budget",
      name,
      email,
      subject,
      howMuchMoney,
      averagePrice,
      howManyHoursProduct,
      dedicatedHours,
      weeks,
    };
    emailjs.send(
      "service_tfwhf88",
      "template_g39p1g8",
      templateParams,
      "user_RXkKdm6cErTaGVeumlCjb"
    );
    this.resetForm();
    this.props.handler();
  };
  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      howMuchMoney: "",
      averagePrice: "",
      howManyHoursProduct: "",
      dedicatedHours: "",
      weeks: "",
    });
  };
  handleChange = (param, e) => {
    console.log(e.target.value);
    console.log(this.state);
    this.setState({ [param]: e.target.value });
  };

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>My Business budget</h3>
        <div className="form-group">
          <label>Name</label>

          <input
            type="text"
            className="form-control"
            placeholder="Full name"
            value={this.state.name}
            onChange={this.handleChange.bind(this, "name")}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={this.state.email}
            onChange={this.handleChange.bind(this, "email")}
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>
            How much money do you plan to make in the next 12 months
          </label>

          <Popup
            modal={true}
            style={{ marginLeft: "10px", width: "550px" }}
            trigger={
              <Button variant="link" onClick={this.PopupExample}>
                <BsBoxArrowInUpRight />
              </Button>
            }
            position="right center"
          >
            <div>
              This the number associated with REVENUE. It represents the total
              amount of money you will collect based on selling your product or
              service.
              <br />
              <br />
              All the other costs and expenses will be deducted from it. Also
              you will pay taxes from it. Basically it is total sales $ you want
              to set as an objective for the next 12 months.
            </div>
          </Popup>

          <input
            type="text"
            className="form-control"
            placeholder=""
            value={this.state.howMuchMoney}
            onChange={this.handleChange.bind(this, "howMuchMoney")}
          />
        </div>

        <div className="form-group">
          <label>What is the average price of your product</label>
          <Popup
            modal={true}
            style={{ marginLeft: "10px", width: "550px" }}
            trigger={
              <Button variant="link" onClick={this.PopupExample}>
                <BsBoxArrowInUpRight />
              </Button>
            }
            position="right center"
          >
            <div>
              Usually when you just start your business you will have one solid
              offering out and try to make the best of it, learn how to control
              the process and when balanced enough, diversify your offer. In
              that case you need to write here the price of that first product
              or service.
              <br />
              <br />
              Example:
              <br />
              <br />
              4 session coaching package for $1500
              <br />
              <br />
              You will enter 1500.
              <br />
              <br />
              However, in some exceptional cases, people choose to make
              available more than one service or physical product at a time. In
              that case you need to enter here the weighted average of your
              portfolio. It becomes more complicated but here is an example:
              <br />
              <br />
              500 consulting sessions at $150 each and 300 budget templates at
              $200 each.
              <br />
              <br />
              [(500 x 150) + (300 x 200)] / (500 + 300) = $168.75
              <br />
              <br />
              The price you will enter in this field will be: 168.75
            </div>
          </Popup>
          <input
            type="text"
            className="form-control"
            placeholder=""
            value={this.state.averagePrice}
            onChange={this.handleChange.bind(this, "averagePrice")}
          />
        </div>

        <div className="form-group">
          <label>How many hours is the product made of</label>
          <Popup
            modal={true}
            style={{ marginLeft: "10px", width: "550px" }}
            trigger={
              <Button variant="link" onClick={this.PopupExample}>
                <BsBoxArrowInUpRight />
              </Button>
            }
            position="right center"
          >
            <div>
              In the service industry it is customary to offer packages of
              multiple sessions/ hours. For example 4 session coaching package
              is made of 4 individual sessions. You will enter the number 4..
            </div>
          </Popup>
          <input
            type="text"
            className="form-control"
            placeholder=""
            value={this.state.howManyHoursProduct}
            onChange={this.handleChange.bind(this, "howManyHoursProduct")}
          />
        </div>

        <div className="form-group">
          <label>
            How many hours per day can you dedicate to this business
          </label>
          <Popup
            modal={true}
            style={{ marginLeft: "10px", width: "550px" }}
            trigger={
              <Button variant="link" onClick={this.PopupExample}>
                <BsBoxArrowInUpRight />
              </Button>
            }
            position="right center"
          >
            <div>
              Some people start a business full time whereas others prefer to
              have it as a side hassle first. Obviously the amount time they
              will be able to dedicate to this project will be different.
              Knowing how much you can commit to from the beginning helps
              setting realistic goals and expectations. In this field you need
              to enter the number of hours you are confident that you can
              dedicate consistently 5 days a week to your new project.
              <br />
              <br />
              Example:
              <br />
              <br />
              This is my full time business and I am fully dedicating my
              resources to it. It is my full time “job”. You will enter 8 in
              this field.
              <br />
              <br />
              But if you want to start slow, let’s say that you can do this for
              2 hours a day, 5 days a week. In that case you will enter the
              number 2.
            </div>
          </Popup>
          <input
            type="text"
            className="form-control"
            placeholder=""
            value={this.state.dedicatedHours}
            onChange={this.handleChange.bind(this, "dedicatedHours")}
          />
        </div>

        <div className="form-group">
          <label>
            In How many weeks do you want to accomplish your goal? (max 48)
          </label>
          <Popup
            modal={true}
            style={{ marginLeft: "10px", width: "550px" }}
            trigger={
              <Button variant="link" onClick={this.PopupExample}>
                <BsBoxArrowInUpRight />
              </Button>
            }
            position="right center"
          >
            <div>
              Sometimes we have goals that span over a shorter period of time
              than one full year. If this is your case, then enter the number of
              weeks you are envisioning. For example 26 for a 6 month long
              project.
              <br />
              <br />
              Please keep in mind that you will need a ramp up time if you are
              just starting out on this project. With all the administrative
              tasks and marketing it will probably take you about 4 weeks until
              you start consistently landing clients. That’s why the max time
              that makes sense in this field is 48, which would apply to a one
              year goal.
              <br />
              <br /> Notes:
              <br />
              <br /> • The less sessions in a package, the higher the price
              needs to be so that it justifies all the work it takes to acquire
              the customer (find them, get to know them, develop a relationship
              with them and finally make an offer when they are ready)
            </div>
          </Popup>
          <input
            type="text"
            className="form-control"
            placeholder=""
            value={this.state.weeks}
            onChange={this.handleChange.bind(this, "weeks")}
          />
        </div>
        <div>
          <p>
            Notes:
            <br />
            <br />* In this business model every client wil be individually
            contacted and a relationship will be developed through a sequence of
            personalized messages
            <br />
            <br />
            *It is appropriate to use for high ticket items and less clients
            <br />
            <br />
            *The minimum configuration is for example 25k/yr and $865/package
          </p>
        </div>
        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Submit
        </button>
        <p className="forgot-password text-right">&copy;Irina Buse 2021</p>
      </form>
    );
  }
}

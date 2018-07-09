import React from "react";
import { withRouteData } from "react-static";

class Other extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  _encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  handleSubmit = e => {
    console.log("Sending", this.state);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this._encode({ "form-name": "contact2", ...this.state })
    })
      .then(response => {
        console.log("Finished");
        console.log(response);
      })
      .catch(error => {
        console.log("errored");
        console.log(error);
      });

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1>{this.props.other.other.title}</h1>
              <h3>{this.props.other.other.exampleText}</h3>
              <hr />
              <form
                onSubmit={this.handleSubmit}
                name="contact2"
                netlify="true"
                action="/other"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <p>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </p>
                <p>
                  <label>
                    Your Name:{" "}
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={this.handleChange}
                    />
                  </label>
                </p>
                <p>
                  <label>
                    Your Email:{" "}
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                    />
                  </label>
                </p>
                <p>
                  <label>
                    Message:{" "}
                    <textarea
                      name="message"
                      value={message}
                      onChange={this.handleChange}
                    />
                  </label>
                </p>
                <p>
                  <button type="submit">Send</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouteData(Other);

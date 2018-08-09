import React from "react";

import styles from "./subscribeSection.scss";
import DefaultInput from "../defaultInput/DefaultInput";
import PrimaryButton from "../primaryButton/PrimaryButton";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  /* Here’s the juicy bit for posting the form submission */
  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "subscribe", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { email } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <DefaultInput
          placeholder="Email"
          type="email"
          aria-label="newsletter email"
          autoComplete="email"
          className={styles.input}
          value={email}
          onChange={this.handleChange}
        />
        <PrimaryButton className={`${styles.button}`}>Subscribe</PrimaryButton>
      </form>
    );
  }
}

class SubscribeSection extends React.Component {
  render() {
    const { heading, text } = this.props;
    return (
      <div className="container">
        <div className={`row ${styles.row}`}>
          <div className={`col-xs-12 col-lg-5 ${styles.description}`}>
            <h2 className="style-as-h3">{heading}</h2>
            <p>{text}</p>
          </div>
          <SubscribeForm
            className={`col-xs-12 col-md-10 col-md-offset-1 col-lg-6 col-lg-offset-1 ${
              styles.action
            }`}
          />
        </div>
      </div>
    );
  }
}

export default SubscribeSection;

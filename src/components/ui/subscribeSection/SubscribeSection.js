import React from "react";

import styles from "./subscribeSection.scss";
import DefaultInput from "../defaultInput/DefaultInput";
import PrimaryButton from "../primaryButton/PrimaryButton";

const _encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", bdaySurprise: "" };
  }

  _clearFormData = ({ submitted }) => {
    this.setState({ email: "", bdaySurprise: "", submitted });
  };

  /* Here’s the juicy bit for posting the form submission */
  _handleSubmit = event => {
    event.preventDefault();

    let errors = false;
    const data = Object.assign({}, this.state);
    delete data.submitted;
    delete data.errors;

    // Form validation
    if (data.email.length === 0) {
      errors = true;
      this.setState({ errors: true });
    } else {
      errors = false;
      this.setState({ errors: false });
    }

    if (!errors) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: _encode({ "form-name": "subscribe", ...data })
      })
        .then(() => {
          this._clearFormData({ submitted: true });
        })
        .catch(error => alert(error));
    }
  };

  _handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { email, bdaySurprise, submitted } = this.state;
    return !submitted ? (
      <form
        data-netlify="true"
        data-netlify-honeypot="bdaySurprise"
        onSubmit={this._handleSubmit}
        {...this.props}
      >
        <DefaultInput
          name="bdaySurprise"
          value={bdaySurprise}
          className="sr-text"
          autoComplete="off"
          onChange={this._handleChange}
        />
        <DefaultInput
          name="email"
          value={email}
          placeholder="Email"
          type="email"
          aria-label="newsletter email"
          autoComplete="email"
          className={styles.input}
          onChange={this._handleChange}
        />
        <PrimaryButton className={`${styles.button}`}>Subscribe</PrimaryButton>
      </form>
    ) : (
      <p className={`${styles.successText}`}>
        Thank you! You have been sent a confirmation email to subscribe.
      </p>
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

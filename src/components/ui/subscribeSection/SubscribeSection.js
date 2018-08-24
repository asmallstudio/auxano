import React from "react";

import styles from "./subscribeSection.scss";
import DefaultInput from "../defaultInput/DefaultInput";
import PrimaryButton from "../primaryButton/PrimaryButton";

class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  _clearFormData = ({ submitted }) => {
    this.setState({ email: "", submitted });
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
      this._clearFormData({ submitted: true });
    }
  };

  _handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { email, submitted } = this.state;
    return !submitted ? (
      <form onSubmit={this._handleSubmit} {...this.props}>
        <DefaultInput
          name="email"
          value={email}
          id="newsletter-email-input"
          placeholder="Email"
          type="email"
          aria-label="newsletter email"
          autoComplete="email"
          required
          onChange={this._handleChange}
          className={styles.input}
        />
        <PrimaryButton className={`${styles.button}`}>Send</PrimaryButton>
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
            <h2>{heading}</h2>
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

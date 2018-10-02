import React from "react";

import styles from "./subscribeSection.scss";
import DefaultInput from "../defaultInput/DefaultInput";
import PrimaryButton from "../primaryButton/PrimaryButton";

class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "" };
  }

  _clearFormData = ({ submitted }) => {
    this.setState({ name: "", email: "", submitted });
  };

  /* Here’s the juicy bit for posting the form submission */
  _handleSubmit = event => {
    event.preventDefault();

    let errors = false;
    const data = Object.assign({}, this.state);
    delete data.submitted;
    delete data.errors;

    // Form validation
    if (data.email.length === 0 || data.email.length === 0) {
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
    const { name, email, submitted } = this.state;
    return !submitted ? (
      <form onSubmit={this._handleSubmit} {...this.props}>
        <div className={styles.form}>
          <div className={styles.formBlock}>
            <label htmlFor="newsletter-name-input">Name</label>
            <DefaultInput
              name="name"
              value={name}
              id="newsletter-name-input"
              placeholder="Kato Orji"
              type="text"
              autoComplete="name"
              required
              onChange={this._handleChange}
            />
          </div>
          <div className={styles.formBlock}>
            <label htmlFor="newsletter-email-input">Email</label>
            <DefaultInput
              name="email"
              value={email}
              id="newsletter-email-input"
              placeholder="kato@example.com"
              type="email"
              autoComplete="email"
              required
              onChange={this._handleChange}
            />
          </div>
          <div className={styles.formBlock}>
            <PrimaryButton>Send</PrimaryButton>
          </div>
        </div>
      </form>
    ) : (
      <p className={`${styles.successText}`}>
        Thank you! We will follow up via email shortly.
      </p>
    );
  }
}

class SubscribeSection extends React.Component {
  render() {
    const { heading, text, className = "", ...restProps } = this.props;
    return (
      <div className={`container ${className}`} {...restProps}>
        <div className={`row ${styles.row}`}>
          <div className={`col-xs-12 col-lg-6 ${styles.description}`}>
            <h2>{heading}</h2>
            <p>{text}</p>
          </div>
          <SubscribeForm
            className={`col-xs-12 col-md-10 col-md-offset-1 col-lg-5 col-lg-offset-1 ${
              styles.action
            }`}
          />
        </div>
      </div>
    );
  }
}

export default SubscribeSection;

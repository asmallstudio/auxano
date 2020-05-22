import React from "react";

import styles from "./subscribeSection.module.scss";
import DefaultInput from "../defaultInput/DefaultInput";
import PrimaryButton from "../primaryButton/PrimaryButton";

const _encode = (data) => {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
};

class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", bdaySurprise: "" };
  }

  _clearFormData = ({ submitted }) => {
    this.setState({ name: "", email: "", bdaySurprise: "", submitted });
  };

  /* Here’s the juicy bit for posting the form submission */
  _handleSubmit = (event) => {
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
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: _encode({ "form-name": "leads", ...data }),
      })
        .then(() => {
          this._clearFormData({ submitted: true });
        })
        .catch(() => {
          this.setState({ submitError: true });
        });
    }
  };

  _handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, bdaySurprise, submitted } = this.state;
    return !submitted ? (
      <form
        name="leads"
        data-netlify="true"
        data-netlify-honeypot="bdaySurprise"
        onSubmit={this._handleSubmit}
        {...this.props}
      >
        <div className={styles.form}>
          <div className={styles.formBlock}>
            <DefaultInput
              name="bdaySurprise"
              value={bdaySurprise}
              className="sr-only"
              autoComplete="off"
              onChange={this._handleChange}
            />
            <label htmlFor="newsletter-name-input">Name</label>
            <DefaultInput
              name="name"
              value={name}
              id="newsletter-name-input"
              placeholder="First Last"
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
              placeholder="name@example.com"
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

export default function SubscribeSection({
  heading,
  text,
  className = "",
  ...restProps
}) {
  return (
    <div className={`container ${className}`} {...restProps}>
      <div className={`row ${styles.row}`}>
        <div className={`col-xs-12 col-lg-6 ${styles.description}`}>
          <h2>{heading}</h2>
          <p>{text}</p>
        </div>
        <SubscribeForm
          className={`col-xs-12 col-md-10 col-md-offset-1 col-lg-5 col-lg-offset-1 ${styles.action}`}
        />
      </div>
    </div>
  );
}

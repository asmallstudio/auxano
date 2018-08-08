import React from "react";

import styles from "./subscribeSection.scss";
import DefaultInput from "../defaultInput/DefaultInput";
import PrimaryButton from "../primaryButton/PrimaryButton";

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
          <form
            name="subscribe"
            method="POST"
            netlify
            className={`col-xs-12 col-md-10 col-md-offset-1 col-lg-6 col-lg-offset-1 ${
              styles.action
            }`}
          >
            <DefaultInput
              placeholder="Email"
              type="email"
              aria-label="newsletter email"
              autoComplete="email"
              className={styles.input}
            />
            <PrimaryButton className={`${styles.button}`}>
              Subscribe
            </PrimaryButton>
          </form>
        </div>
      </div>
    );
  }
}

export default SubscribeSection;

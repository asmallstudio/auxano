import React from "react";
import { withRouteData, Head } from "react-static";
import { getFullPageTitle } from "../../../lib/utils/copy";

import styles from "./contact.scss";
import DefaultInput from "../../ui/defaultInput/DefaultInput";
import DefaultTextArea from "../../ui/defaultTextArea/DefaultTextArea";
import PrimaryButton from "../../ui/primaryButton/PrimaryButton";
import SubscribeSection from "../../ui/subscribeSection/SubscribeSection";

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { contact } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{getFullPageTitle(contact.pageTitle)}</title>
        </Head>
        <div className="container">
          <h1 className="sr-text">{contact.pageTitle}</h1>
          <div className="row">
            <section
              className={`col-xs-12 col-md-6 ${styles.contactSection} ${
                styles.contactForm
              }`}
            >
              <h2>{contact.form.title}</h2>
              <form>
                <label htmlFor="name-input">Name</label>
                <DefaultInput
                  id="name-input"
                  placeholder="Alex Garcia"
                  type="text"
                  autoComplete="name"
                  className={styles.input}
                />
                <label htmlFor="email-input">Email</label>
                <DefaultInput
                  id="email-input"
                  placeholder="alex@example.com"
                  type="email"
                  autoComplete="email"
                  className={styles.input}
                />
                <label htmlFor="subject-input">Subject</label>
                <DefaultInput
                  id="subject-input"
                  type="text"
                  className={styles.input}
                />
                <label htmlFor="body-input">Your Message</label>
                <DefaultTextArea id="body-input" className={styles.input} />
                <div className={styles.submitButtonWrapper}>
                  <PrimaryButton>Send</PrimaryButton>
                </div>
              </form>
            </section>
            <section
              className={`col-xs-12 col-md-5 col-md-offset-1 ${
                styles.contactSection
              } ${styles.contactInfo}`}
            >
              <h2>{contact.info.title}</h2>
              <address>
                <p className={`style-as-h3 ${styles.contactInfoHeader}`}>
                  Email
                </p>
                <a href="mailto:info@auxanoadvisors.com">
                  info@auxanoadvisors.com
                </a>
                <p className={`style-as-h3 ${styles.contactInfoHeader}`}>
                  Phone
                </p>
                <a href="tel:+14258891261">(425) 889-1261</a>
                <p className={`style-as-h3 ${styles.contactInfoHeader}`}>
                  Address
                </p>
                <p>
                  10900 NE 4th Street
                  <br />
                  Suite 1950
                  <br />
                  Bellevue, WA 98004
                </p>
              </address>
            </section>
          </div>
        </div>
        <SubscribeSection
          heading={contact.subscribe.heading}
          text={contact.subscribe.text}
        />
      </React.Fragment>
    );
  }
}

export default withRouteData(Contact);

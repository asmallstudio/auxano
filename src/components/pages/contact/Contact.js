import React from "react";
import { withRouteData, Head, Link } from "react-static";
import { getFullPageTitle } from "../../../lib/utils/copy";
import constants from "../../../lib/constants.json";

import styles from "./contact.scss";
import DefaultInput from "../../ui/defaultInput/DefaultInput";
import DefaultTextArea from "../../ui/defaultTextArea/DefaultTextArea";
import PrimaryButton from "../../ui/primaryButton/PrimaryButton";
import IFrame from "react-iframe";
import SubscribeSection from "../../ui/subscribeSection/SubscribeSection";

const _encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      body: "",
      bdaySurprise: "",
      errors: false,
      submitted: false
    };
  }

  _clearFormData = ({ submitted }) => {
    this.setState({
      name: "",
      email: "",
      subject: "",
      body: "",
      bdaySurprise: "",
      submitted
    });
  };

  /* Here’s the juicy bit for posting the form submission */
  _handleSubmit = event => {
    event.preventDefault();

    let errors = false;
    const data = Object.assign({}, this.state);
    delete data.submitted;
    delete data.errors;

    // Form validation
    if (
      data.name.length === 0 ||
      data.email.length === 0 ||
      data.body.length === 0
    ) {
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
        body: _encode({ "form-name": "contact", ...data })
      })
        .then(() => {
          this._clearFormData({ submitted: true });
        })
        .catch(error => alert(error));
    }
  };

  _handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const {
      name,
      email,
      subject,
      body,
      bdaySurprise,
      submitted,
      errors
    } = this.state;
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
        <label htmlFor="name-input">Name</label>
        <DefaultInput
          name="name"
          value={name}
          id="name-input"
          placeholder="Alex Garcia"
          type="text"
          autoComplete="name"
          required
          className={styles.input}
          onChange={this._handleChange}
        />
        <label htmlFor="email-input">Email</label>
        <DefaultInput
          name="email"
          value={email}
          id="email-input"
          placeholder="alex@example.com"
          type="email"
          autoComplete="email"
          required
          className={styles.input}
          onChange={this._handleChange}
        />
        <label htmlFor="subject-input">Subject</label>
        <DefaultInput
          name="subject"
          value={subject}
          id="subject-input"
          type="text"
          className={styles.input}
          onChange={this._handleChange}
        />
        <label htmlFor="body-input">Your Message</label>
        <DefaultTextArea
          name="body"
          value={body}
          id="body-input"
          required
          className={styles.input}
          onChange={this._handleChange}
        />
        <div className={styles.submitButtonWrapper}>
          <PrimaryButton>Send</PrimaryButton>
        </div>

        {errors && (
          <p className={`${styles.errorText}`}>
            Please check you have filled out the form correctly.
          </p>
        )}
      </form>
    ) : (
      <p className={`${styles.successText}`}>
        Success! We have received your message and will get back to you shortly.
      </p>
    );
  }
}

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
              <ContactForm />
            </section>
            <section
              className={`col-xs-12 col-md-5 col-md-offset-1 ${
                styles.contactSection
              } ${styles.contactInfo}`}
            >
              <h2>{contact.info.title}</h2>
              <address itemScope itemType="http://schema.org/Organization">
                <meta itemProp="name" content="Auxano Advisors" />
                <meta itemProp="url" content={constants.siteMeta.url} />
                <p className={`style-as-h3 ${styles.contactInfoHeader}`}>
                  Email
                </p>
                <a href="mailto:info@auxanoadvisors.com" itemProp="email">
                  info@auxanoadvisors.com
                </a>
                <p className={`style-as-h3 ${styles.contactInfoHeader}`}>
                  Phone
                </p>
                <a href="tel:+14258891261" itemProp="telephone">
                  (425) 889-1261
                </a>
                <p className={`style-as-h3 ${styles.contactInfoHeader}`}>
                  Address
                </p>
                <p
                  itemProp="address"
                  itemScope
                  itemType="http://schema.org/PostalAddress"
                >
                  <span itemProp="streetAddress">
                    10900 NE 4th Street
                    <br />
                    Suite 1950
                  </span>
                  <br />
                  <span itemProp="addressLocality">Bellevue</span>,{" "}
                  <span itemProp="addressRegion">WA</span>{" "}
                  <span itemProp="postalCode">98004</span>
                  <meta itemProp="addressCountry" content="US" />
                </p>
              </address>
            </section>
          </div>
        </div>
        <div className={`container--fluid ${styles.dingusDotContainer}`}>
          <div className="container">
            <div className={`row ${styles.dingusDotRelative}`}>
              <section className={`col-xs-12 ${styles.mapSection}`}>
                <IFrame
                  url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.6162509396745!2d-122.19616678423552!3d47.61415107918512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906c89d25fcd9b%3A0x2b68c721fc3f0f59!2sAuxano+Advisors%2C+LLC!5e0!3m2!1sen!2sus!4v1533505977008"
                  width="100%"
                  position="relative"
                  frameBorder="0"
                  className={styles.mapEmbed}
                  style={{ border: 0 }}
                />
                <p className={styles.mapLinks}>
                  <Link to="https://goo.gl/maps/y3WodKyfL7w">
                    Open in Google Maps
                  </Link>
                  <br />
                  <Link to="https://maps.apple.com/?address=10900%20NE%204th%20St,%20Unit%201950,%20Bellevue,%20WA%20%2098004,%20United%20States&auid=4419463368018388351&ll=47.614058,-122.194218&lsp=9902&q=Auxano%20Advisors&t=m">
                    Open in Apple Maps
                  </Link>
                </p>
              </section>
              <div className={styles.dingusDot} />
            </div>
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
import React from "react";
import { Head } from "react-static";
import { withSiteAndRouteData } from "../../../lib/utils/hoc";
import { pageChange } from "../../../lib/utils/pageChange";
import {
  getFullPageTitle,
  pickFirstAvailableString,
  phoneNumberUnformat
} from "../../../lib/utils/copy";

import constants from "../../../lib/constants.json";

import styles from "./contact.scss";
import AmbiLink from "../../ui/ambiLink/AmbiLink";
import DefaultInput from "../../ui/defaultInput/DefaultInput";
import DefaultTextArea from "../../ui/defaultTextArea/DefaultTextArea";
import PrimaryButton from "../../ui/primaryButton/PrimaryButton";
import IFrame from "react-iframe";
import SubscribeSection from "../../ui/subscribeSection/SubscribeSection";

const _encode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
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
      submitError: false,
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
      submitError: false,
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
        .catch(() => {
          this.setState({ submitError: true });
        });
    }
  };

  _handleChange = e => this.setState({ [e.target.name]: e.target.value });

  componentDidMount() {
    pageChange();
  }

  render() {
    const {
      name,
      email,
      subject,
      body,
      bdaySurprise,
      submitError,
      submitted,
      errors
    } = this.state;

    const { fallbackEmail, ...restProps } = this.props;

    if (!submitted && !submitError) {
      return (
        <form
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bdaySurprise"
          onSubmit={this._handleSubmit}
          {...restProps}
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
            placeholder="First Last"
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
            placeholder="name@example.com"
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
      );
    } else if (submitted && !submitError) {
      return (
        <p className={`${styles.successText}`}>
          Success! We have received your message and will get back to you
          shortly.
        </p>
      );
    }
    return (
      <p className={`${styles.errorText}`}>
        Sorry, the form did not submit correctly. Please email us instead at{" "}
        <a href={`mailto:${fallbackEmail}`}>{fallbackEmail}</a>.
      </p>
    );
  }
}

const Contact = props => {
  const { contact, siteData } = props;

  return (
    <React.Fragment>
      <Head>
        <title>{getFullPageTitle(contact.pageTitle)}</title>
        <meta
          name="description"
          content={pickFirstAvailableString(
            contact.pageDescription,
            siteData.siteDescription
          )}
        />
      </Head>
      <div className={`container--fluid ${styles.dingusDotContainer}`}>
        <div className="container">
          <h1 className="sr-text">{contact.pageTitle}</h1>
          <div className="row">
            <section
              className={`col-xs-12 col-md-6 ${styles.contactSection} ${
                styles.contactForm
              } dg-form`}
            >
              <h2>{contact.form.title}</h2>
              <ContactForm fallbackEmail={siteData.companyInfo.email} />
            </section>
            <section
              className={`col-xs-12 col-md-5 col-md-offset-1 ${
                styles.contactSection
              } ${styles.contactInfo} dg-info`}
            >
              <h2>{contact.info.title}</h2>
              <address itemScope itemType="http://schema.org/Organization">
                <div className={styles.contactInfoSection}>
                  <meta itemProp="name" content="Auxano Advisors" />
                  <meta itemProp="url" content={constants.siteMeta.url} />
                  <h3 className="sr-text">Email</h3>
                  <a
                    href={`mailto:${siteData.companyInfo.email}`}
                    itemProp="email"
                  >
                    {siteData.companyInfo.email}
                  </a>
                </div>
                <div className={styles.contactInfoSection}>
                  <h3 className="sr-text">Office Phone</h3>
                  <a
                    href={`tel:${phoneNumberUnformat(
                      siteData.companyInfo.phone1
                    )}`}
                    itemProp="telephone"
                  >
                    {siteData.companyInfo.phone1}
                  </a>
                  <br />
                  <h3 className="sr-text">Toll-free Phone</h3>
                  <a
                    href={`tel:${phoneNumberUnformat(
                      siteData.companyInfo.phone2
                    )}`}
                    itemProp="telephone"
                  >
                    {siteData.companyInfo.phone2}
                  </a>
                </div>
                <div className={styles.contactInfoSection}>
                  <h3 className="sr-text">Address</h3>
                  <p
                    itemProp="address"
                    itemScope
                    itemType="http://schema.org/PostalAddress"
                  >
                    <span itemProp="streetAddress">
                      {siteData.companyInfo.address.line1}
                      <br />
                      {siteData.companyInfo.address.line2}
                    </span>
                    <br />
                    <span itemProp="addressLocality">
                      {siteData.companyInfo.address.city}
                    </span>
                    ,{" "}
                    <span itemProp="addressRegion">
                      {siteData.companyInfo.address.state}
                    </span>{" "}
                    <span itemProp="postalCode">
                      {siteData.companyInfo.address.zipcode}
                    </span>
                    <meta itemProp="addressCountry" content="US" />
                  </p>
                </div>
              </address>
              <section className={`col-xs-12 ${styles.mapSection}`} />
              <div
                className={`${styles.contactInfoSection} ${
                  styles.dingusDotRelative
                }`}
              >
                <IFrame
                  url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.6162509396745!2d-122.19616678423552!3d47.61415107918512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906c89d25fcd9b%3A0x2b68c721fc3f0f59!2sAuxano+Advisors%2C+LLC!5e0!3m2!1sen!2sus!4v1533505977008"
                  width="100%"
                  position="relative"
                  frameBorder="0"
                  className={styles.mapEmbed}
                  style={{ border: 0 }}
                />
                <p className={styles.mapLinks}>
                  <AmbiLink to="https://goo.gl/maps/y3WodKyfL7w">
                    Open in Google Maps
                  </AmbiLink>
                  <br />
                  <AmbiLink to="https://maps.apple.com/?address=10900%20NE%204th%20St,%20Unit%201950,%20Bellevue,%20WA%20%2098004,%20United%20States&auid=4419463368018388351&ll=47.614058,-122.194218&lsp=9902&q=Auxano%20Advisors&t=m">
                    Open in Apple Maps
                  </AmbiLink>
                </p>
                <div className={styles.dingusDot} />
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="container--fluid dg-imageDivider">
        <img
          className={styles.imageDivider}
          src={contact.imageDivider.src}
          alt={contact.imageDivider.alt}
        />
      </div>
      <SubscribeSection
        heading={pickFirstAvailableString(
          contact.subscribe.heading,
          siteData.subscribe.heading
        )}
        text={pickFirstAvailableString(
          contact.subscribe.text,
          siteData.subscribe.text
        )}
        className="dg-subscribe"
      />
    </React.Fragment>
  );
};

export default withSiteAndRouteData(Contact);

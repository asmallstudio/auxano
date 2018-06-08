import React from "react";
import { withRouteData } from "react-static";
import Markdown from "react-markdown";

import styles from "./contactUs.scss";
import Spacer from "../../ui/spacer/Spacer";

class ContactUs extends React.Component {
  render() {
    const { home } = this.props;
    return (
      <div>
        <div className={styles.container}>
          <a className="anchor" id="contact-us" />
          <div className={styles.row}>
            <div className="col-xs-12">
              <Header title="General Inquiries" />
              <Link
                title="hello@transitus.org"
                to="mailto:hello@transitus.org"
              />
              <Link title="(123) 456-7890" to="tel:1-123-456-7890" />
              <Spacer className={styles.spacer} />
              <Header title="Location" />
              <Link
                title="1200 Chamber Rd., Columbus OH 43212"
                to="http://maps.google.com/?q=1200 Chambers Rd, Columbus OH 43212"
              />
              <Spacer className={styles.spacer} />
              <Header title="Follow Us" />

              <Link title="Facebook" to="/" />
              <Link title="Twitter" to="/" />
              <Link title="Instagram" to="/" />
              <Link title="LinkedIn" to="/" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Header = ({ title }) => (
  <span className={styles.headerText}>{title}</span>
);

const Link = ({ title, to }) => (
  <div>
    <a href={to}>
      <span className={styles.linkText}>{title}</span>
    </a>
  </div>
);

export default withRouteData(ContactUs);

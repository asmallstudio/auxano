import React from "react";
import { withRouteData, Head } from "react-static";
import { getFullPageTitle } from "../../../lib/utils/copy";

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
            <div className="col-xs-12 col-md-6">
              <h2>{contact.form.title}</h2>
            </div>
            <div className="col-xs-12 col-md-6">
              <h2>{contact.info.title}</h2>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouteData(Contact);

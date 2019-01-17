import React from "react";
import { Head } from "react-static";
import { withSiteAndRouteData } from "../../../lib/utils/hoc";
import { pageChange } from "../../../lib/utils/pageChange";
import {
  getFullPageTitle,
  pickFirstAvailableString
} from "../../../lib/utils/copy";

import styles from "./generations.scss";
import Markdown from "react-markdown";
import FullWidthSectionText from "../../ui/fullWidthSectionText/FullWidthSectionText";
import FullWidthSectionActionLink from "../../ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "../../ui/subscribeSection/SubscribeSection";

class Generations extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    pageChange();
  }

  render() {
    const { generations, siteData } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{getFullPageTitle(generations.pageTitle)}</title>
          <meta
            name="description"
            content={pickFirstAvailableString(
              generations.pageDescription,
              siteData.siteDescription
            )}
          />
        </Head>
        <section className={`container--fluid ${styles.heroContainer} dg-hero`}>
          <div className="container">
            <div className="row">
              <div className={`col-xs-12 col-md-9 ${styles.heroTextContainer}`}>
                <h1>{generations.hero.title}</h1>
                <p className="style-as-h2">{generations.hero.subtitle}</p>
              </div>
            </div>
          </div>
        </section>
        <FullWidthSectionText
          text={generations.body.description1}
          className={`dg-description1 ${styles.pageBody}`}
        />
        <section className="container">
          <div className="row">
            <div className={`col-xs-12 ${styles.textPlain}`}>
              <Markdown
                allowedTypes={["text", "paragraph", "emphasis", "strong"]}
                className={styles.pageBody}
              >
                {generations.body.description2}
              </Markdown>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2 className={styles.optionsHeader}>
                {generations.body.options.heading}
              </h2>
            </div>
            <div className="row">
              <ul className={`col-xs-12 ${styles.textList} dg-list`}>
                {generations.body.options.list.map((item, i) => (
                  <li key={i} className="style-as-p">
                    <Markdown allowedTypes={["text", "emphasis", "strong"]} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <FullWidthSectionText
          text={generations.body.closing}
          className={`${styles.pageBodyClosing} dg-closing`}
        />
        <FullWidthSectionActionLink
          linkText={pickFirstAvailableString(
            generations.actionBanner.text,
            siteData.actionBanner.text
          )}
          to={pickFirstAvailableString(
            generations.actionBanner.link,
            siteData.actionBanner.link
          )}
          className="dg-actionBanner"
        />
        <SubscribeSection
          heading={pickFirstAvailableString(
            generations.subscribe.heading,
            siteData.subscribe.heading
          )}
          text={pickFirstAvailableString(
            generations.subscribe.text,
            siteData.subscribe.text
          )}
          className="dg-subscribe"
        />
      </React.Fragment>
    );
  }
}

export default withSiteAndRouteData(Generations);

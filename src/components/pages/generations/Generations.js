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
              <div className={`col-xs-12 col-md-6 ${styles.heroTextContainer}`}>
                <h1>{generations.hero.title}</h1>
                <Markdown source={generations.hero.subtitle} />
              </div>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="row">
            <div className={`col-xs-12 col-md-8 ${styles.pageBody}`}>
              <Markdown source={generations.body.description} />
            </div>
            <h2>{generations.body.options.heading}</h2>
            <ul>
              {generations.body.options.list.map((item, i) => (
                <li key={i}>
                  <Markdown allowedTypes={["text", "emphasis", "strong"]} />
                  {item}
                </li>
              ))}
            </ul>
            <p>{generations.body.closing}</p>
          </div>
        </section>
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

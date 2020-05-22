import React from "react";
import Head from "next/head";
import { getFullPageTitle, createSlugFromTitle } from "@asmallstudio/utilities";
import { NextAmbiLink } from "@asmallstudio/components";
import constants from "lib/constants.json";

import LinkWithArrow from "components/ui/linkWithArrow/LinkWithArrow";
import FullWidthSectionActionLink from "components/ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "components/ui/subscribeSection/SubscribeSection";

import styles from "./index.module.scss";

function _formatPositions(positions) {
  return positions.join(" | ");
}

export default function Index({ siteData, team }) {
  const fullMembers = team.members.filter(
    (member) => member.isStrategicPartner === false
  );
  const strategicPartners = team.members.filter(
    (member) => member.isStrategicPartner === true
  );

  return (
    <>
      <Head>
        <title>{getFullPageTitle("Team", constants.siteMeta.title)}</title>
        <meta name="description" content={siteData.siteDescription} />
      </Head>
      <section className="container">
        <div className="row">
          <div className={`col-xs-12 ${styles.teamList}`}>
            <h1>Meet Our Team</h1>
            <ul>
              {fullMembers.map((member, i) => (
                <li key={i} className={styles.teamMember}>
                  <NextAmbiLink
                    as={`/team/${member.slug}`}
                    href="/team/[member]"
                  >
                    <img src={member.image} alt="" />
                  </NextAmbiLink>
                  <NextAmbiLink
                    as={`/team/${member.slug}`}
                    href="/team/[member]"
                    className="style-as-h3"
                  >
                    {member.title}
                  </NextAmbiLink>
                  <div className="style-as-p">
                    {_formatPositions(member.positions)}
                  </div>
                  <LinkWithArrow
                    as={`/team/${member.slug}`}
                    to="/team/[member]"
                    className={styles.arrowLink}
                  >
                    Read Bio
                  </LinkWithArrow>
                </li>
              ))}
            </ul>
            <h2>Strategic Partners</h2>
            <ul>
              {strategicPartners.map((member, i) => (
                <li key={i} className={styles.teamMember}>
                  <NextAmbiLink
                    as={`/team/${member.slug}`}
                    href="/team/[member]"
                  >
                    <img src={member.image} alt="" />
                  </NextAmbiLink>
                  <NextAmbiLink
                    as={`/team/${member.slug}`}
                    href="/team/[member]"
                    className="style-as-h3"
                  >
                    {member.title}
                  </NextAmbiLink>
                  <div className="style-as-p">
                    {_formatPositions(member.positions)}
                  </div>
                  {typeof member.partnerCompany !== "undefined" &&
                    member.partnerCompany !== "" && (
                      <div className="style-as-p">{member.partnerCompany}</div>
                    )}
                  <LinkWithArrow
                    as={`/team/${member.slug}`}
                    to="/team/[member]"
                    className={styles.arrowLink}
                  >
                    Read Bio
                  </LinkWithArrow>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <FullWidthSectionActionLink
        linkText={siteData.actionBanner.text}
        to={siteData.actionBanner.link}
        className="dg-actionBanner"
      />
      <SubscribeSection
        heading={siteData.subscribe.heading}
        text={siteData.subscribe.text}
        className="dg-subscribe"
      />
    </>
  );
}

export async function getStaticProps() {
  const team = await import("data/pages/team.json");
  const teamWithSlugs = team.default;

  teamWithSlugs.members.forEach(function (member, index) {
    teamWithSlugs.members[index].slug = createSlugFromTitle(member);
  });

  return {
    props: { team: teamWithSlugs },
  };
}

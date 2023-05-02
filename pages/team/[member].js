import React from "react";
import Head from "next/head";
import Link from "next/link";
import { getFullPageTitle, createSlugFromTitle } from "@asmallstudio/utilities";
import constants from "lib/constants.json";

import Markdown from "react-markdown";
import FullWidthSectionActionLink from "components/ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "components/ui/subscribeSection/SubscribeSection";

import styles from "./member.module.scss";

function _createHonorificName(name, qualifications) {
  if (qualifications && qualifications.length) {
    const qualificationsString = qualifications.join(", ");
    return qualificationsString.length
      ? `${name}, ${qualificationsString}`
      : name;
  }
  return name;
}

function _formatPositions(positions) {
  return positions.join(" | ");
}

export default function Member({ siteData, member }) {
  return (
    <>
      <Head>
        <title>
          {getFullPageTitle(member.title, constants.siteMeta.title)}
        </title>
        <meta name="description" content={siteData.siteDescription} />
      </Head>
      <section className={`container ${styles.memberContainer}`}>
        <div className="row">
          <div className={`col-xs-12 ${styles.indexLinkContainer}`}>
            <Link
              href="/team"
              className={`style-as-h3 ${styles.indexLink}`}
            >
              Back to Team
            </Link>
          </div>
          <aside className={`col-xs-12 col-md-3 ${styles.memberInfo}`}>
            <img src={member.image} alt="" />
            {typeof member.qualifications !== "undefined" &&
              member.qualifications !== "" && (
                <h1 className="style-as-h3">
                  {_createHonorificName(member.title, member.qualifications)}
                </h1>
              )}
            {typeof member.qualifications === "undefined" && (
              <h1 className="style-as-h3">{member.title}</h1>
            )}
            {member.qualifications === "" && (
              <h1 className="style-as-h3">{member.title}</h1>
            )}
            <div className="style-as-p">
              {_formatPositions(member.positions)}
            </div>
            {typeof member.partnerCompany !== "undefined" &&
              member.partnerCompany !== "" && (
                <div className="style-as-p">{member.partnerCompany}</div>
              )}
            {typeof member.extension !== "undefined" &&
              member.extension !== "" && (
                <div className={styles.contactInfoItem}>
                  <a href={`tel:+14258891261;ext=${member.extension}`}>
                    {`+1 (425) 889-1261; ext: ${member.extension}`}
                  </a>
                </div>
              )}
            {typeof member.email !== "undefined" && member.email !== "" && (
              <div className={styles.contactInfoItem}>
                <a href={`mailto:${member.email}`}>{member.email}</a>
              </div>
            )}
          </aside>
          <article
            className={`col-xs-12 col-md-9 col-lg-8 col-lg-offset-1 ${styles.memberBio}`}
          >
            <Markdown>{member.bio}</Markdown>
          </article>
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

export async function getStaticProps({ params }) {
  const team = await import("data/pages/team.json");
  const teamWithSlugs = team.default;

  teamWithSlugs.members.forEach(function (member, index) {
    teamWithSlugs.members[index].slug = createSlugFromTitle(member);
  });

  const [member] = teamWithSlugs.members.filter((member) => {
    return member.slug === params.member;
  });

  return {
    props: { member },
  };
}

export async function getStaticPaths() {
  const team = await import("data/pages/team.json");
  const teamWithSlugs = team.default;

  teamWithSlugs.members.forEach(function (member, index) {
    teamWithSlugs.members[index].slug = createSlugFromTitle(member);
  });

  const directoryPaths = teamWithSlugs.members.reduce(
    (pathsAccumulator, page) => {
      pathsAccumulator.push({
        params: {
          member: page.slug,
        },
      });

      return pathsAccumulator;
    },
    []
  );

  return {
    fallback: false,
    paths: directoryPaths,
  };
}

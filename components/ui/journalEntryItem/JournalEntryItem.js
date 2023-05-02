import React from "react";
import Link from "next/link";

import LinkWithArrow from "../linkWithArrow/LinkWithArrow";
import styles from "./journalEntryItem.module.scss";

export default function JournalEntryItem({
  name,
  date,
  link,
  imgSrc = "/assets/journal-placeholder.svg",
  imgAlt = "",
  className = "",
}) {
  return (
    <div
      className={`col-xs-12 col-md-4 ${styles.journalEntryItem} ${className}`}
    >
      <Link href={link} className={`${styles.itemLink}`}>
          <img className={styles.image} src={imgSrc} alt={imgAlt} />
      </Link>
      <Link href="/journal/[entry]" as={link} className={`${styles.itemLink}`}>
          <div className={styles.itemInfo}>
            <LinkWithArrow className={styles.name}>{name}</LinkWithArrow>
            <div className={styles.date}>{date}</div>
          </div>
      </Link>
    </div>
  );
}

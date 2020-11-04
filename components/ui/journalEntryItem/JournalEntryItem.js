import React from "react";
import Link from "next/link";

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
      <Link href={link}>
        <a className={`${styles.itemLink}`}>
          <img className={styles.image} src={imgSrc} alt={imgAlt} />
        </a>
      </Link>
      <Link href="/journal/[entry]" as={link}>
        <a className={`${styles.itemLink}`}>
          <div className={styles.itemInfo}>
            <div className={styles.name}>{name}</div>
            <div className={styles.date}>{date}</div>
          </div>
        </a>
      </Link>
    </div>
  );
}

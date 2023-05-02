import React from "react";
import Link from "next/link";

import styles from "./banner.module.scss";

export default function Banner({ siteData }) {
	if (typeof siteData.banner.text === "undefined" || siteData.banner.text === "") {
		return null
	}

	return (
		<header className={styles.banner}>
			<div className={styles.bannerContainer}>
				<p>
					{typeof siteData.banner.link !== "undefined" && siteData.banner.link !== "" && (
						<Link href={siteData.banner.link}>{siteData.banner.text}</Link>
					)}
					{siteData.banner.link === "" && (
						siteData.banner.text
					)}
				</p>
			</div>
		</header>
	);
}

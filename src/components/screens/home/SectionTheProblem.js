import React from "react";

import styles from "./sectionTheProblem.scss";
import Bubble from "../../ui/bubble/Bubble";
import BubbleWithSubheading from "../../ui/bubbleWithSubheading/BubbleWithSubheading";
import Spacer from "../../ui/spacer/Spacer";
import theme from "../../../lib/theme";

class SectionTheProblem extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <a className="anchor" id="the-problem" />
          <div className={styles.row}>
            <div className="col-xs-12">
              <h4>The Problem</h4>
              <h3>
                Current transportation system is fragmented and unreliable,
                preventing underserved people from getting to the places that
                matter.
              </h3>
              <Spacer className={styles.spacer} />
              <p className={styles.chartTitle}>
                Percentage of annual income spent on transportation
              </p>
              <div className={styles.bubblesContainer}>
                <div className={`${styles.bubbleContainer} ${styles.leftPull}`}>
                  <BubbleWithSubheading
                    innerText="10%"
                    bubbleColor="white"
                    subheadingText="Upper Class"
                    subheadingTextColor={theme.darkOrange}
                    bubbleStyle={styles.whiteBubble}
                  />
                </div>
                <div className={styles.bubbleContainer}>
                  <BubbleWithSubheading
                    innerText="28%"
                    subheadingText="Lower Class"
                    bubbleColor={theme.lightBlue}
                    subheadingTextColor={theme.darkOrange}
                    bubbleStyle={styles.darkBlueBubble}
                  />
                </div>
                <div className={styles.bubbleContainer}>
                  <BubbleWithSubheading
                    innerText="17%"
                    bubbleColor={theme.skyBlue}
                    subheadingText="Middle Class"
                    subheadingTextColor={theme.darkOrange}
                    bubbleStyle={styles.skyBlueBubble}
                  />
                </div>
              </div>
              <p className={styles.disclaimer}>
                {"*based on data from bureau of labor statistics"}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionTheProblem;

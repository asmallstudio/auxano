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
          <div className={styles.row}>
            <div className="col-xs-12">
              <h4>The Problem</h4>
              <h3>
                Current transportation system is fragmented and unreliable,
                preventing underserved people from getting to the places that
                matter.
              </h3>
              <Spacer height={120} />
              <p className={styles.chartTitle}>
                Percentage of annual income spent on transportation
              </p>
              <div className={styles.bubbleContainer}>
                <BubbleWithSubheading
                  innerText="10%"
                  bubbleColor="white"
                  bubbleDiameter={144}
                  textColor={theme.darkBlue}
                  subheadingText="Upper Class"
                  subheadingTextColor={theme.darkOrange}
                />
                <BubbleWithSubheading
                  innerText="28%"
                  bubbleColor={theme.lightBlue}
                  bubbleDiameter={329}
                  textColor={"white"}
                  subheadingText="Lower Class"
                  subheadingTextColor={theme.darkOrange}
                />
                <BubbleWithSubheading
                  innerText="17%"
                  bubbleColor={theme.skyBlue}
                  bubbleDiameter={263}
                  textColor={theme.darkBlue}
                  subheadingText="Middle Class"
                  subheadingTextColor={theme.darkOrange}
                />
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

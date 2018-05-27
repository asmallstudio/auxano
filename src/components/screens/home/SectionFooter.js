import React from "react";

import styles from "./sectionFooter.scss";
import theme from "../../../lib/theme";
import Button from "../../ui/button/Button";
import ThirdColumn from "../../ui/thirdColumn/ThirdColumn";

class SectionFooter extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.container} id="get-involved">
          <div className={styles.row}>
            <ThirdColumn title="© 2018 Transitus">
              <p className={styles.columnText}>
                123 Demo Street<br />
                Manhattan, NY 12345
              </p>
            </ThirdColumn>
            <ThirdColumn title="Contact">
              <p className={styles.columnText}>contact@transitus.org</p>
            </ThirdColumn>
            <ThirdColumn title="Stay In Touch">
              <p className={styles.columnText}>aaa</p>
            </ThirdColumn>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionFooter;

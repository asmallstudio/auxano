import React from "react";

import styles from "./sectionGetInvolved.scss";
import theme from "../../../lib/theme";
import Button from "../../ui/button/Button";
import ThirdColumn from "../../ui/thirdColumn/ThirdColumn";

class SectionGetInvolved extends React.Component {
  render() {
    const data = {
      ambassadors: {
        title: "Ambassadors",
        text: "Spread the word about Transitus to different cities."
      },
      drivers: {
        title: "Drivers",
        text: "Become a driver for Transitus."
      },
      volunteers: {
        title: "Volunteers",
        text: "Engage with citizens to build community of trust."
      }
    };
    return (
      <div>
        <div className={styles.container} id="get-involved">
          <div className={styles.row}>
            <div className="col-xs-12">
              <h3>Help make our city sustainable, accessible, and vibrant!</h3>
            </div>
          </div>
          <div className={`${styles.row} ${styles.columnsContainer}`}>
            <ThirdColumn title={data.ambassadors.title}>
              <p className={styles.columnText}>{data.ambassadors.text}</p>
            </ThirdColumn>
            <ThirdColumn title={data.drivers.title}>
              <p className={styles.columnText}>{data.drivers.text}</p>
            </ThirdColumn>
            <ThirdColumn title={data.volunteers.title}>
              <p className={styles.columnText}>{data.volunteers.text}</p>
            </ThirdColumn>
          </div>
          <div className={styles.row}>
            <div className="col-xs-12">
              <Button
                text="Get Involved"
                backgroundColor={theme.darkOrange}
                textColor="white"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionGetInvolved;

import React from "react";

import styles from "./sectionLongForm.scss";
import Card from "../../ui/card/Card";
import Spacer from "../../ui/spacer/Spacer";

class SectionLongForm extends React.Component {
  render() {
    const data = {
      food: {
        title: "Access to Good Food",
        text:
          "Hydrate food deserts, promote nutritious habits, and improve food options for the underserved."
      },
      jobs: {
        title: "Access to Fair-Wage Jobs",
        text:
          "Increase awareness of job opportunities, promote access to job training, and improve quality of life. "
      },
      healthcare: {
        title: "Access to Affordable Healthcare",
        text:
          "Promote better decision making, improve access to convenient healthcare options, and expand awareness of wellness choices."
      }
    };

    return (
      <div>
        <div className={styles.container} id="our-mission">
          <div className={styles.row}>
            <div className={`col-xs-12 ${styles.pairContainer} row`}>
              <div
                className={`${styles.itemLeft} ${styles.itemVerticalCenter}`}
              >
                <Card title={data.food.title} text={data.food.text} />
              </div>
              <img
                src="/uploads/food-image.jpg"
                width="640px"
                className="right"
              />
            </div>
            <Spacer height={128} />
            <div className={`col-xs-12 ${styles.pairContainer} row`}>
              <div
                className={`${styles.itemRight} ${styles.itemVerticalCenter}`}
              >
                <Card title={data.jobs.title} text={data.jobs.text} />
              </div>
              <img
                src="/uploads/jobs-image.jpg"
                width="640px"
                className="left"
              />
            </div>
            <Spacer height={128} />
            <div className={`col-xs-12 ${styles.pairContainer} row`}>
              <div
                className={`${styles.itemLeft} ${styles.itemVerticalCenter}`}
              >
                <Card
                  title={data.healthcare.title}
                  text={data.healthcare.text}
                />
              </div>
              <img
                src="/uploads/healthcare-image.jpg"
                width="640px"
                className="right"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionLongForm;

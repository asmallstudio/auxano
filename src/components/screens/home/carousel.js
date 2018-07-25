import React from "react";
import NukaCarousel from "nuka-carousel";
import styles from "./carousel.scss";

const quotes = [
  {
    name: "John Smith",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
  },
  {
    name: "Jane Smith",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
  },
  {
    name: "Scott Smith",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
  },
  {
    name: "J.S.",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
  }
];

class Carousel extends React.Component {
  render() {
    return (
      <NukaCarousel
        autoplay={true}
        autoplayInterval={5000}
        swiping={true}
        wrapAround={true}
        renderCenterLeftControls={false}
        renderCenterRightControls={false}
      >
        <div className={styles.carouselSlide}>
          <div className={styles.quoteAuthorImg} />
          <p className={`${styles.quoteText} style-as-h3`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <div className={styles.quoteAuthor}>John Smith</div>
        </div>
        <div className={styles.carouselSlide}>
          <div className={styles.quoteAuthorImg} />
          <p className={`${styles.quoteText} style-as-h3`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <div className={styles.quoteAuthor}>Jane Doe</div>
        </div>
        <div className={styles.carouselSlide}>
          <div className={styles.quoteAuthorImg} />
          <p className={`${styles.quoteText} style-as-h3`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <div className={styles.quoteAuthor}>J.D.</div>
        </div>
      </NukaCarousel>
    );
  }
}

export default Carousel;

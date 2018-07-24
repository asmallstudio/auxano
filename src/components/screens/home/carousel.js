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
      <NukaCarousel autoplay={true} swiping={true}>
        <div className={styles.carouselSlide}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <div className={styles.quoteAuthor}>John Smith</div>
        </div>
        <div className={styles.carouselSlide}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <div className={styles.quoteAuthor}>Jane Doe</div>
        </div>
        <div className={styles.carouselSlide}>
          <p>
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

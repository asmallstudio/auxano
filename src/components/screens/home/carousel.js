import React from "react";
import Carousel, { PagingDots } from "nuka-carousel";
import styles from "./carousel.scss";

class AuxanoCarousel extends React.Component {
  render() {
    return (
      <Carousel
        className={styles.carousel}
        autoplay={true}
        autoplayInterval={5000}
        wrapAround={true}
        renderCenterLeftControls={null}
        renderCenterRightControls={null}
        renderBottomCenterControls={props => (
          <PagingDots className={styles.pagingDots} {...props} />
        )}
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
      </Carousel>
    );
  }
}

export default AuxanoCarousel;

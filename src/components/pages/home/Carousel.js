import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "./carousel.scss";

class AuxanoCarousel extends React.Component {
  render() {
    const { items } = this.props;

    if (!items || items.length === 0) return null;
    return (
      <div>
        <Carousel
          className={styles.carousel}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators
          autoPlay
          infiniteLoop
          dynamicHeight
          emulateTouch
        >
          {items.map((item, i) => (
            <div className={styles.carouselSlide} key={i}>
              <div
                className={styles.itemImgContainer}
                style={{
                  backgroundImage: `url("${item.image.src}")`
                }}
                title={item.image.alt}
              />
              <p className={`${styles.itemText} style-as-h3`}>{item.text}</p>
              <div className={styles.itemSubtext}>{item.subtext}</div>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default AuxanoCarousel;

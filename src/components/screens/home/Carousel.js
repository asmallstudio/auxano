import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "./carousel.scss";

class AuxanoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        {
          name: "John Smith",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
          name: "Jane Smith",
          text:
            "Incididunt test adipisicing helvetica normcore selfies dolor hell of farm - to - table pitchfork.Woke direct trade helvetica, whatever keffiyeh adaptogen small batch gastropub."
        },
        {
          name: "Scott Smith",
          text:
            "Food truck minim microdosing man braid meditation vice vinyl master cleanse leggings voluptate schlitz."
        },
        {
          name: "Andrew Garcia",
          text:
            " Squid readymade ea paleo, voluptate truffaut post-ironic dolor meh gentrify in cray."
        }
      ]
    };
  }

  render() {
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
          {this.state.quotes.map(quote => (
            <div className={styles.carouselSlide} key={quote.name}>
              <div className={styles.quoteAuthorImg} />
              <p className={`${styles.quoteText} style-as-h3`}>{quote.text}</p>
              <div className={styles.quoteAuthor}>{quote.name}</div>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default AuxanoCarousel;

import React from "react";
import Carousel from "nuka-carousel";
import PagingDots from "./PagingDots";
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
        {this.state.quotes.map(quote => (
          <div
            className={styles.carouselSlide}
            key={quote.name}
            name={quote.text}
          >
            <div className={styles.quoteAuthorImg} />
            <p className={`${styles.quoteText} style-as-h3`}>{quote.text}</p>
            <div className={styles.quoteAuthor}>{quote.name}</div>
          </div>
        ))}
      </Carousel>
    );
  }
}

export default AuxanoCarousel;

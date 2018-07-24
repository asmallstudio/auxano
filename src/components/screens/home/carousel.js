import React from "react";
import Flickity from "react-flickity-component";
// import styles from "./oneThirdColumn.scss";

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
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        {
          id: 0,
          name: "Loading..."
        }
      ]
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        quotes: quotes
      });
    }, 2000);
  }

  render() {
    const flickityOptions = {
      cellSelector: ".review"
    };

    return (
      <div className="carousel-holder">
        <Flickity options={flickityOptions} reloadOnUpdate>
          {this.state.quotes.map(i => (
            <div className="review" key={i.id} name={i.name} style={style}>
              {i.text}
            </div>
          ))}
        </Flickity>
      </div>
    );
  }
}

export default Carousel;

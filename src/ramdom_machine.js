import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/fontawesome-svg-core";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const tweet = <FontAwesomeIcon icon={faTwitterSquare} id="tweet" size="3x" />;
const heart = (
  <FontAwesomeIcon icon={faHeart} id="tweet" size="1x" color="red" />
);

class Machine extends Component {
  state = {
    color: "",
    quoteList: [
      {
        author: "Walt Disney",
        quote: "The way get started is to quit talking and begin doing.”",
      },
      {
        author: "Winston Churchill",
        quote:
          "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.”",
      },
      {
        author: "Will Rogers",
        quote: "Don’t let yesterday take up too much of today.”",
      },
      {
        author: "Unknown",
        quote:
          "You learn more from failure than from success. Don’t let it stop you. Failure builds character.”",
      },
      {
        author: "Inspirational Quote by Vince Lombardi",
        quote:
          "It’s not whether you get knocked down, it’s whether you get up.”",
      },
      {
        author: "Steve Jobs",
        quote:
          "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.”",
      },
      {
        author: "Rob Siltanen",
        quote:
          "People who are crazy enough to think they can change the world, are the ones who do.”",
      },
      {
        author: "Og Mandino",
        quote:
          "Failure will never overtake me if my determination to succeed is strong enough.”",
      },
      {
        author: "Mohnish Pabrai",
        quote:
          "Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That’s the classic entrepreneur.”",
      },
      {
        author: "Maya Angelou",
        quote: "We may encounter many defeats but we must not be defeated.”",
      },
      {
        author: "Johann Wolfgang Von Goethe",
        quote:
          "Knowing is not enough; we must apply. Wishing is not enough; we must do.”",
      },
      {
        author: "Brian Tracy",
        quote:
          "Imagine your life is perfect in every respect; what would it look like?”",
      },
      {
        author: "Dr. Henry Link",
        quote: "We generate fears while we sit. We overcome them by action.”",
      },
      {
        author: "Quote by Henry Ford",
        quote: "Whether you think you can or think you can’t, you’re right.”",
      },
      {
        author: "Life Quote by Helen Keller",
        quote:
          "Security is mostly a superstition. Life is either a daring adventure or nothing.”",
      },
      {
        author: "Hasidic Proverb",
        quote:
          "The man who has confidence in himself gains the confidence of others.”",
      },
      {
        author: "Motivational Quote by Franklin D. Roosevelt",
        quote:
          "The only limit to our realization of tomorrow will be our doubts of today.”",
      },
      {
        author: "Albert Einstein",
        quote: "Creativity is intelligence having fun.”",
      },
      {
        author: "Don Zimmer",
        quote:
          "What you lack in talent can be made up with desire, hustle and giving 110% all the time.”",
      },
      {
        author: "Theodore Roosevelt",
        quote: "Do what you can with all you have, wherever you are.”",
      },
      {
        author: "Encouraging Quote by Brian Tracy",
        quote:
          "Develop an ‘Attitude of Gratitude’. Say thank you to everyone you meet for everything they do for you.”",
      },
      {
        author: "C.S. Lewis",
        quote:
          "You are never too old to set another goal or to dream a new dream.”",
      },
      {
        author: "Confucius",
        quote: "To see what is right and not do it is a lack of courage.”",
      },
      {
        author: "Brian Tracy",
        quote: "Reading is to the mind, as exercise is to the body.”",
      },
      {
        author: "Brian Tracy",
        quote:
          "Fake it until you make it! Act as if you had all the confidence you require until it becomes your reality.”",
      },
      {
        author: "Success Quote by Brian Tracy",
        quote:
          "The future belongs to the competent. Get good, get better, be the best!”",
      },
      {
        author: "Jack Canfield",
        quote:
          "For every reason it’s not possible, there are hundreds of people who have faced the same circumstances and succeeded.”",
      },
      {
        author: "Positive Quote by John Wooden",
        quote:
          "Things work out best for those who make the best of how things work out.”",
      },
      {
        author: "Marcus Tullius Cicero",
        quote: "A room without books is like a body without a soul.”",
      },
      {
        author: "Michael Phelps",
        quote:
          "I think goals should never be easy, they should force you to work, even if they are uncomfortable at the time.”",
      },
    ],
    currentQuote: {
      author: "JeremAIh",
      quote: "I can build anything as long as Google is with me",
    },
  };

  NewQuote(e) {
    console.log("I have been clicked");
    this.setState((prevState) => ({
      color: getRandomColor(),
      currentQuote: prevState.quoteList[Math.floor(Math.random() * 30)],
    }));
    console.log(this.state.color);
    console.log(this.state.currentQuote);
  }

  render() {
    return (
      <div id="machine" style={{ backgroundColor: this.state.color }}>
        <h1>Random Quote Machine</h1>
        <div style={{ color: this.state.color }} id="quote-box">
          <div id="text">
            <p>
              <span style={{ fontSize: "2.5em", fontWeight: 1000 }}>"</span>
              {this.state.currentQuote.quote}
            </p>
          </div>
          <div id="author">
            <p>
              <span>- </span>
              {this.state.currentQuote.author}
            </p>
          </div>
          <div id="actions">
            <div id="tweet-quote">
              <a
                href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                className="twitter-share-button"
                data-size="large"
                data-text={
                  this.state.currentQuote.quote +
                  "\n" +
                  " by " +
                  this.state.currentQuote.author +
                  "\n"
                }
                data-hashtags="jeremAIh"
                data-show-count="false"
              >
                {tweet}
              </a>
            </div>
            <div id="new-quote">
              <button
                style={{ backgroundColor: this.state.color }}
                onClick={(e) => this.NewQuote(e)}
              >
                New Quote
              </button>
            </div>
          </div>
        </div>
        <div id="footer">
          <marquee behavior="static">Made with {heart} by JeremAIh </marquee>
        </div>
      </div>
    );
  }
}

export default Machine;

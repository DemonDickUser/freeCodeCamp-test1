import "./App.css";
import { useEffect, useState } from "react";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Button } from "@material-ui/core";

function App() {
  const [color, setColor] = useState("");
  const [text, setText] = useState({});

  const fetchQuote = async () => {
    const jsonData = await fetch(
      "http://quotes.stormconsultancy.co.uk/random.json",
      {
        method: "GET",
      }
    );
    const data = await jsonData.json();
    setText(data);
  };

  const randomColor = () => {
    return Math.floor(Math.random() * 255);
  };

  const newColor = () => {
    setColor(`rgb(${randomColor()} , ${randomColor()} , ${randomColor()} )`);
  };

  const clickHandler = () => {
    newColor();
    fetchQuote();
  };

  useEffect(() => {
    fetchQuote();
    newColor();
  }, []);

  return (
    <div
      style={{
        background: color,
      }}
      className="App"
    >
      <div id="quote-box">
        <div id="text">
          <p
            style={{
              color: color,
            }}
          >
            <FormatQuoteIcon
              style={{
                color: color,
              }}
            />
            {text.quote}
          </p>
        </div>
        <div id="author">
          <h3
            style={{
              color: color,
            }}
          >
            - {text.author}
          </h3>
        </div>
        <div className="abtn">
          <a
            style={{
              backgroundColor: color,
              color: "white",
            }}
            id="tweet-quote"
            href="https://twitter.com/intent/tweet"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet Quote
          </a>
          <button
            style={{
              backgroundColor: color,
              color: "white",
            }}
            onClick={clickHandler}
            id="new-quote"
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

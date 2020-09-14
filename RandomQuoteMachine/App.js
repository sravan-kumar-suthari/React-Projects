import React, { useState,useEffect } from 'react';
import  './App.modules.css'

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const apiUrl =
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

  const getQuote = () => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then(
        (json) => {
          setIsLoaded(true);
          setItems(json.quotes);
          setQuote(
            json.quotes[Math.floor(Math.random() * json.quotes.length)].quote
          );
          setAuthor(
            json.quotes[Math.floor(Math.random() * json.quotes.length)].author
          );
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  // when component load, useEffect will call the getQuote to fetch api.
  useEffect(getQuote, []);

  const getRandomQuote = () => {
    setQuote(items[Math.floor(Math.random() * items.length)].quote);
    setAuthor(items[Math.floor(Math.random() * items.length)].author);
  };
  return (
    isLoaded && (
      <div id="quote-box">
        <div className="quote-text">
          <i className="fa fa-quote-left"></i>
          <span id="text">{quote}</span>
          <i className="fa fa-quote-right"></i>
        </div>
        <div className="quote-author">
          — <span id="author">{author}</span>
        </div>
        <div className="buttons">
          <a
            className="button"
            id="tweet-quote"
            title="Tweet this quote!"
            target="_blank"
            href={
              "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
              encodeURIComponent('"' + quote + '" ' + author)
            }
          >
            <i className="fa fa-twitter"></i>
          </a>
          <button className="button" id="new-quote" onClick={getRandomQuote}>
            New Quote
          </button>
        </div>
      </div>
    )
  );
}

export default App;

// function App() {
//   const [quotes,setQuotes]=useState({quote:''})
//   const [authors,setAuthors]=useState({author:''})
//   const [rnd,setRnd]=useState(Math.floor((Math.random()*10)))
  
//   useEffect( ()=>{
//     async function fetchData(){
//       const apiUrl=await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
//       const data=await apiUrl.json();
//       console.log(rnd);  
//       setQuotes({
//         quote:data.quotes[rnd].quote
//       })
//       setAuthors({
//         author:data.quotes[rnd].author
//       })
//      }
// fetchData()
//   },[rnd]);
//   const randomNumGenerator=()=>{
//     setRnd(
//       Math.floor((Math.random()*10))
//     )
//   }
 

 
 
//   return (
//     <div className={classes.App}>
//       <h1>"{quotes.quote}"</h1>
//       <h5>-{authors.author}</h5>
//       <a
//             className="button"
//             id="tweet-quote"
//             title="Tweet this quote!"
//             target="_blank"
//             href={
//               "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
//               encodeURIComponent('"' + quotes.quote + '" ' + authors.author)
//             }
//           >
//             <i className="fa fa-twitter"></i>
//           </a>
     
//       <button onClick={randomNumGenerator}>New Quote</button>
//     </div>
//   );
// }

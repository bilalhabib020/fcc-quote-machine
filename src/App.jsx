import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Quote from './components/Quote';
import MetaButton from './components/MetaButton';
import NextButton from './components/NextButton';


function App() {
const [quoteId, setQuoteId] = useState(0); 
const colorIndex = Math.floor(Math.random() * (colors.length - 1));
const  nextColor = colors[colorIndex];

const handleClick = () => {  
  if(quoteId === quotes.length - 1) {
    setQuoteId(0);
  }
  else {
    setQuoteId(quoteId + 1);
  }
}

  return (
    <>
 <div id='wrapper' style={{backgroundColor: nextColor}} >
  <div id='quote-box'>
<Quote quote = {quotes[quoteId].quote}
author = {quotes[quoteId].author}
color = {nextColor} 
/>
  <div className="buttons">
    
     
      <MetaButton color = {nextColor}
      />
    
      <NextButton color = {nextColor}
      onClick={handleClick}
      />
    
  </div>

  </div>
 </div>
    </>
  )
}


const quotes = [
  {
    id: 0,
    quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison"
  },
  {
    id: 1,
    quote: "You can observe a lot just by watching.",
    author: "Yogi Berra"
  },
  {
    id: 2,
    quote: "A house divided against itself cannot stand.",
    author: "Abraham Lincoln"
  },
  {
    id: 3,
    quote: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    id: 4,
    quote: "Fate is in your hands and no one elses.",
    author: "Byron Pulsifer"
  },
  {
    id: 5,
    quote: "Be the chief but never the lord.",
    author: "Lao Tzu"
  },
  {
    id: 6,
    quote: "Nothing happens unless first we dream.",
    author: "Carl Sandburg"
  },
  {
    id: 7,
    quote: "Well begun is half done.",
    author: "Aristotle"
  },
  {
    id: 8,
    quote: "Life is a learning experience, only if you learn.",
    author: "Yogi Berra"
  },
  {
    id: 9,
    quote: "Self-complacency is fatal to progress.",
    author: "Margaret Sangster"
  },
  {
    id: 10,
    quote: "Peace comes from within. Do not seek it without.",
    author: "Buddha"
  },
  {
    id: 11,
    quote: "What you give is what you get.",
    author: "Byron Pulsifer"
  },
  {
    id: 12,
    quote: "We can only learn to love by loving.",
    author: "Iris Murdoch"
  },
  {
    id: 13,
    quote: "Life is change. Growth is optional. Choose wisely.",
    author: "Karen Clark"
  },
  {
    id: 14,
    quote: "You'll see it when you believe it.",
    author: "Wayne Dyer"
  }
]


const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];


export default App

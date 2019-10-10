// src/components/QuoteList.js
import React from "react";
import Contact from './Contact';

// An array of objects
const quotes = [
  {
    online: true,
    name: "Maddy Sision",
    avatar:
    "https://randomuser.me/api/portraits/women/94.jpg" 
      
  },
  {
    online: false,
    name: "Joyce Jonathan",
    avatar:
    "https://randomuser.me/api/portraits/women/33.jpg" 
},
  {
    online: true,
    name: "Al Spielberg",
    avatar:
    "https://randomuser.me/api/portraits/men/17.jpg"    
},
  {
    online: true,
    name: "Wade Smith",
    avatar:
    "https://randomuser.me/api/portraits/men/14.jpg"
},

{
    online: false,
    name: "Ray Magini",
    avatar:
    "https://randomuser.me/api/portraits/men/48.jpg"
}
];

const QuoteList = () => (
  <div>
    {quotes.map(item => (
      <Contact name = {item.name} avatar = {item.avatar} online = {item.online}/>
    ))}
  </div>
);

export default QuoteList;
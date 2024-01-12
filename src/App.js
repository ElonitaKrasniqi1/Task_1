import React from "react";
import "./App.css";
import ImageSection from "./ImageSection";

import com from "./assets/com.png";
import award from "./assets/award.png";
import sales from "./assets/sales.png";
import ruler from "./assets/ruler.png";
import sEngine from "./assets/sEngine.png";
import text from "./assets/text.jpeg";
import language from "./assets/language.png";
import adverstisement from "./assets/adverstisement.png";
import opportunity from "./assets/opportunity.png";
  
const firstcolumn = [
  { image: com, title: "The TLD", text: "Does the domain extension match the language of the domain name?" },
  { image: award, title: "International Recognition", text: "Can the domain name be used on an international scale?" },
  { image: sales, title: "Sales Impact", text: "Can the domain name be used on an international scale?" },
];

const secondcolumn = [
  { image: ruler, title: "Domain Length", text: "Is the domain short enough to remember? " },
  { image: sEngine, title: "Search Engine", text: "Does the domain follow search engine guidelines? " },
  { image: text, title: "Typo susceptibility", text: "How high is the risk of mistyping the domain name? " },
];

const thirdcolumn = [
  {image: language, title: "Language", text: "How complex is the actual domain name? "},
  {image: adverstisement, title: "Advertising Potential", text: "Could the domain be used for advertising campaigns? "},
  {image: opportunity, title: "Business Potential", text: "Can the domain be used as your company address? "},
]
export default function App() {
  return (
    <>
    <div className="container">
    <div className="first-c">
      {firstcolumn.map((item, index) => (
        <ImageSection key={index} image={item.image} title={item.title} text={item.text} />
      ))}
    </div>
    <div className="second-c">
      {secondcolumn.map((item, index) => (
        <ImageSection key={index} image={item.image} title={item.title} text={item.text} />
      ))}
    </div>
    <div className="third-c">
      {thirdcolumn.map((item, index) => (
        <ImageSection key={index} image={item.image} title={item.title} text={item.text} />
      ))}
    </div>
  </div>
  </>
  );
}

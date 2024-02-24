import React from "react";
import "./App.css";
import ImageSection from "./ImageSection";
import Card from "./Card";


import com from "./assets/com.png";
import award from "./assets/award.png";
import sales from "./assets/sales.png";
import ruler from "./assets/ruler.png";
import sEngine from "./assets/sEngine.png";
import text from "./assets/text.jpeg";
import language from "./assets/language.png";
import adverstisement from "./assets/adverstisement.png";
import opportunity from "./assets/opportunity.png";
import kevinJoe from './assets/kevinJoe.png';


const cardData = {
  version: "3.3.0 (14/05/2018)",
  buttonText: "New",
  author: "Kevin Joe",
  image: kevinJoe,
  downloadBtn: "Download",
  cards: [
    {
      buttonText: "New",
      buttonStyle: { backgroundColor: 'green'},
      cardText: "File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share permissions re-design optimization."
    },
    {
      buttonText: "Fix",
      buttonStyle: { backgroundColor: 'blue' },
      cardText:  (
        <>
          Introducing Host Cloud Drive - virtual drive funcionality <br/>
          New share options and managment <br/>
          New more user friendly Sync optimizations <br/>
          Various performance improvements and bug fixes
        </>
      ),
    },
    {
      buttonText: "Improvement",
      buttonStyle: { backgroundColor: 'purple', width: '120px' },
      cardText: ( 
        <>
        Added Settings for Auto Start <br/> 
        Added Update Notification <br/> 
        Speed Optimization <br/> 
        Bug Fixes
      </>
      ),
    },
  ],
};

const newCardData = {
  version: "3.1.0 (20/05/2015)",
  buttonText: "Fix",
  author: "Kevin Joe",
  image: kevinJoe,
  downloadBtn: "Download",
  cards: [
    {
      buttonText: "New",
      buttonStyle: { backgroundColor: 'green' },
      cardText: "File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share permissions re-design optimization."
    },
    {
      buttonText: "Fix",
      buttonStyle: { backgroundColor: 'blue' },
      cardText:  (
        <>
          Introducing Host Cloud Drive - virtual drive funcionality <br/>
          New share options and managment <br/>
          New more user friendly Sync optimizations <br/>
          Various performance improvements and bug fixes
        </>
      ),
    },
    {
      buttonText: "Improvement",
      buttonStyle: { backgroundColor: 'purple', width: '120px' },
      cardText: ( 
        <>
        Added Settings for Auto Start <br/> 
        Added Update Notification <br/> 
        Speed Optimization <br/> 
        Bug Fixes
      </>
      ),
    },
  ],
};

const newnCardData = {
  version: "3.1.0 (20/05/2015)",
  buttonText: "Improvement",
  author: "Kevin Joe",
  image: kevinJoe,
  downloadBtn:"Download",
  cards: [
    {
      buttonText: "New",
      buttonStyle: { backgroundColor: 'green' },
      cardText: "File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share permissions re-design optimization."
    },
    {
      buttonText: "Fix",
      buttonStyle: { backgroundColor: 'blue' },
      cardText:  (
        <>
          Introducing Host Cloud Drive - virtual drive funcionality <br/>
          New share options and managment <br/>
          New more user friendly Sync optimizations <br/>
          Various performance improvements and bug fixes
        </>
      ),
    },
    {
      buttonText: "Improvement",
      buttonStyle: { backgroundColor: 'purple', width: '120px' },
      cardText: ( 
        <>
        Added Settings for Auto Start <br/> 
        Added Update Notification <br/> 
        Speed Optimization <br/> 
        Bug Fixes
      </>
      ),
    },
  ],
}
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
  { image: language, title: "Language", text: "How complex is the actual domain name? " },
  { image: adverstisement, title: "Advertising Potential", text: "Could the domain be used for advertising campaigns? " },
  { image: opportunity, title: "Business Potential", text: "Can the domain be used as your company address? " },
];


export default function App() {
  return (
    <>
      <div className="container">
          {firstcolumn.map((item, index) => (
            <ImageSection key={index} image={item.image} title={item.title} text={item.text} />
          ))}
          {secondcolumn.map((item, index) => (
            <ImageSection key={index} image={item.image} title={item.title} text={item.text} />
          ))}

          {thirdcolumn.map((item, index) => (
            <ImageSection key={index} image={item.image} title={item.title} text={item.text} />
          ))}
        </div>
      <Profile />
      </>
  );
}

export function Profile() {
  return (
    <><div className="prf-cont">
      <div className="wrapper">
    <div className="data">
    {cardData.cards.map((card, index) => (
            <><Card key={index} {...cardData} {...card} /></>
          ))}
    {newCardData.cards.map((card, index) => (
                       <><Card key={index} {...newCardData} {...card} /></>
          ))}
  {newnCardData.cards.map((card, index) => (
               <><Card key={index} {...newnCardData} {...card} /></>
  ))}
</div>
</div>
      </div></>
  );
}
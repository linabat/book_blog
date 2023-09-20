import React from "react";
import Card from "react-bootstrap/Card";
import { IoMdBook } from "react-icons/io";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            To better understand what I've been reading and explore any of <span className="purple">reading trends </span>
            that are taking place (though they may be obvious), here are some <span className="purple">fun visualizations </span>  
            and statistics.<br /> <br /> I pulled all of this data directly from my Goodreads account and will continue 
            to update everything pesent over time. You can find all the data and the code for how I collected it later on. Will come 
            back and add the link. 
            <br />
            <br />  
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <IoMdBook /> Playing Games
            </li>
            <li className="about-activity">
              <IoMdBook /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <IoMdBook /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(100 150 200)" }}>
            "Reading is a moment to get lost in another world - treasure it."
          </p>
          <footer className="blockquote-footer">Lina Battikha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

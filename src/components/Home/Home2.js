import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WHO AM <span className="purple"> I </span> ?
            </h1>
            <p className="home-about-body">
              An undergrad student that constantly loses themselves 
             <i>
               <b className="purple"> when I read</b>
              </i>  
              <br/>
              <br />Favorite genres are mostly contained within the realistic fiction genre (with a few exceptions)
              <br />
              <br />
              <div class="book_list">
              <i>
                <b className="purple">🤍 Romance</b>
              </i>
              <br />
              <i>
                <b className="purple">📜 Historical Fiction</b> 
              </i>
              <br />
              <i>
                <b className="purple">💡 Memoirs</b> 
              </i>
              <br />
              <i>
                <b className="purple">⏩ Short Stories</b> 
              </i>
              <br />
              <i>
                <b className="purple">⏩ Young Adult</b> 
              </i>
              </div>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              The goal of this website is to share my book updates with you all. I've been wanting to creating this page for 
              quite sometime at this point and have finally done it! 🎉 As an avid reader, I've read so many books at this point.
              I will share my raw thoughts, opinions, and ratings of the books I've read. Unfortunatley, this list right now is cut 
              short because I only started reviewing book at the end of 2022 -- but do not fear, I will keep you constantly in the loop 
              with my latest reads! 
              <br />
              <br />
              Here you gooo...some of my fun reading facts! 
              <br />
              <div class="book_list">
                <i>
                <b className="purple">◌ I read 85 books during 2020</b> (had a ton of spare time during the pandemic)
                </i>
                <br />
                <i>
                  <b className="purple">◌ My obsession with reading started in middle school and grew every since. </b>
                </i>
                <br />
                <i>
                  <b className="purple">◌ Ultimate favorite genre is Romance</b>
                </i>
                <br />
                <i>
                  <b className="purple">◌ Goodreads is my favorite app</b>
                </i>
                <br />
                <i>
                  <b className="purple">◌ Most of my books are E-books</b>
                </i>
              </div>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.goodreads.com/user/show/130208620-lina"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <img src="https://cdn.icon-icons.com/icons2/2389/PNG/512/goodreads_logo_icon_145237.png" alt="goodreads" style={{ width: '80%', height: 'auto' }}/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

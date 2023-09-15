import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import graysonVow from "../../Assets/Projects/grayson_vow.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Book Review<strong className="purple">Thought Dumb </strong> 
        </h1>
        <p style={{ color: "white" }}>
          Featuring my original thoughts regarding the books I've read
        </p>

        <br /> 
        <br/> 
        <br /> 
        <h3 style={{ color: "white", textAlign: "left"}}>
          Romance
        </h3>
        <br />
        <h5 style={{ color: "white", textAlign: "left", paddingLeft:"2%"}}>
          Fake Marriage
        </h5>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={graysonVow}
              isBlog={false}
              title="Grayson's Vow"
              author="Mia Sheridan"
              description="Marriage of convenience where the female lead needs to marry to gain her inheritance...she chooses to trust a convicted felon."
              rating = "⭐⭐⭐⭐"
              dateFinished = "08/20/2022"
              review = "After reading Archer's Voice, I had set the bar higher for this book, thinking it would be equivalent or close to equivanlence of the amazingness of that book. However, I was dissapointed. The plot was pretty solid, good character development, and the playfullness between the hero and heroine was nice, however, somethings just didn't sit right with me. I think it came to a point where the plot was being dragged out too long and when the hero and heroine do finally acknowlege there feeling for each other and talk about it, the plot stretches out from that point until the next big event. I have to say, there was a decent balance between plot and spice, if anything the spice level could have been higher but that's alrigt. I like Gray's personality for the most part, but he seemed too self centeric at some points throughout the book and his character took some time to develop. Kira was alright too. I think with the trauma that she had gone through, the development or more emotion could have been put in at some point, but overally I like her optimistic and bright characer. "
              ghLink="https://www.goodreads.com/book/show/86508524-grayson-s-vow?from_search=true&from_srp=true&qid=3QSXRdGKrw&rank=1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>

          <h3 style={{ color: "white", textAlign: "left"}}>
          Historical Fiction 
          </h3>
          <Col md={4} className="project-card">
              <ProjectCard
                imgPath={emotion}
                isBlog={false}
                title="Face Recognition and Emotion Detection"
                description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
                Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
                ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              />
            </Col>


          <h3 style={{ color: "white", textAlign: "left"}}>
          History
          </h3>
          <Col md={4} className="project-card">
              <ProjectCard
                imgPath={emotion}
                isBlog={false}
                title="Face Recognition and Emotion Detection"
                description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
                Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
                ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              />
            </Col>

        </Row>

      
      </Container>
    </Container>
  );
}

export default Projects;

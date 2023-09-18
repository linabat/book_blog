import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import emotion from "../../Assets/Projects/emotion.png";
import graysonVow from "../../Assets/Projects/grayson_vow.jpeg";
import the_contract from "../../Assets/Projects/the_contract.jpeg";
import the_favor from "../../Assets/Projects/the_favor.jpeg";
import the_marriage_effect from "../../Assets/Projects/the_marriage_effect.jpeg";
import the_temp_wife from "../../Assets/Projects/the_temp_wife.jpeg";
import twisted_hate from "../../Assets/Projects/twisted_hate.jpeg";
import love_theoretically from "../../Assets/Projects/love_theoretically.jpeg";
import juniper_hill from "../../Assets/Projects/juniper_hill.jpeg";
import darling_venmon from "../../Assets/Projects/darling_venmon.jpeg";
import terms_conditions from "../../Assets/Projects/terms_conditions.jpeg";
import right_move from "../../Assets/Projects/right_move.jpeg";
import twisted from "../../Assets/Projects/twisted.jpeg";



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
              rating="⭐⭐⭐⭐"
              dateFinished="08/20/2022"
              review="After reading Archer's Voice, I had set the bar higher for this book, thinking it would be equivalent or close to equivanlence of the amazingness of that book. However, I was dissapointed. The plot was pretty solid, good character development, and the playfullness between the hero and heroine was nice, however, somethings just didn't sit right with me. I think it came to a point where the plot was being dragged out too long and when the hero and heroine do finally acknowlege there feeling for each other and talk about it, the plot stretches out from that point until the next big event. I have to say, there was a decent balance between plot and spice, if anything the spice level could have been higher but that's alrigt. I like Gray's personality for the most part, but he seemed too self centeric at some points throughout the book and his character took some time to develop. Kira was alright too. I think with the trauma that she had gone through, the development or more emotion could have been put in at some point, but overally I like her optimistic and bright characer. "
              ghLink="https://www.goodreads.com/book/show/86508524-grayson-s-vow?from_search=true&from_srp=true&qid=3QSXRdGKrw&rank=1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={the_contract}
              isBlog={false}
              title="The Contract"
              author="Melanie Moreland"
              description="A ruthless boss and his fed-up assistant find themselves in a fake engagement that leads to unexpected feelings, challenging their mutual dislike and forcing them to question if love can truly change them"
              rating="⭐⭐⭐⭐"
              dateFinished= "08/2022"
              review="I absolutely loved this book. The author did a phenomanl job with the characters's development, especially the hero, the the build up of the plot. At first I didn't like the unnatural the conversation and thought process of the hero seemed, very self-centric and judgemental, but that changed throughout the book. Throughout the duration of me readig this book, I was easly able to imagine all the scenes that were taking place. One thing I really like with this writing style was that the author touched on all the important events and moments of the characters and their development towards their realtionship, but she skipped over time periods that were not significant to the plot, she would just give a brief sentence of what they had done. Another thing the author did a really good job on was the critical role of 3rd party characters (not the main characters) and how they were essential to the development for the main characters. They were well placed and easily blended into the plot to help progress the book. "
              ghLink="https://www.goodreads.com/book/show/29333677-the-contract?ac=1&from_search=true&qid=3DwFkKB3Tk&rank=3"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={the_favor}
              isBlog={false}
              title="The Favor"
              author="Suzanne Wright"
              description="Vienna Stratton reluctantly accepted help from the ruthless CEO Dane Davenport, but when he unexpectedly proposed a twelve-month marriage arrangement, she realized that he was not just a devil in business, but also a seductive and alluring tempter capable of igniting her desires and making her question her own feelings."
              rating="⭐⭐⭐⭐⭐"
              dateFinished="08/2022"
              review="Absolutely loved this book. The first book that I read in August that took me out of my reading slump. It's been a few weeks since I read this book, but very much loved the characters in this book, especially Dante (dream kind of guy). The characters were great together and the connection they had was very genuine. Their relationship and the development of it was beautiful. The heroine was slightly annoying because she didn't fight back against the abuse she was receiving from her foster sister, but I guess that would just have been me acting different in that situation. Dante was alpha protective male that was absolutely amazing and his character development was phenomenal. The only thing I didn't particularly enjoy in the book were the side characters because they were annoying and their actions weren't exactly realistic and din't make sense. But overall, great book with great characters."
              ghLink="https://www.goodreads.com/book/show/53608355-the-favor?ref=nav_sb_ss_2_9"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={the_marriage_effect}
              isBlog={false}
              title="The Marriage Effect"
              author="Karla Sorensen"
              description="Logan Ward, a busy football player and guardian to his sisters, needs to find a wife to keep custody of his siblings, and Paige McKinney, a spontaneous ex-model, unwittingly declares herself his fiancée at the hospital, leading to a fake marriage that sparks unexpected chemistry between the grumpy groom and the impulsive bride."
              rating="⭐⭐⭐⭐⭐"
              dateFinished="12/21/2022"
              review="Super good book. The writing was pretty good and the pace of the book was perfect. There was just the right amout of steamy scence and plot development. Paige and Logan were the perfect fit together and it was obvious that their relationship was genuine althout they married out of convenieicne. I got to say the beginning of the book was okay...the writing was not flowing as well at that point but it got better once they go married. I also really enjoyed the sides characters, Logan's four sisters, who definitely help the devlopment of the book and were very well written, each with their own personality. The wit and sacrcasm that were built into the conversations was very well done, leaving wanting to read more. Somehow managed to read this in 5 hours or so which is quite an achievement for me lol. Definitley recommend as an easy book to escape reality for a little bit."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={the_temp_wife}
              isBlog={false}
              title="The Temporary Wife"
              author="Catharina Maura"
              description="Luca Windsor faces a double dilemma when his secretary quits her job and he's thrust into an unwanted arranged engagement, leading to a secret marriage arrangement with clear rules, but as time goes on, he realizes that the one thing Valentina truly wants is the one thing he can't give her - freedom."
              rating="⭐⭐"
              dateFinished="04/01/2023"
              review="DNF - I really tried with this one, but I just couldn't bring myself to suffer some more. Tik Tok has once again catfished me into reading a book. Very much liked the synopsis of this book because the trope is one of my favorites so of course I went had started to read it. Wrong move. The writing was horrible and the plot was just not moving...literally nothing significant happened. It's as if the author was having lapse in memory as she was writing this book and kept repeating herself every other page, forgetting that she had already written the same thing. Taking out all of the repeat and unecessary information that author includes, the book could have easily be 1/3 of its original length. The book sort of started out good and I did get in more than half-way, hoping that the plot would pick up and something actually happens...but I couldn't endure it any longer (literally stopped reading all of spring break because I wanted to finish this book but couldn't bring myself to actually read it). Anyway, definitely not worth the read."
              ghLink="https://www.goodreads.com/book/show/63095160-the-temporary-wife?from_search=true&from_srp=true&qid=X49nRmaCae&rank=1"
            />
          </Col>

          <h5 style={{ color: "white", textAlign: "left", paddingLeft:"2%"}}>
          Enemies to Lovers
          </h5>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twisted_hate}
              isBlog={false} 
              title="Twisted Hate"
              author="Ana Huang"             
              description="Josh can't stand Jules, but their fiery animosity turns into a passionate 'enemies with benefits relationship', challenging their rule to never fall in love, and revealing hidden truths from their pasts."
              rating="⭐⭐⭐⭐"
              dateFinished="12/11/2022"
              review="This book was a good meh. I really liked the characters and the very obvious character development and relationships between the main character. However, my biggest complaint is that there was so much reptition and the book could have been a good bit shorter if we weren't constantly remided about how the characters hated each other. I would have also liked to see more of the dynamic they had while they were working together as the would have showed a lot of their character development on a different level. Finally, I did think the plot was pretty good and lke how the author brought is diversity. Yet, I did find that as the book went on, so did the ridiculousness of the book went on as the plot started to become a bit unrealistic. "
              ghLink="https://www.goodreads.com/book/show/56688531-twisted-hate?ref=nav_sb_ss_1_12"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={love_theoretically}
              isBlog={false} 
              title="Love, Theoretically"
              author="Ali Hazelwood"             
              description="Elsie Hannaway, a theoretical physicist leading a double life as a fake girlfriend, faces her greatest challenge when she encounters Jack Smith, the experimental physicist who ruined her mentor's career, leading to a scholarly sabotage turned unexpected romance that tests her theories on love."
              rating="⭐⭐⭐⭐⭐"
              dateFinished="08/26/2023"
              review="I really really enjoyed this book. Felt like the first book that I'e read in a long time that was well written, enjoyable, and had a HEA. I love how the author focuses on making the female characters in these books focused on excelling in the STEM fields and how the guys are fairly realistic and someone to definitely fall for. I enjoyed this book more than Love Hypothesis becase I though that the main female character had such a strong personality and character, and the guy was just generally admirable. Their bantering and slower burn relationship was nice to witness because they deffinelty went from enimies, to friends, then to lovers, something that is extremely realistic and progression was good.  Also, I greatly appreaciated the writing style overall and how there was little to no repetition throughout the book and the plot was constantly progressing...something that I've noticed main book are lacking. "
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twisted}
              isBlog={false} 
              title="Twisted"
              author="Emily McIntire"             
              description="Yasmin Karam, a privileged heiress, faces an impossible choice between her father's last wish for her to marry a man of his choosing and her love for a servant, while Julian Faraci, determined to become the most powerful man, will stop at nothing to achieve his goals, even if it means forcing Yasmin into marriage."
              rating="⭐⭐"
              dateFinished="08/30/2023"
              review="This book was extremely meh (technically DNF). The only way that I was able to get through it, quite honestly, was by skipping 1/2 of it. I read the first 4th of the book and it was just extremely dull... the writing was good but my problems with the lack of progression in the plot. They made Julian have a senstive side, which I liked and admired, but there was still something off with the main character. It made it extremely hard to like the main guy character when his focus was on killing and riches. Yasmine was alright, she didn't bug me until the end of the book...just doesn't make sense to me why an author would purposefully have the main female character start downgrading and undermining herself by using derogatory words....not a fan of all. Also, (SPOILER), at the end when she so easily killed her childhood love made no sense to me...she could have simply shot him so that he was hurt but not killed, it really just made it seem like she didn't care at all. Overall, extremely slow moving book, even for a slow burn, the character development was their but the characters were just a weird bit of unlikeable."
              ghLink="https://www.goodreads.com/book/show/61434791-twisted?from_search=true&from_srp=true&qid=f0uiCgRjWF&rank=9"
            />
          </Col>

          <h5 style={{ color: "white", textAlign: "left", paddingLeft:"2%"}}>
          Small Town Romance
          </h5>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={juniper_hill}
              isBlog={false} 
              title="Juniper Hill"
              author="Devny Perryy"             
              description="In Quincy, Montana, Memphis Ward arrives with her newborn on a chaotic day, seeking a fresh start far from her glamorous past. She takes a job as a housekeeper at The Eloise Inn and meets the handsome, rugged chef and landlord, Knox Eden, sparking a connection that feels like a dream she's not sure she can chase after giving up on her dreams."
              rating="⭐⭐⭐⭐"
              dateFinished="01/07/2023"
              review="Ahh this book was definiltey a good choice to read before going back to school after break. I love the romance in the novel, but I love the timeline of the book more. It seems weird that in a lot of romance books/movies that the characters are falling head over heels with each other after a month or so of knowing each other but this book add a very realistic timeline, which allowed for better character developemt and relationship development between the main characters. I also enjoyed how the author included a single mother and the raw emotion of a mother, making her the main character. The book allows you to definitely develop a strong understanding of each character but also allows for the understanding of their relationship. The climax of the book would be the only thing I would really change because the child getting kidnapped but his father's mistress is a bit too much...would have made more sense if the father's wife or simply Jenny kidnapped him just cause the other lady came out of the blue. Anyways would definelty recommend as nice, family oriented book and I will defenitley be reading more books from the series."
              ghLink="https://www.goodreads.com/book/show/59114267-juniper-hill?from_search=true&from_srp=true&qid=MZ5qYCQwST&rank=1"
            />
          </Col>

          <h5 style={{ color: "white", textAlign: "left", paddingLeft:"2%"}}>
          Bestfriend's Brother
          </h5>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={darling_venmon}
              isBlog={false} 
              title="Darling Venmon"
              author="Parker S. Huntington"             
              description="Definetly one of the better books I've read this school year. This is a book that I won't forget because of the rawness in the book and the great character development. The main hero and heroine in the book had a slow build up to the relationship, but was mostly worth teh wait. Was not a book that I would usually pick up, but once I did, I couldn't put it down. The relationship was built upon raw relationship, brings in sensative topics in a very skillful and then works in the side characters very well."
              rating="⭐⭐⭐⭐"
              dateFinished="11/2023"
              review="Definetly one of the better books I've read this school year. This is a book that I won't forget because of the rawness in the book and the great character development. The main hero and heroine in the book had a slow build up to the relationship, but was mostly worth teh wait. Was not a book that I would usually pick up, but once I did, I couldn't put it down. The relationship was built upon raw relationship, brings in sensative topics in a very skillful and then works in the side characters very well."
              ghLink="https://www.goodreads.com/book/show/150304767-darling-venom?ref=nav_sb_ss_2_7"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={terms_conditions}
              isBlog={false} 
              title="Terms and Conditions"
              author="Lauren Asher"             
              description="A CEO in line to inherit his family's media empire and his assistant enter a fake marriage arrangement to fulfill a dying wish, but as their public act turns into something real, their carefully crafted rules are challenged, and the lines between their fake and genuine feelings blur in this contemporary romance."
              rating="⭐⭐⭐⭐"
              dateFinished="03/17/2022"
              review="Very much enjoyed this book. The dynamic and ease between the two main characters was something I would like in my future relationships. The main characters could read each other’s feelings and understood each other very well. Iris, the heroine, was my favorite character. Here witty comebacks and strong personality is something that is very aspirable. She didn’t make herself weak in any situation and held her ground for the most part. Declan, the hero, is my kind of guy, except he’s very stubborn and to himself which was frustrating. There were a good amount of spice scenes in this book as well as a true plot which made it very well balanced and my kind of book. Loved the writing and plot of this novel, however, I gave it a ⅘ because parts of the book and the thoughts that the characters were having seemed extremely repetitive."
              ghLink="https://www.goodreads.com/book/show/86767939-terms-and-conditions?ref=nav_sb_ss_1_19"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={right_move}
              isBlog={false} 
              title="The Right Move"
              author="Liz Tomforde"             
              description="The newest Captain of the Chicago Devils NBA team, Ryan Shay, and his roommate Indy Ivers find themselves in a fake relationship to prove Ryan's approachability to the team's General Manager, but as they navigate this charade, lines between real and fake blur, leading to unexpected romantic complications and challenging Ryan's belief in love."
              rating="⭐⭐⭐"
              dateFinished="05/23/2023"
              review="When I saw the number pages of this book, I was like 'wowza, that's too many pages'. I did not stand corrected. This book had too many pages, but honestly it was alright. There was quite a bit of repetiion in the book, along the lines of Ryan can't trusing anyone because of his past and Indy wnted to start a family and wanting to help everyone round them. The plot and character devleopment of this book was pretty good, but my gosh it was lonh. This book could have been definitley cut down in half the number of pages and would have been just as fine. Ryan is this introverted NBA start and Indy is this outgoing person who just lights up everything around her (typical, I know). Their dynamic and slower build up towards the beginning of the book was good, but then it just started to get really drawn out. Also, the side characters in this book are quite good. "
              ghLink="https://www.goodreads.com/book/show/84943172-the-right-move?from_search=true&from_srp=true&qid=ednLlUMDfM&rank=1"
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

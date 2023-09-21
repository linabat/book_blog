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
import happy_place from "../../Assets/Projects/happy_place.jpeg";
import final_offer from "../../Assets/Projects/final_offer.jpeg";
import ruthless_people from "../../Assets/Projects/ruthless_people.jpeg";
import by_a_thread from "../../Assets/Projects/by_a_thread.jpeg";
import corrupted_chaos from "../../Assets/Projects/corrupted_chaos.jpeg";
import little_burden from "../../Assets/Projects/little_burden.jpeg";
import destroyed from "../../Assets/Projects/destroyed.jpeg";
import lies_mischief from "../../Assets/Projects/lies_mischief.jpeg";
import luna_lie from "../../Assets/Projects/luna_lie.jpeg";
import rebel_redemption from "../../Assets/Projects/rebel_redemption.jpeg";
import bright_side from "../../Assets/Projects/bright_side.jpeg";
import in_five_years from "../../Assets/Projects/in_five_years.jpeg";
import misconduct from "../../Assets/Projects/misconduct.jpeg";
import educated from "../../Assets/Projects/educated.jpeg";
import last_thing from "../../Assets/Projects/last_thing.jpeg";
import used_to_be from "../../Assets/Projects/used_to_be.jpeg";
import silent_patient from "../../Assets/Projects/silent_patient.jpeg";


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

          <h5 style={{ color: "white", textAlign: "left", paddingLeft:"2%"}}>
          Second Chance Love
          </h5>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={happy_place}
              isBlog={false} 
              title="Happy Place"
              author="Emily Henry"             
              description="Harriet and Wyn, a couple who broke up but haven't told their friends, navigate a weeklong vacation together with their close-knit group, concealing their lingering feelings and putting on a facade to protect their friends' hearts as the beloved Maine cottage they visit every year goes up for sale."
              rating="⭐⭐⭐⭐"
              dateFinished="09/08/2023"
              review="3.5 stars rounding up to 4. It's crazy to me that I've read well over 200 young adult/romance books over the past few years, but this is my first romance book that was second chance lovers. I was always stayed away from this trope just cause I didn't find the appeal...wouldn't be witnessing romane between the main characters happen geniunely, but rather see a relationship that can try to be rekindled...not sure if there will actually be an HEA. But, I have to say, that this book did a good job about changing my perspective on this trope. I enjoyed reading this book and geniuenly seeing the love between Harriet and Wyn (though the names are a bit weird in my opinion). The plot was good and the side characters were good, but I felt like there should have been more...something was lacking...possibly the lack of closeness between the main friends in throughout the novel. There was some repetition in throughout the plot, and it alternated between past and present. I did appreciate how the present poritions of the book were genuinely longer (made the alternative changing times good). There was a lot to unpack at the end of the book but I think the relationship growth the was good, sometimes a bit random. This was my first Emily Henry book and it was very likely that would read another book by them."
              ghLink="https://www.goodreads.com/book/show/61718053-happy-place?ref=nav_sb_ss_1_11"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={final_offer}
              isBlog={false} 
              title="Final Offer"
              author="Lauren Asher"             
              description="The bad boy with a troubled past and a secret love for his childhood friend Lana Castillo, who unexpectedly returns to her life when he tries to sell their shared family lake house."
              rating="⭐⭐⭐"
              dateFinished="09/13/2023"
              review="The bad boy with a troubled past and a secret love for his childhood friend Lana Castillo, who unexpectedly returns to her life when he tries to sell their shared family lake house."
              ghLink="https://www.goodreads.com/book/show/61681786-final-offer?ref=nav_sb_ss_1_11"
            />
          </Col>

          <h5 style={{ color: "white", textAlign: "left", paddingLeft:"2%"}}>
          Mafia
          </h5>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ruthless_people}
              isBlog={false} 
              title="Ruthless People"
              author="J.J. McAvoy"             
              description="Melody and Liam, two fierce crime bosses with a complex and arranged marriage, must work together to navigate the evolving mafia world while maintaining their façade of power, family, and respect."
              rating="⭐"
              dateFinished="01/24/2023"
              review="DNF - once again another 1 star book that I couldn't bring myself to finish. I did not like this book at all and really didn't like the characters. This arange marriage book was just too much of the characters trying to over power one another...and was just so not realistic. The main guy fell in love with the girl within 4 days of knowing each other..umm what...and the girl just made me mad. They both had a really really large fascination with killing and murdering which makes me concerned for the author themselves. I went into this book thinking that it's going to be a good read...literally took me 3 hours to find a book and decided on this on...was very a much a bad move. I was catfished once again by TikTok videos and then thought it would actually live up to the expectations this time because of good ratings on Goodreas, naive thoughts, I know. The plot was semi-interesting, but I had an incredibly hard to actually connecting with the characters, especially with the fact that they just kept on killing for the sake of it...no thank you. Anyway I tried really hard on this one, but couldn't finish and don't plan on it."
              ghLink="https://www.goodreads.com/book/show/59114267-juniper-hill?from_search=true&from_srp=true&qid=MZ5qYCQwST&rank=1"
            />
          </Col>

          <h5 style={{ color: "white", textAlign: "left", paddingLeft:"2%"}}>
          Slowburn Romance
          </h5>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={luna_lie}
              isBlog={false} 
              title="Luna and the Lie"
              author="Marianna Zapata"             
              description="Luna Allen has a closet full of secrets she's determined to keep hidden, even if they involve her less-than-friendly boss, as she believes that despite life's imperfections, everything has worked out just the way it was meant to be."
              rating="⭐⭐⭐⭐⭐"
              dateFinished="01/31/2023"
              review="This was my second reading this book and I was not dissapointed...not shocking thoughh because I am very much obssesed with Marianna Zapata and her books. Re-reading this again, I would give it a 4 stars just cause I think it dragged out way too long and then I almost and to force myself to continue at some points just because the slow burn was too much of a slow burn. Regardless of this, I enjoyed rereading this book, something I don't usually do, but desperate times call for desperate measures (my streak of find good books has been an all time low). I loved the characters in this book, Rip and Luna and really enjoyed their dynamic and how a lot of the book actually focused on the growth of their relationship together. Also the side characters of this book were pretty good. It's one of those kind of books that you can easily visualize in your head while reading which is the best part of reading. I do wish that some of the plot was dedicated towards the development of the relationship between Luna and her sisters but that's okay. Favorite part of the book is when Luna was able to help Rip get out of the aftershock after the car accident. Another favorite moment was when Rip helped Luna and stayed at her house when her cousin broke into her house and wrecked it. Definitley recommend as a first time read."
              ghLink="https://www.goodreads.com/book/show/42883009-luna-and-the-lie?ref=nav_sb_ss_1_16"
            />
          </Col>

          <h5 style={{ color: "white", textAlign: "left", paddingLeft:"2%"}}>
          Workplace Romance
          </h5>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={by_a_thread}
              isBlog={false} 
              title="By a Thread"
              author="Lucy Score"             
              description="Dominic can't decide if he wants to intimidate or kiss Ally, the woman he got fired and who now works in his office, but as their personalities clash, sparks fly in this steamy workplace romantic comedy where Dominic aims to solve the puzzle of Ally's secret while resisting the temptation to take advantage of his position."
              rating="⭐"
              dateFinished="08/20/2023"
              review="I'm writing this review a week later, and quite honestly, I've forgetten most of the plot of the book. There was nothing significant that stuck with me and just in general this book was meh. They were more physically attracted to each other rather than actual character personality substance which is definitely a red flag for me in a book. Dominic got Ally fired then hired her, developed a crush on her, and we all know what happens from there. It was just very much a cliche of a book. I love books that make me stare at a wall after I've finished the last page and just contemplate everything and read, and this book was definitely so far from allowing me to reach that stage. The plot was slow moving and there was a quite a bit of repetition throughout the plot, which I am not a fan of at all."
              ghLink="https://www.goodreads.com/book/show/48677178-by-a-thread?from_search=true&from_srp=true&qid=SR1BxbTrRZ&rank=1"
            />
          </Col>

          <h5 style={{ color: "white", textAlign: "left", paddingLeft:"2%"}}>
          Children in Tow 
          </h5>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rebel_redemption}
              isBlog={false} 
              title="The Rebel's Redemption"
              author="Lexi Foss"             
              description="In this tale of rebels and regrets, the protagonist faces a moment of relief upon hearing of Jean Perry's passing, hoping to mend a significant mistake from the past. However, a new challenge arises with Jean's sister, Avery, and the story takes a twist when the protagonist must play house, all while resisting old feelings and embracing a seductive game of observation, as not all rebels may find redemption."
              rating="⭐⭐⭐"
              dateFinished="01/02/2023"
              review="This book was probably the only book that I've ever read with such low review numbers. I found it on tik tok and decided to give a try because of the description was quite intriguing. I really liked the characters and all of them seemedh genuine and especially enjoyed the character development between Jaime (little boy) and his dad (Wyatt). I did, however, think that the book was a bit odd in the sense that no right guy would approach the aunty (Avery) and make sexual references and get in personal space all within the span of a couple of hours of knowing each other. It was just weird, very sudden, and weakened the development of their relationship. As a result, I was at a loss about whether the development of their relationship was sparked by genuine personality interests or sexual interests. Also, I would like to add that the book timeline was very flat, in the sense that the climax was not really a climax and it just seemed like a normal conversation...not quite sure how I feel about that. I would say this book is worth a shot, however, not quite sure if I would go back and read any of the other books in this series...just seems to predictable, rushed sexually, and plot was not developed quite enough."
              ghLink="https://www.goodreads.com/book/show/50841664-the-rebel-s-redemption?ref=nav_sb_ss_2_23"
            />
          </Col>

          <h5 style={{ color: "white", textAlign: "left", paddingLeft:"2%"}}>
          Heart Breaking
          </h5>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bright_side}
              isBlog={false} 
              title="Bright Side"
              author="Kim Holden"             
              description="Kate Sedgwick's unconventional life takes an unexpected turn when she falls in love with Keller Banks in a small town, but their love story is shadowed by secrets that have the power to both heal and shatter them, ultimately challenging their resilience and belief in love."
              rating="⭐⭐⭐⭐⭐"
              dateFinished="01/02/2023"
              review="This book very much got me. To be fair, it took me forever to read it because of the little time I had to sit down and continue the book, but when I did read it, it didn't disappoint. Not going to lie, the beginning of the book was a bit slow for me, but once I started, it was hard to stop. I enjoyed the writing of the book and how realisitc the conversations and characters were. Katie and Gus's dynamic was very well written and made me sort of jealous - I want that kind of friendship. Katie was a very loveable character and the author did an extremely good job of making her relatable and realistic. My heart hurt when her secret was spilled and reading about how all the other side characters had to handle the changes in her life. I would have wanted her to have more time to buid her relationship with Keller and his daughter but ugh, I guess that was part of the point...to keep us wanting more and being able to get to it. Overally I would recomment -- definitely a solid 4.5 but I rounded up because of the way I couldn't fall asleep because of everything that happened in the book."
              ghLink="https://www.goodreads.com/book/show/22669832-bright-side?ref=nav_sb_ss_5_6"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={in_five_years}
              isBlog={false} 
              title="In Five Years"
              author="Rebecca Serle"             
              description="Manhattan lawyer Dannie Kohan has her life perfectly planned until a strange vision on the night of her engagement propels her five years into the future, where she finds herself in a different life. Confused and dismissing it as a dream, she moves on, but when she meets the same man from her vision years later, her world unravels, leading to a tale of love, friendship, and the unpredictability of destiny. SPOILERS IN REVIEW"
              rating="⭐⭐⭐⭐⭐"
              dateFinished="01/15/2023"
              review="This book was something else. I stayed up until 3:30am to finish. I'm not going to lie it took a bit of effort for me to start the book and force myself to continue reading it, but once the plot starts picking I couldn't stop. The whole time while reading the book, the author set up the plot so that I had one idea about how the ending will turn out and the all of sudden I start to question everything. I started to tear up several times at the end of the book and once I reached the last few pages my hands were shaking. This book shook me so much that as I write this, I feel the raw options I was feeling a week ago when I finished this amazing novel. The plot twist alone deserves the 5 stars. However, with everything else taken into account and if it was an option on Goodreads, I would have given it a 4.5. This is simply because the main character bugged me a bit just cause she seemed too neat (but I definitely think that was the author's intentions). The whole time, I was thinking that she would end up with Greg in a happily ever after manner...that did not happen. I didn't like David so I didn't event consider that there was potential that something might happen to Bella and that's how  the two end up getting together. I went into this book thinking it was a typical romance book with a bit of paranorma when she saw the vision from 5 years in advance, but it was definitely not that. The emotions are hitting right now just thinking about how Bella died at the end, but how she had everything sorted out for the main character (I'm forgettng her name), and I don't think the rush of these emotions will change. Definitely a book I recommend (especially hard cover too -- something I hadn't done in a while)."
              ghLink="https://www.goodreads.com/book/show/50093704-in-five-years?ref=nav_sb_noss_l_13"
            />
          </Col>

          <h5 style={{ color: "white", textAlign: "left", paddingLeft:"2%"}}>
          Dark 
          </h5>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={corrupted_chaos}
              isBlog={false} 
              title="Corrupted Chaos"
              author="Shain Rose"             
              description="Cade Armanelli, an infamous billionaire hacker, and his determined employee find themselves sharing a cabin and a bed during a cybersecurity team retreat. Despite his antisocial and ruthless reputation, she discovers his prowess extends beyond hacking. Yet, she must remain focused on her job, even if it means dividing the bed with a red line to keep their personal lives from interfering with their mission."
              rating="⭐⭐"
              dateFinished="01/16/2023"
              review="I was cat-fished into reading this book. I was scrolling through tik tok and a booktok clip came up about a specific scene that intrigued me. Looking for the title of said book, I fell across this book and decided to read it. A lot of the synonposis was an overlap. As I was reading this book, I was waiting for the scene that I had seen to come up...by the end of the book during the epilogue I realized my mistake...definitely the wrong book. This book was just extremely meh. They claim to love each other, but this love was built pure on sexual tension and hate. Cade was an extremely alpha male and was just very weird with his sexual actions and Izzy was literally just subjecting herself the whole time. Also, this book was extremely repetitive. Had it not been for my pure boredom and desire to actually find the scene I saw on Tik Tok, this book would have likely been a DNF. The end was predictable and just very much ughhh. I truly don't think that they loved each other, but rather just like how they made each other fell. The writing style was fine, but the plot was just not good. I'll be taking a break from this author for the time-being."
              ghLink="https://www.goodreads.com/book/show/61757380-corrupted-chaos?ref=nav_sb_ss_1_14"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={little_burden}
              isBlog={false} 
              title="His Pretty Little Burden"
              author="Nicci Harris"             
              description="Not a good book at all. Can't provide description because plot was not clear. No objective."
              rating="⭐"
              dateFinished="01/16/2023"
              review="DNF - very much one of the worst books that I've ever read. I saw a catfish video of it on Tik Tok and it sounded entertaining...lies. I hated it and couldn't bring myself to read more than half the book. The girl is 18 and the guy is like 40 years old, who is married and has a mistress and is obviously preying on the girl. A very very weird book and greatly repetitive. The main guy got off by command and pretty much grooming the 18 year old, and the 18 year old was just adsfkj;kals. Not only were the characters horrible, but the writing was just so repetitive and so detailed with random stuff that are not important. Did not like it all. Would honeslty give it a 0 starts if I could but a 1 for effort of the author trying...not a good try by still a try. Do not read."
              ghLink="https://www.goodreads.com/book/show/60307542-his-pretty-little-burden?ref=nav_sb_ss_1_25"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={destroyed}
              isBlog={false} 
              title="Destroyed"
              author="Pepper Winters"             
              description="Two individuals with complicated lives and their own secrets collide, igniting a passionate and dangerous connection that threatens to unravel everything they've been hiding."
              rating="⭐"
              dateFinished="3/20/2022"
              review="DNF - This book was very weird. He laid eyes on her, starting talking down to her and being extremely misogynistic and literally just took it in. I barely started reading the book but she talked about being alpha women which I’m all about, but they are subject to the wants of the hero which is extremely weird. Long story short, I started reading the book and didn't like it so I skipped to the end to see what happens and thank God I didn’t read the complete book. I was extremely uncomfortable in one of the last scenes as I understood the parts that I missed and how she became his carrier (which makes no sense whatsoever) and really weird. It was paranormal and made me stressed, which is not a fun feeling especially when I’m taking time to read the book to distress myself from the craziness in myself. So no thank you."
              ghLink="https://www.goodreads.com/book/show/60307542-his-pretty-little-burden?ref=nav_sb_ss_1_25"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lies_mischief}
              isBlog={false} 
              title="In Fury Lies Mischief"
              author="Amo Jones"             
              description="Was not a fan of this book. To be honest, I went in reading this book thinking I would like it because the cover looked nice (ik don’t judge) and the synopsis of the book seemed good and edgy. However, barely a few pages in I was very lost. There were things that were mentioned that I had no idea what was meant by it. Although I didn’t read the first book of the series, this could have been read as a standalone, without a lot of confusion. I genuinely had to push myself to continue reading the book. Why you may ask? The writing itself was good, although the plot was on the other end of the spectrum. The spice and tension between the two main characters were good - that’s as far as it went. Plot was confusing, scenes felt like they were repeated and it seemed like the only reason that the hero was attracted to the heroine in the first place was because of physical appearance and nothing else. Also, any time they had a fight, they would somehow end up doing the dirty, and then afterwards everything would be weird again…not sure how this works. True rating of the book would be a 2.5, but since I enjoyed the author’s writing style, rated it a 3 on good reads."
              rating="⭐⭐"
              dateFinished="3/19/2022"
              review="Was not a fan of this book. To be honest, I went in reading this book thinking I would like it because the cover looked nice (ik don’t judge) and the synopsis of the book seemed good and edgy. However, barely a few pages in I was very lost. There were things that were mentioned that I had no idea what was meant by it. Although I didn’t read the first book of the series, this could have been read as a standalone, without a lot of confusion. I genuinely had to push myself to continue reading the book. Why you may ask? The writing itself was good, although the plot was on the other end of the spectrum. The spice and tension between the two main characters were good - that’s as far as it went. Plot was confusing, scenes felt like they were repeated and it seemed like the only reason that the hero was attracted to the heroine in the first place was because of physical appearance and nothing else. Also, any time they had a fight, they would somehow end up doing the dirty, and then afterwards everything would be weird again…not sure how this works. True rating of the book would be a 2.5, but since I enjoyed the author’s writing style, rated it a 3 on good reads."
              ghLink="https://www.goodreads.com/book/show/60307542-his-pretty-little-burden?ref=nav_sb_ss_1_25"
            />
          </Col>

          <h5 style={{ color: "white", textAlign: "left", paddingLeft:"2%"}}>
          Age Gap
          </h5>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={misconduct}
              isBlog={false} 
              title="Misconduct"
              author="Penelop Douglas"             
              description="Easton Bradbury, a former tennis player turned teacher, is determined to excel in her new role and forget her past until a parent-teacher meeting with Tyler Marek, a wealthy businessman, introduces an unexpected attraction that challenges her resolve and threatens to reveal secrets best kept hidden.."
              rating="⭐⭐⭐"
              dateFinished="12/19/2022"
              review="Not sure how to feel about this book. The plot was very meh as there wasn't much build up between Tyler and Easton since it was attraction at first sight. It was one of those books where they started to fall in love because of the physically attraction between them rather than fundamnetal values - not a fan. There were a lot of steamy scenes, which honestly took up majority of the book. Without the steamy scenes, the book would maybe 1/3 the length. Quite honestly, I considred multiple times while I was reading the book to just stop and find another more enjoyable novel but I was bored enough that I just continued reading...glad I did only because the ending had a small twist that was surprising but almost expected. I've read multiple Penelop Douglas books because this has to be one of the least favorite ones. Not a book that I find myself drawn too and when I got up and could simply forget about it...that's how you know its definitely less that a 4/5 star book. Anyways...quick summary of the book: young teacher, Easton, meets super rich guy, Tyler at an event. They are attracted to each other but ending up getting disconnected for 6 monthts until they find out that Easton is teaching one of Tyler's son's classes. They had to hide their relationship and do weird stuff in private, but other than that nothing super duper interesting happens. The ending is when Easton's brother, Jack, made her fearful but mimicking a stalker and breaking into her apartment multiple of time...which sucked because I think Jack was one of the better written characters."
              ghLink="https://www.goodreads.com/book/show/61757380-corrupted-chaos?ref=nav_sb_ss_1_14"
            />
          </Col>

          <h3 style={{ color: "white", textAlign: "left"}}>
          Memoir
          </h3>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={educated}
              isBlog={false}
              title="Educated"
              author="Tara Westover"
              description="Tara Westover's gripping memoir, she recounts her extraordinary journey from a secluded upbringing in the mountains of Idaho, where she had no formal education and relied on herbalism for medical care, to her determination to self-educate, ultimately earning admission to prestigious universities and discovering a world beyond her family's isolation, but at the cost of severed ties and a quest for self-invention."
              rating="⭐⭐⭐⭐"
              dataFinished="05/07/2023"
              review="To be honest, it feels quite weird to rate a book that as written based someones life. This was my first reading a full memoir novel and it be frank, it took me quite sometime to get through it because I was reading it in very slow chunks and didn't have the usual feeling of needing to read through it. But with that, I really got to absorb the book and what Tara was writing about. The writing was well done. I can't comment on the plot as that is not something that I should judge but, man, if I had a brother like Steve and a father like Tara's dad, I would not have been able to surivie nor grow to the person that Tara did. This a story of self identity and recognition of who and what family is. I've always enjoyed reading about other's lives, which is why it's shocking tha tthis was my first actual memoir, but definitley won't be the last. Tara's story is truly inspriational and as I was reading through it, I felt like a lot of what she was saying can defintely be struggles others relate with for different reasons. Ultimately, her making a decision that was best for her was something that made me happy to read about in the end, especially after reading about all her struggles. "
              ghLink="https://www.goodreads.com/book/show/35133922-educated?from_search=true&from_srp=true&qid=awWzfBCBz5&rank=1"
            />
          </Col>

          <h3 style={{ color: "white", textAlign: "left"}}>
          Mystery
          </h3>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={last_thing}
              isBlog={false}
              title="The Last Thing He Told Me"
              author="Laura Dave"
              description="Tara Westover's gripping memoir, she recounts her extraordinary journey from a secluded upbringing in the mountains of Idaho, where she had no formal education and relied on herbalism for medical care, to her determination to self-educate, ultimately earning admission to prestigious universities and discovering a world beyond her family's isolation, but at the cost of severed ties and a quest for self-invention."
              rating="⭐⭐⭐⭐"
              dataFinished="09/02/2023"
              review="3.5 stars rounded up to 4. I've had this book sitting in my 'TBR' list for quite sometime and kept seeing it pop up on my seeing it pop up on my Tik Tok field and displayed in bookstores, so I decided to finally give it a try. Very glad I did so. This book had me hooked - phyiscally couldn't put the book down for hours. It started off incredibly strong but towards 2/3 of the way into the book, it just seems to fall off quite a bit. The plot was suddenly rushed, the secrety coming out could have been a lot more intense and I wasn't completely satisfied with the ended (might have been the intention but I would have genuinely liked a bit more). I would have loved to see more of a relationship build between Hannah and Bailey because that also just seemed rushed. Also, I went in expected there to be a bit more action, so wasn't satisfied with the amount that was actually there. The writing was good, although at times it was a bit repetitive, which slowed down the book a bit. Overally, would recommend this book to someone else as it still was down pretty well over all, but would warn them to not go in with very high expectations as I did."
              ghLink="https://www.goodreads.com/book/show/54981009-the-last-thing-he-told-me?ref=nav_sb_ss_1_14"
            />
          </Col>

          <h3 style={{ color: "white", textAlign: "left"}}>
          Mental Health - Fiction 
          </h3>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={used_to_be}
              isBlog={false}
              title="The Way I Used to Be"
              author="Amber Smith"
              description="Eden desperately wishes to go back in time to change the course of one fateful day, but instead, she hides her past and pretends not to need anyone or anything. However, as her life unravels, she realizes that the only person who can save her is herself."
              rating="⭐⭐⭐⭐"
              dataFinished="12/25/2022"
              review="This book was very different from what I usually read. It was an good different, but definetly what was not expected. The main girl was raped by her brother's best friend her freshman year of high school and it wasn't until senior year did anyone find out. Fortunately, I have never been in the position she has, so I can't say what would realistically take place. However, there are parts throughout the book that I was frustrated about, mostly because of the fact that it was repetivie in how she was acting out. I understand that this may be part of the build up the story, however, but it was almost too much. There were really no insight to her thoughts and the progression of the book was slow. Also, the way she used people around her made me wonder if this was in fact a realistic information of what would have happened to someone when they are assualted...just wondering how accurate the information is. Overall, althought the writing was really good and the character sympathy path was very solid, the plot was a bit slow, hence the missing star."
              ghLink="https://www.goodreads.com/book/show/54981009-the-last-thing-he-told-me?ref=nav_sb_ss_1_14"
            />
          </Col>

          <h3 style={{ color: "white", textAlign: "left"}}>
          Psychological Thriller
          </h3>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={silent_patient}
              isBlog={false}
              title="The Silent Patient"
              author="Alex Michaelides"
              description="Alicia Berenson, a seemingly perfect artist, becomes notorious when she shoots her husband without explanation, and criminal psychotherapist Theo Faber is determined to break her silence, setting off a suspenseful and consuming quest to uncover the truth behind the shocking act of violence."
              rating="⭐⭐⭐⭐"
              dataFinished="02/12/2023"
              review="I honestly don't know how to feel about this book. Just finished it a few minutes ago and the word the best describes my feelings would be disturbed. As I was reading the book, I was trying to pinpoint the murderer and try to figure out the conclusion of the bok, but I would have never guessed how it ended. Quite shocked right now but it makes sense. Reflecting back on different parts of the book, I now realized I was confused by some of the odd statements that were made by Theo as I wasn't sure why some of the pieces weren't connecting. Was lowkey creeped out at parts of the book, but it all makes sense now. The author did a spectacular job of leading me on to create possible versions of the ending and then they way the way the connected everything back together at the book was very well done. Realize the time switch at the end was what really allowed for all the pieces to fall into place. Would I recommend this book for anyone to read...no...not because it was bad but more so of how disturbed I'm feeling right now. The plot really does go to show how far people are blinded by their own ego and what they will do to maintain the love they feel in their life...but that fact that he destroyed 3 people's life at the end of the book is unfathonabme. There was something off about Theo from the beginning but didn't realize until how off until I was literally flipping through the last pages of the book."
              ghLink="https://www.goodreads.com/book/show/54981009-the-last-thing-he-told-me?ref=nav_sb_ss_1_14"
            />
          </Col>

        </Row>

      </Container>
    </Container>
  );
}

export default Projects;

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
import flawless from "../../Assets/Projects/flawless.jpeg";
import yours_truly from "../../Assets/Projects/yours_truly.jpeg";
import too_short from "../../Assets/Projects/too_short.jpeg";
import with_you_forever from "../../Assets/Projects/with_you_forever.jpeg";
import out_on_limb from "../../Assets/Projects/out_on_limb.jpeg";
import tattered from "../../Assets/Projects/tattered.jpeg";
import true_love_experiment from "../../Assets/Projects/true_love_experiment.jpeg";
import book_lovers from "../../Assets/Projects/book_lovers.jpeg";
import eleanor_oliphant from "../../Assets/Projects/eleanor_oliphant.jpeg";
import beach_read from "../../Assets/Projects/beach_read.jpeg";
import hello_beautiful from "../../Assets/Projects/hello_beautiful.jpeg";
import before_we_strangers from "../../Assets/Projects/before_we_strangers.jpeg";
import cuckoo_calling from "../../Assets/Projects/cuckoo_calling.jpeg";
import sparrow from "../../Assets/Projects/sparrow.jpeg";
import one_only from "../../Assets/Projects/one_only.jpeg";
import your_intolerable from "../../Assets/Projects/youre_intolerable.jpeg";
import falling_embers from "../../Assets/Projects/falling_embers.jpeg";
import mile_high from "../../Assets/Projects/mile_high.jpeg";jgit 
import before_let_go from "../../Assets/Projects/before_let_go.jpeg";
import seven_husbands from "../../Assets/Projects/seven_husbands.jpeg";
import nora_script from "../../Assets/Projects/nora_script.jpeg";
import getting_real from "../../Assets/Projects/getting_real.jpg";
import only_for_week from "../../Assets/Projects/only_for_week.jpg";
import room from "../../Assets/Projects/room.jpg";
import could_be_us from "../../Assets/Projects/could_be_us.jpg";
import motor_man from "../../Assets/Projects/motor_man.jpg";
import just_summer from "../../Assets/Projects/just_summer.jpg"
import butterfly_project from "../../Assets/Projects/butterfly_project.jpg"
import had_be_you from "../../Assets/Projects/had_be_you.jpg"
import caught_up from "../../Assets/Projects/caught_up.jpg"
import looking_alaska from "../../Assets/Projects/looking_alaska.jpg"
import abed_salama from "../../Assets/Projects/abed_salama.jpg"
import make_you_mine from "../../Assets/Projects/make_you_mine.jpg"
import tragic from "../../Assets/Projects/tragic.jpg"
import paradise_problem from "../../Assets/Projects/paradise_problem.jpg"
import redeemed from "../../Assets/Projects/redeemed.jpg"
import night_blossoms from "../../Assets/Projects/night_blossoms.jpg"
import midnight_library from "../../Assets/Projects/midnight_library.jpg"
import silent_waters from "../../Assets/Projects/silent_waters.jpg"
import drago from "../../Assets/Projects/drago.jpg"
import dark_romeo from "../../Assets/Projects/dark_romeo.jpg"


import React, { useState } from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import ProjectCards from './ProjectCards'; // Ensure this import matches the filename
import FilterBar from './FilterBar'; // Import the filter bar component
import 'bootstrap/dist/css/bootstrap.min.css';

function Projects() {
  // Define initial data and states
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedSubtrope, setSelectedSubtrope] = useState('');
  const [sortCriteria, setSortCriteria] = useState('date'); // State for sorting criteria


  // Sample data for genres and subtropes
  const genres = [
    'Romance', 
    'Nonfiction', 
    'Memoir',
    'Mystery',
    'Mental Health - Fiction',
    'Psychological Thriller',
    'Magical Realism'
  ];
  const subtropes = [
    'Fake Relationship', 
    'Enemies to Lovers', 
    'Small Town Romance', 
    "Bestfriend's Brother", 
    "Second Chance Love", 
    "Mafia", 
    "Slow Burn", 
    "Workplace", 
    "Children in Tow",
    "Heart Breaking",
    "Dark",
    "Age Gap",
    "Sports", 
    "Misc.",
    "Arranged Marriage"
  ];

  const books = [
    {
      imgPath:graysonVow,
      isBlog:false,
      title:"Grayson's Vow",
      author:"Mia Sheridan",
      description:"Marriage of convenience where the female lead needs to marry to gain her inheritance...she chooses to trust a convicted felon.",
      rating:"⭐⭐⭐⭐",
      dateFinished:"08/20/2022",
      review:"After reading Archer's Voice, I had set the bar higher for this book, thinking it would be equivalent or close to equivanlence of the amazingness of that book. However, I was dissapointed. The plot was pretty solid, good character development, and the playfullness between the hero and heroine was nice, however, somethings just didn't sit right with me. I think it came to a point where the plot was being dragged out too long and when the hero and heroine do finally acknowlege there feeling for each other and talk about it, the plot stretches out from that point until the next big event. I have to say, there was a decent balance between plot and spice, if anything the spice level could have been higher but that's alrigt. I like Gray's personality for the most part, but he seemed too self centeric at some points throughout the book and his character took some time to develop. Kira was alright too. I think with the trauma that she had gone through, the development or more emotion could have been put in at some point, but overally I like her optimistic and bright characer.",
      ghLink:"https://www.goodreads.com/book/show/86508524-grayson-s-vow?from_search=true&from_srp=true&qid=3QSXRdGKrw&rank=1",
      genre:'Romance',
      subtrope:'Fake Relationship'
    },

    {
      imgPath:the_contract,
      isBlog:false,
      title:"The Contract",
      author:"Melanie Moreland",
      description:"A ruthless boss and his fed-up assistant find themselves in a fake engagement that leads to unexpected feelings, challenging their mutual dislike and forcing them to question if love can truly change them",
      rating:"⭐⭐⭐⭐",
      dateFinished:"08/30/2022",
      review:"I absolutely loved this book. The author did a phenomanl job with the characters's development, especially the hero, the the build up of the plot. At first I didn't like the unnatural the conversation and thought process of the hero seemed, very self-centric and judgemental, but that changed throughout the book. Throughout the duration of me readig this book, I was easly able to imagine all the scenes that were taking place. One thing I really like with this writing style was that the author touched on all the important events and moments of the characters and their development towards their realtionship, but she skipped over time periods that were not significant to the plot, she would just give a brief sentence of what they had done. Another thing the author did a really good job on was the critical role of 3rd party characters (not the main characters) and how they were essential to the development for the main characters. They were well placed and easily blended into the plot to help progress the book.",
      ghLink:"https://www.goodreads.com/book/show/29333677-the-contract?ac=1&from_search=true&qid=3DwFkKB3Tk&rank=3",
      genre:'Romance',
      subtrope:'Fake Relationship'
    },

    {
      imgPath:the_favor,
      isBlog:false,
      title:"The Favor",
      author:"Suzanne Wright",
      description:"Vienna Stratton reluctantly accepted help from the ruthless CEO Dane Davenport, but when he unexpectedly proposed a twelve-month marriage arrangement, she realized that he was not just a devil in business, but also a seductive and alluring tempter capable of igniting her desires and making her question her own feelings.",
      rating:"⭐⭐⭐⭐⭐",
      dateFinished:"08/30/2022",
      review:"Absolutely loved this book. The first book that I read in August that took me out of my reading slump. It's been a few weeks since I read this book, but very much loved the characters in this book, especially Dante (dream kind of guy). The characters were great together and the connection they had was very genuine. Their relationship and the development of it was beautiful. The heroine was slightly annoying because she didn't fight back against the abuse she was receiving from her foster sister, but I guess that would just have been me acting different in that situation. Dante was alpha protective male that was absolutely amazing and his character development was phenomenal. The only thing I didn't particularly enjoy in the book were the side characters because they were annoying and their actions weren't exactly realistic and din't make sense. But overall, great book with great characters.",
      ghLink:"https://www.goodreads.com/book/show/53608355-the-favor?ref=nav_sb_ss_2_9",
      genre:'Romance',
      subtrope:'Fake Relationship'

    },

    {
      imgPath:the_marriage_effect,
      isBlog:false,
      title:"The Marriage Effect",
      author:"Karla Sorensen",
      description:"Logan Ward, a busy football player and guardian to his sisters, needs to find a wife to keep custody of his siblings, and Paige McKinney, a spontaneous ex-model, unwittingly declares herself his fiancée at the hospital, leading to a fake marriage that sparks unexpected chemistry between the grumpy groom and the impulsive bride.",
      rating:"⭐⭐⭐⭐⭐",
      dateFinished:"12/21/2022",
      review:"Super good book. The writing was pretty good and the pace of the book was perfect. There was just the right amout of steamy scence and plot development. Paige and Logan were the perfect fit together and it was obvious that their relationship was genuine althout they married out of convenieicne. I got to say the beginning of the book was okay...the writing was not flowing as well at that point but it got better once they go married. I also really enjoyed the sides characters, Logan's four sisters, who definitely help the devlopment of the book and were very well written, each with their own personality. The wit and sacrcasm that were built into the conversations was very well done, leaving wanting to read more. Somehow managed to read this in 5 hours or so which is quite an achievement for me lol. Definitley recommend as an easy book to escape reality for a little bit.",
      ghLink:"https://github.com/soumyajit4419/Plant_AI",
      genre:'Romance',
      subtrope:'Fake Relationship'
    },

    {
      imgPath:the_temp_wife,
      isBlog:false,
      title:"The Temporary Wife",
      author:"Catharina Maura",
      description:"Luca Windsor faces a double dilemma when his secretary quits her job and he's thrust into an unwanted arranged engagement, leading to a secret marriage arrangement with clear rules, but as time goes on, he realizes that the one thing Valentina truly wants is the one thing he can't give her - freedom.",
      rating:"⭐⭐",
      dateFinished:"04/01/2023",
      review:"DNF - I really tried with this one, but I just couldn't bring myself to suffer some more. Tik Tok has once again catfished me into reading a book. Very much liked the synopsis of this book because the trope is one of my favorites so of course I went had started to read it. Wrong move. The writing was horrible and the plot was just not moving...literally nothing significant happened. It's as if the author was having lapse in memory as she was writing this book and kept repeating herself every other page, forgetting that she had already written the same thing. Taking out all of the repeat and unecessary information that author includes, the book could have easily be 1/3 of its original length. The book sort of started out good and I did get in more than half-way, hoping that the plot would pick up and something actually happens...but I couldn't endure it any longer (literally stopped reading all of spring break because I wanted to finish this book but couldn't bring myself to actually read it). Anyway, definitely not worth the read.",
      ghLink:"https://www.goodreads.com/book/show/63095160-the-temporary-wife?from_search=true&from_srp=true&qid=X49nRmaCae&rank=1",
      genre:'Romance',
      subtrope:'Fake Relationship'
    },

    {
      imgPath:yours_truly,
      isBlog:false,
      title:"Yours Truly",
      author:"Abby Jimenez",
      description:"A novel of unexpected connections, hilarious misunderstandings, and the possibility of love, where Dr. Briana Ortiz's life takes a surprising turn when she receives a letter from the initially infuriating but ultimately endearing Dr. Jacob Maddox.",
      rating:"⭐⭐⭐⭐",
      dateFinished:"09/25/2023",
      review:"I absolutely love this book. The effort it took to get this book was definitely worth it. Practically binge read it and stay up until 2:30, completely losing all track of time. Rating is a 4.5 rounded down to a 4. This is one of the few books that I've read where the author made the hero vulnerable, realistic, and an over-thinker and I'm in love with him. Showing and very realistic emotions, and also having a characte have anxiety and how he dealt with it made it all more realistic. The writing was so well done because at some points in the book, I felt like was third wheeling wanted to put the book down and I'm not interfering with their relationship. They're a dream pair and I love how their interst for each other was so organically made. Reason it wasn't a 5 because parts of the book just dragged out a bit making quite a bit repetive with their thoughts and feelings towards each other and the assumptions they made about each other. Made me want to scream at them and notice each other and communicate. Also, I would have loved some more interaction with the side characters as they were very built out as well. Other than that, I was completely hooked. I loved seeing how Brianna was caring for Jacob most of the time (which I absolutel adored) and help ease his anxiety. I would love to see a sequal to this because and what their life is.",
      ghLink:"https://www.goodreads.com/book/show/63095160-the-temporary-wife?from_search=true&from_srp=true&qid=X49nRmaCae&rank=1",
      genre:'Romance',
      subtrope:'Fake Relationship'
    },

    {
      imgPath:with_you_forever,
      isBlog:false,
      title:"With You Forever",
      author:"Chloe Liese",
      description:"A sunshine-filled woman and a grumpy artist enter a marriage of convenience that turns into a love match, amidst family antics and personal challenges.",
      rating:"⭐⭐⭐⭐",
      dateFinished:"10/11/2023",
      review:"It's been a while since I've last written a book review, so this is being written nearly a month after I've read the book - just a note. The word that comes into mind when I think of this book is cute. I was a very contemporary romance novel in the sense where everything was nice and smooth going and no stressful part. I really liked how Liese created characters that you can see being very real, with real health problems. The book was not all that exciting as it really focused on using time to develop the relationship between the characters, but it was good. The guy character was nice and personable in his own way and the girl was the same (like the way the girl was written out more). I did find that parts of the novel were fairly repetitve but it wasn't too bad. This is the second book I've read in this series, though I read the first one quite a while ago, it was good from what I remember. Overall, would recommend reading this book when want and easy book to go through and take you mind off of stuff.",
      ghLink:"https://www.goodreads.com/book/show/57558144-with-you-forever",
      genre:'Romance',
      subtrope:'Fake Relationship'
    },

    {
      imgPath:one_only,
      isBlog:false,
      title:"One and Only",
      author:"Karla Sorensen",
      description:"In One and Only, the protagonist enters a fake marriage with Beckett Coleman for practical reasons but finds herself falling for him despite their differences. As their feelings deepen, they struggle to maintain the facade and face the risk of jeopardizing everything they've built.",
      rating:"⭐⭐",
      dateFinished:"02/22/2024",
      review:"Not sure when to say much other than I just didn't like this book. It's an arranged marriage type of book, but they literally acted like it was a real marriage from the beginning. They were both attractced to each other before they started to marry one another, so the intentions of getting together was fully believable to me. Also, they kept talking about the girl's mother leaving to another country...but that never happens in this book which makes me question how long the time period they were fake together was ... and it's also weird if it was rushed. The best character of the book was the child. Long story short, don't recommend this book.",
      ghLink:"https://www.goodreads.com/book/show/123024203-one-and-only",
      genre:'Romance',
      subtrope:'Fake Relationship'    
    },

    {
      imgPath:twisted_hate,
      isBlog:false,
      title:"Twisted Hate",
      author:"Ana Huang",          
      description:"Josh can't stand Jules, but their fiery animosity turns into a passionate 'enemies with benefits relationship', challenging their rule to never fall in love, and revealing hidden truths from their pasts.",
      rating:"⭐⭐⭐⭐",
      dateFinished:"12/11/2022",
      review:"This book was a good meh. I really liked the characters and the very obvious character development and relationships between the main character. However, my biggest complaint is that there was so much reptition and the book could have been a good bit shorter if we weren't constantly remided about how the characters hated each other. I would have also liked to see more of the dynamic they had while they were working together as the would have showed a lot of their character development on a different level. Finally, I did think the plot was pretty good and lke how the author brought is diversity. Yet, I did find that as the book went on, so did the ridiculousness of the book went on as the plot started to become a bit unrealistic. ",
      ghLink:"https://www.goodreads.com/book/show/56688531-twisted-hate?ref=nav_sb_ss_1_12",
      genre:'Romance',
      subtrope:'Enemies to Lovers'  
    },

    {
      imgPath:love_theoretically,
      isBlog:false,
      title:"Love, Theoretically",
      author:"Ali Hazelwood",       
      description:"Elsie Hannaway, a theoretical physicist leading a double life as a fake girlfriend, faces her greatest challenge when she encounters Jack Smith, the experimental physicist who ruined her mentor's career, leading to a scholarly sabotage turned unexpected romance that tests her theories on love.",
      rating:"⭐⭐⭐⭐⭐",
      dateFinished:"08/26/2023",
      review:"I really really enjoyed this book. Felt like the first book that I'e read in a long time that was well written, enjoyable, and had a HEA. I love how the author focuses on making the female characters in these books focused on excelling in the STEM fields and how the guys are fairly realistic and someone to definitely fall for. I enjoyed this book more than Love Hypothesis becase I though that the main female character had such a strong personality and character, and the guy was just generally admirable. Their bantering and slower burn relationship was nice to witness because they deffinelty went from enimies, to friends, then to lovers, something that is extremely realistic and progression was good.  Also, I greatly appreaciated the writing style overall and how there was little to no repetition throughout the book and the plot was constantly progressing...something that I've noticed main book are lacking.",
      ghLink:"https://github.com/soumyajit4419/Face_And_Emotion_Detection",
      genre:'Romance',
      subtrope:'Enemies to Lovers'  
    },

    {
      imgPath:twisted,
      isBlog:false,
      title:"Twisted",
      author:"Emily McIntire",
      description:"Yasmin Karam, a privileged heiress, faces an impossible choice between her father's last wish for her to marry a man of his choosing and her love for a servant, while Julian Faraci, determined to become the most powerful man, will stop at nothing to achieve his goals, even if it means forcing Yasmin into marriage.",
      rating:"⭐⭐",
      dateFinished:"08/30/2023",
      review:"This book was extremely meh (technically DNF). The only way that I was able to get through it, quite honestly, was by skipping 1/2 of it. I read the first 4th of the book and it was just extremely dull... the writing was good but my problems with the lack of progression in the plot. They made Julian have a senstive side, which I liked and admired, but there was still something off with the main character. It made it extremely hard to like the main guy character when his focus was on killing and riches. Yasmine was alright, she didn't bug me until the end of the book...just doesn't make sense to me why an author would purposefully have the main female character start downgrading and undermining herself by using derogatory words....not a fan of all. Also, (SPOILER), at the end when she so easily killed her childhood love made no sense to me...she could have simply shot him so that he was hurt but not killed, it really just made it seem like she didn't care at all. Overall, extremely slow moving book, even for a slow burn, the character development was their but the characters were just a weird bit of unlikeable.",
      ghLink:"https://www.goodreads.com/book/show/61434791-twisted?from_search=true&from_srp=true&qid=f0uiCgRjWF&rank=9",
      genre:'Romance',
      subtrope:'Enemies to Lovers'
    },

    {
      imgPath:juniper_hill,
      isBlog:false,
      title:"Juniper Hill",
      author:"Devny Perryy",             
      description:"In Quincy, Montana, Memphis Ward arrives with her newborn on a chaotic day, seeking a fresh start far from her glamorous past. She takes a job as a housekeeper at The Eloise Inn and meets the handsome, rugged chef and landlord, Knox Eden, sparking a connection that feels like a dream she's not sure she can chase after giving up on her dreams.",
      rating:"⭐⭐⭐⭐",
      dateFinished:"01/07/2023",
      review:"Ahh this book was definiltey a good choice to read before going back to school after break. I love the romance in the novel, but I love the timeline of the book more. It seems weird that in a lot of romance books/movies that the characters are falling head over heels with each other after a month or so of knowing each other but this book add a very realistic timeline, which allowed for better character developemt and relationship development between the main characters. I also enjoyed how the author included a single mother and the raw emotion of a mother, making her the main character. The book allows you to definitely develop a strong understanding of each character but also allows for the understanding of their relationship. The climax of the book would be the only thing I would really change because the child getting kidnapped but his father's mistress is a bit too much...would have made more sense if the father's wife or simply Jenny kidnapped him just cause the other lady came out of the blue. Anyways would definelty recommend as nice, family oriented book and I will defenitley be reading more books from the series.",
      ghLink:"https://www.goodreads.com/book/show/59114267-juniper-hill?from_search=true&from_srp=true&qid=MZ5qYCQwST&rank=1",
      genre:'Romance',
      subtrope:'Small Town Romance'
    },

    {
      imgPath:flawless,
      isBlog:false,
      title:"Flawless",
      author:"Elsie Silver",
      description:"Troubled bull rider is attracted to is his agent's daughter, who was send to babysit him so that he doesn't cause any more ridiculuous scandals...and then they start to be attracted to each other.",
      rating:"⭐⭐",
      dateFinished:"09/20/2023",
      review:"DNF - Was so disappointed by this book. I went through hoops to get this book and was definitely not worth it. There was definitley potential and the synoposis was pretty good as well as relative average rating/review of the book, but it just wasn't it for me. I got through 2/3 of the book by shear force and boredom, but there wasn't nothing that really intriguied me. The heroine did not seem to have a strong enough of a back bone and the reason that the hero and heroine liked each other was because they were purley based on physical attraction and not much else. I really tried reading getting through the end but couldn't bring myself to waste more time to read a book that had no substance. I did end up skipping to the end of the book to see what happend and if there were any suprises...but suprise suprise, nothign happened besides that they got together and they couldn't stop being together. Anyway, not worth the read.",
      ghLink:"https://www.goodreads.com/book/show/60755618-flawless?ac=1&from_search=true&qid=vM7Lix2VBS&rank=1",
      genre:'Romance',
      subtrope:'Small Town Romance'
    },

    {
      imgPath:book_lovers,
      isBlog:false,
      title:"Book Lovers",
      author:"Emily Henry",             
      description:"Nora Stephens, a tough literary agent, ends up in a small town with her sister, where she repeatedly encounters Charlie Lastra, a grumpy editor, challenging their self-written stories of not being typical romantic leads.",
      rating:"⭐⭐⭐",
      dateFinished:"11/15/2023",
      review:"This book was a very much alright book. I went in with more expectations and that was definitely my fault. I'm writing this review a few weeks later, so may be a bit vauge but I will say what I can remember. I really liked the guy in this book; he seemed close to perfect. However the relationship between him and the girl lead was far from naturally perfect. The book seemed quite repetitive and the bits about her sister being sneaky and all was quite random and could have been better structured. I'm going to keep this review nice and short. Would only recommend this book if you want a very lowkey book that doesn't have too much progression in the plot.",
      ghLink:"https://www.goodreads.com/book/show/58690308-book-lovers",
      genre:'Romance',
      subtrope:'Small Town Romance'
    },

    {
      imgPath:beach_read,
      isBlog:false,
      title:"Beach Read",
      author:"Emily Henry",             
      description:"Opposites Augustus and January, both struggling with writer's block, strike a deal to switch genres for the summer. As they challenge each other creatively, they also confront their beliefs about love and literature.",
      rating:"⭐⭐⭐⭐",
      dateFinished:"12/27/2023",
      review:"I really enjoyed this book. The dynamic of January and Augustus was very realistic and understandable, making it easy to fall for the romance these characters had. I found that I enjoy Emily Henry's plot as well as her writing, where there is good balance between character and relationship development. It was a definitely a feel good kind of book that allowed me to get lost in their little town for the period of time I was reading it. Would recommend!",
      ghLink:"https://www.goodreads.com/book/show/52867387-beach-read",
      genre:'Romance',
      subtrope:'Small Town Romance'
    },

    {
      imgPath:falling_embers,
      isBlog:false,
      title:"Falling Embers",
      author:"Catherine Cowles",
      description:"From the moment Calder Cruz taught her to fly, the protagonist knew he was her everything, despite being her brother's best friend. But a single night changed everything, leaving them as strangers. Years later, they reunite at the fire station where Calder works as a single father. Despite the passage of time, their love reignites, but shadows from the past threaten to extinguish their flame once more.",
      rating:"⭐⭐⭐",
      dateFinished:"03/01/2024",
      review:"This book was so repetitive that a 3 seems like too kind of a rating. Nevertheless, I did enjoy the general plot of the book and the main character dynamic throughout. It was very much a simple small town vibe where both the main characters are working in rescue work. However, the plot it self did seem choppy or rushed at time, not really building up the love and respect they had towards one another. There's really not much else to say. The plot twist was alright but having multiple climaxes made it seem a bit much...would have just been better off with simply one. Also, the turning point at which the guy started seeing the girl for who she really is was so early in the book and so poorly done that it didn't seem like that big of a moment (though it was included in the synoposis). Wouldn't really recommend if you're looking to deep dive into the novel of the book.",
      ghLink:"https://www.goodreads.com/book/show/59990417-falling-embers",
      genre:'Romance',
      subtrope:'Small Town Romance'
    },

    {
      imgPath:nora_script,
      isBlog:false,
      title:"Nora Goes Off Script",
      author:"Annabel Monaghan",         
      description:"After her husband leaves, Nora Hamilton turns her heartbreak into a successful screenplay. When filming brings former heartthrob Leo Vance to her doorstep, Nora's life takes a surprising turn. As they spend time together, their connection grows, leading to a love story filled with complexities and real-life challenges. Nora Goes Off Script is a heartwarming tale of love in the midst of life's ups and downs.",
      rating:"⭐⭐",
      dateFinished:"04/01/2024",
      review:"I did not enjoy this book. It had really great potential but it was so all over the place and lack of character development that it just seemd like the author was writing for the saking writing but nothing else. It was quite abit repetitive too which Nora complaining about her ex husband and having to live a loveless marriage. Also, the time line made no sense to me...they fall in love within like 2 weeks...which makes no sense. The progression of their relationship is glossed over with very basic stuff and the majority of the book is Nora trying to get over the actor...the climax was alright but also these people are in their 30s/40s...they could have simply communicated better.",
      ghLink:"https://www.goodreads.com/book/show/58988426-nora-goes-off-script",
      genre:'Romance',
      subtrope:'Small Town Romance'
    },

    {
      imgPath:could_be_us,
      isBlog:false,
      title:"This Could Be Us",
      author:"Kennedy Ryan",         
      description:"Soledad Barnes, a meticulous planner and domestic goddess, finds her life unraveling when her perfect world is shattered by betrayal. As she focuses on supporting her daughters and rebuilding their lives, Soledad rediscovers her own strength and resilience. Amidst this transformation, an unexpected and forbidden romance emerges, challenging her to trust again and contemplate the possibility of a new beginning.",
      rating:"⭐⭐⭐⭐",
      dateFinished:"05/29/2024",
      review:"This book took so freakin long to read....I mean weeks. There was nothing in this book that kept me drawn to it and I sorta pushed myself to keep reading it. Despite that, I did give it a 4 star because it was a good book with good characters and good writing. The love story and development that we saw was well done, though extremelely dragged out. Single mom with divorced dad with special needs kids was a really good mix and brought up conversations that you don't typically see in romance books, changing the monotonous and tunneled ways romance books can be sometimes, and I really appreciated that. Overall, would recommend, though probably not at top of TBR list.",
      ghLink:"https://www.goodreads.com/book/show/182762109-this-could-be-us",
      genre:'Romance',
      subtrope:'Small Town Romance'
    },

    {
      imgPath:darling_venmon,
      isBlog:false,
      title:"Darling Venmon",
      author:"Parker S. Huntington",     
      description:"Charlotte's first love ends tragically, and her second love starts with his brother, Kellan, as they meet on a rooftop on Valentine's Day, forming an unlikely bond that weaves through their lives with annual check-ins until a fateful decision changes everything, leading to a venomous and scar-laden love story.",
      rating:"⭐⭐⭐⭐",
      dateFinished:"11/30/2023",
      review:"Definetly one of the better books I've read this school year. This is a book that I won't forget because of the rawness in the book and the great character development. The main hero and heroine in the book had a slow build up to the relationship, but was mostly worth teh wait. Was not a book that I would usually pick up, but once I did, I couldn't put it down. The relationship was built upon raw relationship, brings in sensative topics in a very skillful and then works in the side characters very well.",
      ghLink:"https://www.goodreads.com/book/show/150304767-darling-venom?ref=nav_sb_ss_2_7",
      genre:'Romance',
      subtrope:"Bestfriend's Brother"
    },

    {
      imgPath:terms_conditions,
      isBlog:false,
      title:"Terms and Conditions",
      author:"Lauren Asher",     
      description:"A CEO in line to inherit his family's media empire and his assistant enter a fake marriage arrangement to fulfill a dying wish, but as their public act turns into something real, their carefully crafted rules are challenged, and the lines between their fake and genuine feelings blur in this contemporary romance.",
      rating:"⭐⭐⭐⭐",
      dateFinished:"03/17/2022",
      review:"Very much enjoyed this book. The dynamic and ease between the two main characters was something I would like in my future relationships. The main characters could read each other’s feelings and understood each other very well. Iris, the heroine, was my favorite character. Here witty comebacks and strong personality is something that is very aspirable. She didn’t make herself weak in any situation and held her ground for the most part. Declan, the hero, is my kind of guy, except he’s very stubborn and to himself which was frustrating. There were a good amount of spice scenes in this book as well as a true plot which made it very well balanced and my kind of book. Loved the writing and plot of this novel, however, I gave it a ⅘ because parts of the book and the thoughts that the characters were having seemed extremely repetitive.",
      ghLink:"https://www.goodreads.com/book/show/86767939-terms-and-conditions?ref=nav_sb_ss_1_19",
      genre:'Romance',
      subtrope:"Bestfriend's Brother"
    },

    {
      imgPath:right_move,
      isBlog:false,
      title:"The Right Move",
      author:"Liz Tomforde",           
      description:"The newest Captain of the Chicago Devils NBA team, Ryan Shay, and his roommate Indy Ivers find themselves in a fake relationship to prove Ryan's approachability to the team's General Manager, but as they navigate this charade, lines between real and fake blur, leading to unexpected romantic complications and challenging Ryan's belief in love.",
      rating:"⭐⭐⭐",
      dateFinished:"05/23/2023",
      review:"When I saw the number pages of this book, I was like 'wowza, that's too many pages'. I did not stand corrected. This book had too many pages, but honestly it was alright. There was quite a bit of repetiion in the book, along the lines of Ryan can't trusing anyone because of his past and Indy wnted to start a family and wanting to help everyone round them. The plot and character devleopment of this book was pretty good, but my gosh it was lonh. This book could have been definitley cut down in half the number of pages and would have been just as fine. Ryan is this introverted NBA start and Indy is this outgoing person who just lights up everything around her (typical, I know). Their dynamic and slower build up towards the beginning of the book was good, but then it just started to get really drawn out. Also, the side characters in this book are quite good.",
      ghLink:"https://www.goodreads.com/book/show/84943172-the-right-move?from_search=true&from_srp=true&qid=ednLlUMDfM&rank=1",
      genre:'Romance',
      subtrope:"Bestfriend's Brother"
    },

    {
      imgPath:happy_place,
      isBlog:false,
      title:"Happy Place",
      author:"Emily Henry",             
      description:"Harriet and Wyn, a couple who broke up but haven't told their friends, navigate a weeklong vacation together with their close-knit group, concealing their lingering feelings and putting on a facade to protect their friends' hearts as the beloved Maine cottage they visit every year goes up for sale.",
      rating:"⭐⭐⭐⭐",
      dateFinished:"09/08/2023",
      review:"3.5 stars rounding up to 4. It's crazy to me that I've read well over 200 young adult/romance books over the past few years, but this is my first romance book that was second chance lovers. I was always stayed away from this trope just cause I didn't find the appeal...wouldn't be witnessing romane between the main characters happen geniunely, but rather see a relationship that can try to be rekindled...not sure if there will actually be an HEA. But, I have to say, that this book did a good job about changing my perspective on this trope. I enjoyed reading this book and geniuenly seeing the love between Harriet and Wyn (though the names are a bit weird in my opinion). The plot was good and the side characters were good, but I felt like there should have been more...something was lacking...possibly the lack of closeness between the main friends in throughout the novel. There was some repetition in throughout the plot, and it alternated between past and present. I did appreciate how the present poritions of the book were genuinely longer (made the alternative changing times good). There was a lot to unpack at the end of the book but I think the relationship growth the was good, sometimes a bit random. This was my first Emily Henry book and it was very likely that would read another book by them.",
      ghLink:"https://www.goodreads.com/book/show/61718053-happy-place?ref=nav_sb_ss_1_11",
      genre:'Romance',
      subtrope:"Second Chance Love"
    },

    {
      imgPath:final_offer,
      isBlog:false,
      title:"Final Offer",
      author:"Lauren Asher",
      description:"The bad boy with a troubled past and a secret love for his childhood friend Lana Castillo, who unexpectedly returns to her life when he tries to sell their shared family lake house.",
      rating:"⭐⭐⭐",
      dateFinished:"09/13/2023",
      review:"The bad boy with a troubled past and a secret love for his childhood friend Lana Castillo, who unexpectedly returns to her life when he tries to sell their shared family lake house.",
      ghLink:"https://www.goodreads.com/book/show/61681786-final-offer?ref=nav_sb_ss_1_11",
      genre:'Romance',
      subtrope:"Second Chance Love"
    },

    {
      imgPath:before_we_strangers,
      isBlog:false,
      title:"Before We Were Strangers",
      author:"Renee Carlino",  
      description:"This novel reminisces about a past connection formed in college, now rekindled by a chance encounter. Despite years apart, the narrator feels drawn to reconnect and invites their former friend for a drink to catch up on lost time.",
      rating:"⭐⭐⭐⭐",
      dateFinished:"01/17/2024",
      review:"I'm writing this review 2 months after I finished this book, so my memory on it is fairly fuzzy. Though, I can confidently say I wish there was more. I loved the writing of thes book and how smooth everything flowed together, and there wasn't much repeetition, however, I just feel like the author could have provided more information and detail on their life in between when they weren't together. I loved the main characters, and especially loved Grace and her confident personality. The guy was alright too, geeky and written like typically college portrayed student. The dynamic that they had together is soemthing that I envy and want to live. When they reconnect, it was cute and comforting. However, everytime I got to a major turning point, I found myself just wanting more context and information about the gaps that we didnt' know about...whether that was the intention of the author, I will never know but just had to put it out there. Overall, the hype I think it got on TikTok was well placed, though maybe a bit overhypes  - still recommend though.",
      ghLink:"https://www.goodreads.com/book/show/23309634-before-we-were-strangers",
      genre:'Romance',
      subtrope:"Second Chance Love"
    },

    {
      imgPath:before_let_go,
      isBlog:false,
      title:"Before I Let Go",
      author:"Kennedy Ryan",          
      description:"Yasmen and Josiah Wade's once unbreakable love couldn't withstand life's challenges, leading to the end of their marriage. Despite finding joy separately, their undeniable connection pulls them back together, reigniting a forbidden affair. As they grapple with old wounds and newfound passion, they must decide if they can create a better future together or if it's time to let go for good.",
      rating:"⭐⭐⭐⭐",
      dateFinished:"03/20/2024",
      review:"I really enjoyed this book. It was sweet and cute and wholesome in all the right ways. The author discussed alot of important topics in a very gentle manner and made the whole plot go smoothly. There was some reptition throughout but it was not horrible. I do wish there were more scenes where the main characters talked about their feelings together as well as the past, or if there was a really good plot twist because at times, it just felt hard to connect with the characters. I must say, the author did a good job about making the story very realistic, showing all the goods and bads of a marriage and also balancing a family within all that. Overall, would recommend.",
      ghLink:"https://www.goodreads.com/book/show/60568471-before-i-let-go",
      genre:'Romance',
      subtrope:"Second Chance Love"
    },

    {
      imgPath:seven_husbands,
      isBlog:false,
      title:"The Seven Husbands of Evelyn Hugo",
      author:"Taylor Jenkins Reid",
      description:"Aging Hollywood icon Evelyn Hugo chooses magazine reporter Monique Grant to tell her scandalous life story. As Monique listens to Evelyn's tale of ambition, friendship, and forbidden love, she discovers their lives are more connected than she ever imagined.",
      rating:"⭐⭐⭐⭐",
      dateFinished:"03/27/2024",
      review:"Ah this book has been on my TBR list for quite some time and I finally got to it! Both the writing and the plot where done so well that it was extremely easy to get lost in Evelyn's world and feeling. The plot it self also should the struggles of love over many years , but done in a very smooth way where it didn't seem stretched out and you kept itching for more. The only thing is that I wish the plot twist was bigger in a sense...by the time I got to it, I had already anticipated it. This may have been because of the fact that there was a bit too much foreshadowing that took place. Definitely recommend!! SPOILER: I am glad though that Evelyn and Celia did get a bit of a happy ending, or as much as they could have with the life that they've been through together.",
      ghLink:"https://www.goodreads.com/book/show/32620332-the-seven-husbands-of-evelyn-hugo",
      genre:'Romance',
      subtrope:"Second Chance Love"
    }, 

    {
      imgPath:ruthless_people,
      isBlog:false, 
      title:"Ruthless People",
      author:"J.J. McAvoy",       
      description:"Melody and Liam, two fierce crime bosses with a complex and arranged marriage, must work together to navigate the evolving mafia world while maintaining their façade of power, family, and respect.",
      rating:"⭐",
      dateFinished:"01/24/2023",
      review:"DNF - once again another 1 star book that I couldn't bring myself to finish. I did not like this book at all and really didn't like the characters. This arange marriage book was just too much of the characters trying to over power one another...and was just so not realistic. The main guy fell in love with the girl within 4 days of knowing each other..umm what...and the girl just made me mad. They both had a really really large fascination with killing and murdering which makes me concerned for the author themselves. I went into this book thinking that it's going to be a good read...literally took me 3 hours to find a book and decided on this on...was very a much a bad move. I was catfished once again by TikTok videos and then thought it would actually live up to the expectations this time because of good ratings on Goodreas, naive thoughts, I know. The plot was semi-interesting, but I had an incredibly hard to actually connecting with the characters, especially with the fact that they just kept on killing for the sake of it...no thank you. Anyway I tried really hard on this one, but couldn't finish and don't plan on it.",
      ghLink:"https://www.goodreads.com/book/show/59114267-juniper-hill?from_search=true&from_srp=true&qid=MZ5qYCQwST&rank=1",
      genre:'Romance',
      subtrope:"Mafia"
    },

    {
      imgPath:sparrow,
      isBlog:false,
      title:"Sparrow",
      author:"L.J. Shen",
      description:"This book follows the story of Sparrow Raynes, whose life takes a dramatic turn when she becomes the wife of Troy Brennan, a notorious figure in Boston known as 'The Fixer'. Trapped in a world of control and violence, Sparrow struggles to pursue her dreams while navigating the dangerous dynamics of her marriage. This gripping novel explores themes of power, identity, and survival in an urban setting fraught with danger.",
      rating:"⭐⭐⭐⭐⭐",
      dateFinished:"02/19/2024",
      review:"Hehehhe this is my guilty pleasure book. The content of the book is really not all that great, but just love the mindlessness of reading it and the character development between the girl and the guy. I genuinely have to want to read this kind of book to give is such a high rating...had I been in any other mood to read a different genre, this book definitely would have not gotten such a high rating. This is my second time reading this novel...we shall see how may times I will come back and read this book. One thing I did notice coming back and reading this book is that there isn't really smooth flowing character development and also there a flaws in the writing where different details are mentioned within the same scene, contradicting each other. Overall, would recommend if you don't mind medicore writing and a good mindless read.",
      ghLink:"https://www.goodreads.com/book/show/27263454-sparrow",
      genre:'Romance',
      subtrope:"Mafia"
    },

    {
      imgPath:luna_lie,
      isBlog:false,
      title:"Luna and the Lie",
      author:"Marianna Zapata",            
      description:"Luna Allen has a closet full of secrets she's determined to keep hidden, even if they involve her less-than-friendly boss, as she believes that despite life's imperfections, everything has worked out just the way it was meant to be.",
      rating:"⭐⭐⭐⭐⭐",
      dateFinished:"01/31/2023",
      review:"This was my second reading this book and I was not dissapointed...not shocking thoughh because I am very much obssesed with Marianna Zapata and her books. Re-reading this again, I would give it a 4 stars just cause I think it dragged out way too long and then I almost and to force myself to continue at some points just because the slow burn was too much of a slow burn. Regardless of this, I enjoyed rereading this book, something I don't usually do, but desperate times call for desperate measures (my streak of find good books has been an all time low). I loved the characters in this book, Rip and Luna and really enjoyed their dynamic and how a lot of the book actually focused on the growth of their relationship together. Also the side characters of this book were pretty good. It's one of those kind of books that you can easily visualize in your head while reading which is the best part of reading. I do wish that some of the plot was dedicated towards the development of the relationship between Luna and her sisters but that's okay. Favorite part of the book is when Luna was able to help Rip get out of the aftershock after the car accident. Another favorite moment was when Rip helped Luna and stayed at her house when her cousin broke into her house and wrecked it. Definitley recommend as a first time read.",
      ghLink:"https://www.goodreads.com/book/show/42883009-luna-and-the-lie?ref=nav_sb_ss_1_16",
      genre:'Romance',
      subtrope:"Slow Burn"
    }, 

    {
      imgPath:by_a_thread,
      isBlog:false,
      title:"By a Thread",
      author:"Lucy Score",
      description:"Dominic can't decide if he wants to intimidate or kiss Ally, the woman he got fired and who now works in his office, but as their personalities clash, sparks fly in this steamy workplace romantic comedy where Dominic aims to solve the puzzle of Ally's secret while resisting the temptation to take advantage of his position.",
      rating:"⭐",
      dateFinished:"08/20/2023",
      review:"I'm writing this review a week later, and quite honestly, I've forgetten most of the plot of the book. There was nothing significant that stuck with me and just in general this book was meh. They were more physically attracted to each other rather than actual character personality substance which is definitely a red flag for me in a book. Dominic got Ally fired then hired her, developed a crush on her, and we all know what happens from there. It was just very much a cliche of a book. I love books that make me stare at a wall after I've finished the last page and just contemplate everything and read, and this book was definitely so far from allowing me to reach that stage. The plot was slow moving and there was a quite a bit of repetition throughout the plot, which I am not a fan of at all.",
      ghLink:"https://www.goodreads.com/book/show/48677178-by-a-thread?from_search=true&from_srp=true&qid=SR1BxbTrRZ&rank=1", 
      genre:'Romance',
      subtrope:"Workplace"
    },

    {
      imgPath:true_love_experiment,
      isBlog:false,
      title:"True Love Experiment",
      author:"Christina Lauren",         
      description:"A romance writer who's never been in love and a documentary filmmaker desperate to save his job team up for a reality TV love story, battling their own rising chemistry and the challenges of crafting a genuine on-screen romance.",
      rating:"⭐⭐⭐⭐",
      dateFinished:"11/05/2023",
      review:"I very much enjoyed this book, especially how it referenced San Diego and UCSD quite a bit (and I knew exactly what locations were being talked about!). I loved the guy character - very personable and his dynamic with the main girl character was very good as well as his daughter. I think the start of the book was a bit rough, especially when the two main characters met, and then the transition from the girl not liking him to being best friends with him was too quick/not clear. But the was the only start of the book. The rest of the book was very much smooth sailing. It was so refreshing reading about characters that actually communicate with each other so everything is nice and transparent. I also enjoyed the plot of the book and the whole premisis of the book and how everything came together perfectly at the end with the game show. Definitley recommend this book. Fun fact I learnd while searching up this book - there are two authors who write the book together and have combined their names to have that as their pen name.",
      ghLink:"https://www.goodreads.com/book/show/62361081-the-true-love-experiment",
      genre:'Romance',
      subtrope:"Workplace"
    },

    {
      imgPath:getting_real,
      isBlog:false,
      title:"Getting Real",
      author:"Emma Chase",           
      description:"In Emma Chase's new romance, successful doctor and single father Connor Daniels re-enters the dating scene and finds unexpected love with ER nurse Violet Robinson, who has secretly admired him for years. Their relationship blossoms amidst humorous and emotional challenges, revealing the beauty and unpredictability of life and love.",
      rating:"⭐⭐⭐",
      dateFinished:"4/05/2024",
      review:"It's exactly 3 months later when I'm writing this review and I quite honestly have no recollection of this book. I had to go back and read through goodread reviews to figure out what the plot that I read and forgot so quickly. But immediately I know that forgetting everything about this book is a sign that it just wasn't good enough to remember...and that's a pretty low bar. Now having a refresher, I can confidently say I still don't remember much. What I do remember is that I liked the hero and that he was a good single dad. That's it. With this short review, I guess it's a sign that that you probably shouldn't have this book first on your TBR list.",
      ghLink:"https://www.goodreads.com/book/show/53190768-getting-real",
      genre:'Romance',
      subtrope:"Workplace"
    },

    {
      imgPath:motor_man,
      isBlog:false,
      title:"Motorcylce Man",
      author:"Kristen Ashley",             
      description:"Tyra Masters is ready for a drama-free life until she meets the man of her dreams: Kane 'Tack' Allen, a tattooed, muscled biker who gives her the best night of her life. The catch? He's also her new boss, and he has a rule against employing someone he's slept with. When he fires her, Tyra stands her ground and fights for her job, leading Tack to let her stay on one condition: no more sex. But as their attraction intensifies, Tack finds himself breaking his own rule.",
      rating:"⭐",
      dateFinished:"5/31/2024",
      review:"DNF - don't remember this book and quite frankly don't really care to remember.",
      ghLink:"https://www.goodreads.com/book/show/18078681-motorcycle-man",
      genre:'Romance',
      subtrope:"Workplace"
    }, 

    {
      imgPath:rebel_redemption,
      isBlog:false,
      title:"The Rebel's Redemption",
      author:"Lexi Foss",
      description:"In this tale of rebels and regrets, the protagonist faces a moment of relief upon hearing of Jean Perry's passing, hoping to mend a significant mistake from the past. However, a new challenge arises with Jean's sister, Avery, and the story takes a twist when the protagonist must play house, all while resisting old feelings and embracing a seductive game of observation, as not all rebels may find redemption.",
      rating:"⭐⭐⭐",
      dateFinished:"01/02/2023",
      review:"This book was probably the only book that I've ever read with such low review numbers. I found it on tik tok and decided to give a try because of the description was quite intriguing. I really liked the characters and all of them seemedh genuine and especially enjoyed the character development between Jaime (little boy) and his dad (Wyatt). I did, however, think that the book was a bit odd in the sense that no right guy would approach the aunty (Avery) and make sexual references and get in personal space all within the span of a couple of hours of knowing each other. It was just weird, very sudden, and weakened the development of their relationship. As a result, I was at a loss about whether the development of their relationship was sparked by genuine personality interests or sexual interests. Also, I would like to add that the book timeline was very flat, in the sense that the climax was not really a climax and it just seemed like a normal conversation...not quite sure how I feel about that. I would say this book is worth a shot, however, not quite sure if I would go back and read any of the other books in this series...just seems to predictable, rushed sexually, and plot was not developed quite enough.",
      ghLink:"https://www.goodreads.com/book/show/50841664-the-rebel-s-redemption?ref=nav_sb_ss_2_23", 
      genre:'Romance',
      subtrope:"Children in Tow"
    },

    {
      imgPath:too_short,
      isBlog:false,
      title:"Life's Too Short",
      author:"Abby Jimenez",         
      description:"An entertaining and heartwarming romantic comedy unfolds when globetrotter Vanessa Price's life takes an unexpected turn, and she finds herself caring for her niece with the unlikely help of her hot neighbor and his Chihuahua, leading to unexpected feelings and a chance at an uncertain future.",
      rating:"⭐⭐⭐",
      dateFinished:"09/30/2023",
      review:"This book was alright. I expected a bit more after really enjoying the previous book I read by the same author (Your's Truly). The plot was a little slower and it started to get a bit messy at the end. Adrian, the main guy character, was a dream guy that immediately connected with Vanessa's baby, but the fact that he was so ignorant about her life which caused problems later on throughout the book was so a big mistake...considering he is a lawyer and all. Vanessa was a very strong character and I really enjoyed the power that the author gave to this main character. The side characters in the book were alright, but I wish there was more dynamic between them and the main characters. One thing I really enjoy about Jimenez's books is that she builds the relationship between the main characters based off of a strong friendship first that then transforms into a romantic one. However, I think reading two books by her right after each other was a bit too much because there was quite a bit of overlap and at times it seemed almost repetiive. Overall, I would recommend this book as long as you don't go in with high expectations.",
      ghLink:"https://www.goodreads.com/book/show/54377375-life-s-too-short", 
      genre:'Romance',
      subtrope:"Children in Tow"
    },

    {
      imgPath:out_on_limb,
      isBlog:false,
      title:"Out On a Limb",
      author:"Hannah Bonam-Young",
      description:"Win, fiercely independent despite her limb difference, has her life turned upside down by a charming one-night stand with Bo, leading to unexpected challenges they decide to face as friends, not lovers—at least, that's the plan.",
      rating:"⭐⭐⭐⭐⭐",
      dateFinished:"10/19/2023",
      review:"I most definitely enjoyed this book. The writing was spectacular and the characters were so well written. The fact that I remeber quite a bit from this book though its been a few weeks since I've read says a lot. Bo is very much my dream guy. The dynamic betwee him and Win is so organic and very well built up. I very much enjoyed how the book progressed in such an easy going way where nothing seemed too repettive and I witnessed all the small moments and build up it took for them to fal in love udirng the duration of the pregnancy. I also very much enjoyed the dynamic with the side characters and how everything followed so well together. This novel provided all the small pieces you look that show the full story of the characters falling in love, and a highly recommend for anyone to read it. Side note: the author did a very good job about creating realisitc characters who are not perfect (big plus!).",
      ghLink:"https://www.goodreads.com/book/show/124950295-out-on-a-limb",
      genre:'Romance',
      subtrope:"Children in Tow"
    },

    {
      imgPath:tattered,
      isBlog:false,
      title:"Tattered",
      author:"Devney Perry",             
      description:"Thea, who's always felt low on the social ladder, has her world shaken when Logan, a wealthy man from a one-night stand, reappears in her life, and this time she's determined to hold onto him.",
      rating:"⭐⭐⭐⭐",
      dateFinished:"10/31/2023",
      review:"I genineuly enjoyed this book, though I thought parts of the book were slower to get through. It was also quite too repetitive for my full liking. Nevertheless, the dynamic between the girl and the guy and their daughter was very cute and well written. Favorite character was the daughter, who was very well written and actually resembled the age that she is. The dynmic between the main girl and guy seemed very much based on sexual tension rather than true liking of each other at the very start of the book, but that did eventually change after a while. Beyond that, the book was quite a bit repetitive and the cllimax was very much seemed out of the blue...didn't seem like it was well thought out. True rating would be 3.5, rounded up to 4.",
      ghLink:"https://www.goodreads.com/book/show/38456737-tattered",
      genre:'Romance',
      subtrope:"Children in Tow"
    },

    {
      imgPath:your_intolerable,
      isBlog:false,
      title:"P.S. You're Intolerable",
      author:"Julia Wolf",
      description:"A pregnant assistant finds herself begrudgingly reliant on her seemingly robotic boss, Elliot Levy. Unexpectedly, Elliot extends a helping hand when she needs a place to stay after her daughter is born, revealing a more compassionate side. As they grow closer, the assistant wrestles with her feelings for Elliot, who seems determined to keep her and their newfound family together, even if it means resorting to underhanded tactics.",
      rating:"⭐⭐⭐⭐",
      dateFinished:"02/26/2024",
      review:"The book definitley satisfied my need to read a feel good book. Definitely think this book had a really good plot and balance between plot and spice. The book started off really really strong, however it felt like 2/3 of the way through the book, it started to drag out. I loved the guy character - dream guy vibes, and the girl character well balanced him out. I wish there was more interaction between the guy's group of friends and the couple themselves, that would have added additional flow and plot into the book which could have moved it along a bit faster. Definitely enjoyed the writing, although was very repetitive at times. Overall, would recommend this book.",
      ghLink:"https://www.goodreads.com/book/show/193349012-p-s-you-re-intolerable",
      genre:'Romance',
      subtrope:"Children in Tow"
    }, 
    
    {
      imgPath:bright_side,
      isBlog:false,
      title:"Bright Side",
      author:"Kim Holden",             
      description:"Kate Sedgwick's unconventional life takes an unexpected turn when she falls in love with Keller Banks in a small town, but their love story is shadowed by secrets that have the power to both heal and shatter them, ultimately challenging their resilience and belief in love.",
      rating:"⭐⭐⭐⭐⭐",
      dateFinished:"01/02/2023",
      review:"This book very much got me. To be fair, it took me forever to read it because of the little time I had to sit down and continue the book, but when I did read it, it didn't disappoint. Not going to lie, the beginning of the book was a bit slow for me, but once I started, it was hard to stop. I enjoyed the writing of the book and how realisitc the conversations and characters were. Katie and Gus's dynamic was very well written and made me sort of jealous - I want that kind of friendship. Katie was a very loveable character and the author did an extremely good job of making her relatable and realistic. My heart hurt when her secret was spilled and reading about how all the other side characters had to handle the changes in her life. I would have wanted her to have more time to buid her relationship with Keller and his daughter but ugh, I guess that was part of the point...to keep us wanting more and being able to get to it. Overally I would recomment -- definitely a solid 4.5 but I rounded up because of the way I couldn't fall asleep because of everything that happened in the book.",
      ghLink:"https://www.goodreads.com/book/show/22669832-bright-side?ref=nav_sb_ss_5_6",
      genre:'Romance',
      subtrope:"Heart Breaking"
    },

    {
      imgPath:in_five_years,
      isBlog:false,
      title:"In Five Years",
      author:"Rebecca Serle",             
      description:"Manhattan lawyer Dannie Kohan has her life perfectly planned until a strange vision on the night of her engagement propels her five years into the future, where she finds herself in a different life. Confused and dismissing it as a dream, she moves on, but when she meets the same man from her vision years later, her world unravels, leading to a tale of love, friendship, and the unpredictability of destiny. SPOILERS IN REVIEW",
      rating:"⭐⭐⭐⭐⭐",
      dateFinished:"01/15/2023",
      review:"This book was something else. I stayed up until 3:30am to finish. I'm not going to lie it took a bit of effort for me to start the book and force myself to continue reading it, but once the plot starts picking I couldn't stop. The whole time while reading the book, the author set up the plot so that I had one idea about how the ending will turn out and the all of sudden I start to question everything. I started to tear up several times at the end of the book and once I reached the last few pages my hands were shaking. This book shook me so much that as I write this, I feel the raw options I was feeling a week ago when I finished this amazing novel. The plot twist alone deserves the 5 stars. However, with everything else taken into account and if it was an option on Goodreads, I would have given it a 4.5. This is simply because the main character bugged me a bit just cause she seemed too neat (but I definitely think that was the author's intentions). The whole time, I was thinking that she would end up with Greg in a happily ever after manner...that did not happen. I didn't like David so I didn't event consider that there was potential that something might happen to Bella and that's how  the two end up getting together. I went into this book thinking it was a typical romance book with a bit of paranorma when she saw the vision from 5 years in advance, but it was definitely not that. The emotions are hitting right now just thinking about how Bella died at the end, but how she had everything sorted out for the main character (I'm forgettng her name), and I don't think the rush of these emotions will change. Definitely a book I recommend (especially hard cover too -- something I hadn't done in a while).",
      ghLink:"https://www.goodreads.com/book/show/50093704-in-five-years?ref=nav_sb_noss_l_13",
      genre:'Romance',
      subtrope:"Heart Breaking"
    },

    {
      imgPath:corrupted_chaos,
      isBlog:false,
      title:"Corrupted Chaos",
      author:"Shain Rose",        
      description:"Cade Armanelli, an infamous billionaire hacker, and his determined employee find themselves sharing a cabin and a bed during a cybersecurity team retreat. Despite his antisocial and ruthless reputation, she discovers his prowess extends beyond hacking. Yet, she must remain focused on her job, even if it means dividing the bed with a red line to keep their personal lives from interfering with their mission.",
      rating:"⭐⭐",
      dateFinished:"01/16/2023",
      review:"I was cat-fished into reading this book. I was scrolling through tik tok and a booktok clip came up about a specific scene that intrigued me. Looking for the title of said book, I fell across this book and decided to read it. A lot of the synonposis was an overlap. As I was reading this book, I was waiting for the scene that I had seen to come up...by the end of the book during the epilogue I realized my mistake...definitely the wrong book. This book was just extremely meh. They claim to love each other, but this love was built pure on sexual tension and hate. Cade was an extremely alpha male and was just very weird with his sexual actions and Izzy was literally just subjecting herself the whole time. Also, this book was extremely repetitive. Had it not been for my pure boredom and desire to actually find the scene I saw on Tik Tok, this book would have likely been a DNF. The end was predictable and just very much ughhh. I truly don't think that they loved each other, but rather just like how they made each other fell. The writing style was fine, but the plot was just not good. I'll be taking a break from this author for the time-being.",
      ghLink:"https://www.goodreads.com/book/show/61757380-corrupted-chaos?ref=nav_sb_ss_1_14",
      genre:'Romance',
      subtrope:"Dark"
    },

    {
      imgPath:little_burden,
      isBlog:false,
      title:"His Pretty Little Burden",
      author:"Nicci Harris", 
      description:"Not a good book at all. Can't provide description because plot was not clear. No objective.",
      rating:"⭐",
      dateFinished:"01/16/2023",
      review:"DNF - very much one of the worst books that I've ever read. I saw a catfish video of it on Tik Tok and it sounded entertaining...lies. I hated it and couldn't bring myself to read more than half the book. The girl is 18 and the guy is like 40 years old, who is married and has a mistress and is obviously preying on the girl. A very very weird book and greatly repetitive. The main guy got off by command and pretty much grooming the 18 year old, and the 18 year old was just adsfkj;kals. Not only were the characters horrible, but the writing was just so repetitive and so detailed with random stuff that are not important. Did not like it all. Would honeslty give it a 0 starts if I could but a 1 for effort of the author trying...not a good try by still a try. Do not read.",
      ghLink:"https://www.goodreads.com/book/show/60307542-his-pretty-little-burden?ref=nav_sb_ss_1_25", 
      genre:'Romance',
      subtrope:"Dark"
    },

    {
      imgPath:destroyed,
      isBlog:false,
      title:"Destroyed",
      author:"Pepper Winters",           
      description:"Two individuals with complicated lives and their own secrets collide, igniting a passionate and dangerous connection that threatens to unravel everything they've been hiding.",
      rating:"⭐",
      dateFinished:"3/20/2022",
      review:"DNF - This book was very weird. He laid eyes on her, starting talking down to her and being extremely misogynistic and literally just took it in. I barely started reading the book but she talked about being alpha women which I’m all about, but they are subject to the wants of the hero which is extremely weird. Long story short, I started reading the book and didn't like it so I skipped to the end to see what happens and thank God I didn’t read the complete book. I was extremely uncomfortable in one of the last scenes as she became his carrier (which makes no sense whatsoever) and really weird. It was paranormal and made me stressed, which is not a fun feeling especially when I’m taking time to read the book to de-stress myself. So no thank you.",
      ghLink:"https://www.goodreads.com/book/show/60307542-his-pretty-little-burden?ref=nav_sb_ss_1_25",
      genre:'Romance',
      subtrope:"Dark"
    },

    {
      imgPath:lies_mischief,
      isBlog:false,
      title:"In Fury Lies Mischief",
      author:"Amo Jones", 
      description:"A dark and captivating tale unfolds as Killian Cornelii and the protagonist's tumultuous relationship evolves from attraction to something deeper, a love that's both painful and destructive, set against the backdrop of a mesmerizing performance, revealing the complexities of their hearts in this intense story.",
      rating:"⭐⭐",
      dateFinished:"3/19/2022",
      review:"Was not a fan of this book. To be honest, I went in reading this book thinking I would like it because the cover looked nice (ik don’t judge) and the synopsis of the book seemed good and edgy. However, barely a few pages in I was very lost. There were things that were mentioned that I had no idea what was meant by it. Although I didn’t read the first book of the series, this could have been read as a standalone, without a lot of confusion. I genuinely had to push myself to continue reading the book. Why you may ask? The writing itself was good, although the plot was on the other end of the spectrum. The spice and tension between the two main characters were good - that’s as far as it went. Plot was confusing, scenes felt like they were repeated and it seemed like the only reason that the hero was attracted to the heroine in the first place was because of physical appearance and nothing else. Also, any time they had a fight, they would somehow end up doing the dirty, and then afterwards everything would be weird again…not sure how this works. True rating of the book would be a 2.5, but since I enjoyed the author’s writing style, rated it a 3 on good reads.",
      ghLink:"https://www.goodreads.com/book/show/60307542-his-pretty-little-burden?ref=nav_sb_ss_1_25",
      genre:'Romance',
      subtrope:"Dark"
    },

    {
      imgPath:misconduct,
      isBlog:false,
      title:"Misconduct",
      author:"Penelop Douglas",          
      description:"Easton Bradbury, a former tennis player turned teacher, is determined to excel in her new role and forget her past until a parent-teacher meeting with Tyler Marek, a wealthy businessman, introduces an unexpected attraction that challenges her resolve and threatens to reveal secrets best kept hidden.",
      rating:"⭐⭐⭐",
      dateFinished:"12/19/2022",
      review:"Not sure how to feel about this book. The plot was very meh as there wasn't much build up between Tyler and Easton since it was attraction at first sight. It was one of those books where they started to fall in love because of the physically attraction between them rather than fundamnetal values - not a fan. There were a lot of steamy scenes, which honestly took up majority of the book. Without the steamy scenes, the book would maybe 1/3 the length. Quite honestly, I considred multiple times while I was reading the book to just stop and find another more enjoyable novel but I was bored enough that I just continued reading...glad I did only because the ending had a small twist that was surprising but almost expected. I've read multiple Penelop Douglas books because this has to be one of the least favorite ones. Not a book that I find myself drawn too and when I got up and could simply forget about it...that's how you know its definitely less that a 4/5 star book. Anyways...quick summary of the book: young teacher, Easton, meets super rich guy, Tyler at an event. They are attracted to each other but ending up getting disconnected for 6 monthts until they find out that Easton is teaching one of Tyler's son's classes. They had to hide their relationship and do weird stuff in private, but other than that nothing super duper interesting happens. The ending is when Easton's brother, Jack, made her fearful but mimicking a stalker and breaking into her apartment multiple of time...which sucked because I think Jack was one of the better written characters.",
      ghLink:"https://www.goodreads.com/book/show/61757380-corrupted-chaos?ref=nav_sb_ss_1_14",
      genre:'Romance',
      subtrope:"Age Gap"
    }, 

    {
      imgPath:mile_high,
      isBlog:false,
      title:"Mile High",
      author:"Liz Tomforde",            
      description:"In the world of Chicago hockey, Zanders is the player everyone loves to hate, known for his bad boy persona both on and off the ice. When a new flight attendant joins the team, their dynamic takes an unexpected turn, leading to a complex relationship filled with attraction and tension.",
      rating:"⭐⭐",
      dateFinished:"03/16/2024",
      review:"I did not like this book. On a roll at this point with choosing books that are so repetitve it makes me want to stop so early on...nevertheless I powered through and finished the book. Quite honestly I just thinking the character development and their romance together was built on the wrong reason, mainly was just on attraction for a good portion of the start of the book. Also, the constant repetition and lack of actually doing anything made me want to pull my hair out at time. Quite honeslty, I'm shocked that it has as many reviews as it does on Goodreads. I think one of the good things about this book though was including body diversity into the novel through the heroine...that's mostly it. The hero did seem like a really ideal guys, so that was a plus as well. If this is your type of vibe (ie repetition and hockey romance) that I would recommend this book.",
      ghLink:"https://www.goodreads.com/book/show/60909831-mile-high",
      genre:'Romance',
      subtrope:"Sports"
    },

    {
      imgPath:only_for_week,
      isBlog:false,
      title:"Only for the Week",
      author:"Natasha Bishop",          
      description:"At the wedding of Amerie Cross and Arnold Hightower, maid of honor Janelle Cross surprises the guests with her toast. Known as both the bride's sister and the groom's ex-girlfriend, she reveals she's been secretly involved with the best man, Rome Martin. What started as a brief fling in Tulum feels like it could last forever, leaving her to wonder if what happens in Tulum really stays in Tulum.",
      rating:"⭐⭐⭐⭐",
      dateFinished:"03/16/2024",
      review:"I genuinely enjoyed this book. Realistic no, but enjoyable = yes. I am writing this review 3 months later so my memory may not be the clearest, but I just remember reading it and really enjoying the plot, the character, and the writing style. There characters were refreshing and I wasn't very repetitive. There was a perfect mix for how much the plot focused on the main characters vs side characters, a blend that I've found is truly hard to master. Though this review is short because I can't remember anything else important that I must shared, I would recommend this book as any easy, chill read.",
      ghLink:"https://www.goodreads.com/book/show/152387598-only-for-the-week",
      genre:'Romance',
      subtrope:"Misc."
    },

    {
      imgPath:educated,
      isBlog:false,
      title:"Educated",
      author:"Tara Westover",
      description:"Tara Westover's gripping memoir, she recounts her extraordinary journey from a secluded upbringing in the mountains of Idaho, where she had no formal education and relied on herbalism for medical care, to her determination to self-educate, ultimately earning admission to prestigious universities and discovering a world beyond her family's isolation, but at the cost of severed ties and a quest for self-invention.",
      rating:"⭐⭐⭐⭐",
      dateFinished:"05/07/2023",
      review:"To be honest, it feels quite weird to rate a book that as written based someones life. This was my first reading a full memoir novel and it be frank, it took me quite sometime to get through it because I was reading it in very slow chunks and didn't have the usual feeling of needing to read through it. But with that, I really got to absorb the book and what Tara was writing about. The writing was well done. I can't comment on the plot as that is not something that I should judge but, man, if I had a brother like Steve and a father like Tara's dad, I would not have been able to surivie nor grow to the person that Tara did. This a story of self identity and recognition of who and what family is. I've always enjoyed reading about other's lives, which is why it's shocking tha tthis was my first actual memoir, but definitley won't be the last. Tara's story is truly inspriational and as I was reading through it, I felt like a lot of what she was saying can defintely be struggles others relate with for different reasons. Ultimately, her making a decision that was best for her was something that made me happy to read about in the end, especially after reading about all her struggles.",
      ghLink:"https://www.goodreads.com/book/show/35133922-educated?from_search=true&from_srp=true&qid=awWzfBCBz5&rank=1",
      genre:'Memoir'
    },

    {
      imgPath:last_thing,
      isBlog:false,
      title:"The Last Thing He Told Me",
      author:"Laura Dave",
      description:"Tara Westover's gripping memoir, she recounts her extraordinary journey from a secluded upbringing in the mountains of Idaho, where she had no formal education and relied on herbalism for medical care, to her determination to self-educate, ultimately earning admission to prestigious universities and discovering a world beyond her family's isolation, but at the cost of severed ties and a quest for self-invention.",
      rating:"⭐⭐⭐⭐",
      dateFinished:"09/02/2023",
      review:"3.5 stars rounded up to 4. I've had this book sitting in my 'TBR' list for quite sometime and kept seeing it pop up on my seeing it pop up on my Tik Tok field and displayed in bookstores, so I decided to finally give it a try. Very glad I did so. This book had me hooked - phyiscally couldn't put the book down for hours. It started off incredibly strong but towards 2/3 of the way into the book, it just seems to fall off quite a bit. The plot was suddenly rushed, the secrety coming out could have been a lot more intense and I wasn't completely satisfied with the ended (might have been the intention but I would have genuinely liked a bit more). I would have loved to see more of a relationship build between Hannah and Bailey because that also just seemed rushed. Also, I went in expected there to be a bit more action, so wasn't satisfied with the amount that was actually there. The writing was good, although at times it was a bit repetitive, which slowed down the book a bit. Overally, would recommend this book to someone else as it still was down pretty well over all, but would warn them to not go in with very high expectations as I did.",
      ghLink:"https://www.goodreads.com/book/show/54981009-the-last-thing-he-told-me",
      genre:"Mystery"
    },

    {
      imgPath:cuckoo_calling,
      isBlog:false,
      title:"The Cuckoo's Calling",
      author:"Robert Galbraith",
      description:"After suffering the loss of his leg in Afghanistan, Cormoran Strike struggles to make ends meet as a private investigator. When John Bristow seeks his help, claiming his sister, supermodel Lula Landry, didn't commit suicide as the police ruled, Strike is thrust into a world of glamour, wealth, and intrigue. As he delves deeper into the case, Strike encounters a diverse cast of characters, uncovering the truth behind Lula's mysterious death.",
      rating:"⭐⭐",
      dateFinished:"02/11/2024",
      review:"Ack this book took me forever to finish. I initially found this book at our farmer's market was about the purchase the hard copy...thank God I didn't. I still read it though becaue the premise of the book genuinely sounded interesting and someone at the farmers market recommended it. My biggest problem with the book was that it was just genuinely hard to follow along with and that main detective was not interesting at all. The whole book was just chasing one person to another and then when everything came together, it was just weird...like how did the detective even put all the information together. The ending though did shock me, which is why this book is getting 2 fulls starts. I wish there was more character friendship building between the detective and his assistant. Also, another big problem I had this book is that it was just filled with random information was just not important...like all the information about the detective and his ex. Quite honestly, I'm very proud of myself for even making it through the full novel, took a lot of effort. Though I wouldn't recommend this book, I'm interested to see how they're planning to turn this into a movie and how the ratings of that will be.",
      ghLink:"https://www.goodreads.com/book/show/16160797-the-cuckoo-s-calling",
      genre:"Mystery"
    }, 

    {
      imgPath:used_to_be,
      isBlog:false,
      title:"The Way I Used to Be",
      author:"Amber Smith",
      description:"Eden desperately wishes to go back in time to change the course of one fateful day, but instead, she hides her past and pretends not to need anyone or anything. However, as her life unravels, she realizes that the only person who can save her is herself.",
      rating:"⭐⭐⭐⭐",
      dateFinished:"12/25/2022",
      review:"This book was very different from what I usually read. It was an good different, but definetly what was not expected. The main girl was raped by her brother's best friend her freshman year of high school and it wasn't until senior year did anyone find out. Fortunately, I have never been in the position she has, so I can't say what would realistically take place. However, there are parts throughout the book that I was frustrated about, mostly because of the fact that it was repetivie in how she was acting out. I understand that this may be part of the build up the story, however, but it was almost too much. There were really no insight to her thoughts and the progression of the book was slow. Also, the way she used people around her made me wonder if this was in fact a realistic information of what would have happened to someone when they are assualted...just wondering how accurate the information is. Overall, althought the writing was really good and the character sympathy path was very solid, the plot was a bit slow, hence the missing star.",
      ghLink:"https://www.goodreads.com/book/show/54981009-the-last-thing-he-told-me?ref=nav_sb_ss_1_14",
      genre:"Mental Health - Fiction"
    },

    {
      imgPath:eleanor_oliphant,
      isBlog:false,
      title:"Eleanor Olphant is Completely Fine",
      author:"Gail Honeyman",
      description:"Eleanor Oliphant, a socially awkward woman with a solitary life, finds her world transformed through her friendship with Raymond, a clumsy IT guy, leading her to open her heart and embrace change.",
      rating:"⭐⭐⭐",
      dateFinished:"12/06/2023",
      review:"It was my fault. I read the first page of the last chapter before I was even 15 pages into the book and spoiled it for myself. For this reason, my rating may not be a clear indiication as I wasn't shocked by the plot twist. However, with all this being said, I was still slightly disappointed in the book. This was the first paper-back boo I've read in a year so I went in with very high expectations, because to me, by defaulty, paper back books are better. Wrong assumption. I can definitely see the good qualities of the novel, especially the writing, however I just had a hard time getting into it. Eleanor was quite interesting and was nice reading a novel from the point of a view of character who is not completely typical...yet it just seemed like it was so extended. I needed to get through at least 2/3 of the book before I really started to get into the novel, but I was just expecting more. The author hinted so much at Eleanor's past that it wasn't even a surprise when it was actually brought up. Also, the climax of the book was well written except for the inciting incende that caused the climax...her obsession with the guy and the reason doing so was not all that great (though the point of feeling umcomfy and seeing that something was wrong definitely came across). Also, I would have liked more conversation and dynamic between Elanor and RaymondOverall, would only recommend this book only if you have time on you hads so that you can read the book and get to the good parts.",
      ghLink:"https://www.goodreads.com/book/show/31434883-eleanor-oliphant-is-completely-fine",
      genre:"Mental Health - Fiction"
    },

    {
      imgPath:hello_beautiful,
      isBlog:false,
      title:"Hello Beautiful",
      author:"Ann Napolitano",
      description:"Hello Beautiful is a touching narrative of William Waters, scarred by his past, finding solace and love with Julia Padavano and her supportive family. However, when William's past returns, it tests their bonds and loyalty. Ultimately, it's a story of love's power to heal and unite despite challenges.",
      rating:"⭐⭐⭐⭐",
      dateFinished:"01/05/2024",
      review:"Started this book with no expectations and I'm glad. I'm finding it hard to find words to describe the book without giving too away. I'll start by saying the writing was very well done, with all the character's personas being very clear with their actions and words. The book alterated point of views between 4 characters, initally 3, which I found very interesting and started to enjoy. It also spanned a lot of time, showing the growth of the characters as well as their flaws. I didn't like Julia at all at the beginning of the book because of her up tight character but she became alright towards the end, still not my favorite. William was alright also...if there was any character that was lacking a bit in the descriptions and actions, it would have been William's. I absolutely love Sylvie, there's not much more to say there. As for the parents, I didn't like Rose at all and I wish Charlie was present more. The dynamic of the sisters in the book was lovely to witness and see, and I loved how for the most part, it remained consistent across the different years that the book spanned. Now for some spoilers...I absolutely loved William and Sylvie together and the love they had for one anothers...I wish there wer sections of the book that showed more of this and talk more about their relationship dynamic. Would definitely recommend!",
      ghLink:"https://www.goodreads.com/book/show/61771675-hello-beautiful",
      genre:"Mental Health - Fiction"
    }, 

    {
      imgPath:room,
      isBlog:false,
      title:"Room",
      author:"Emma Donoghue",
      description:"Room is narrated by five-year-old Jack, for whom Room is the entire world where he lives with his Ma, safe from Old Nick who visits at night. While Jack sees Room as home, Ma sees it as the prison where she's been held captive for seven years. Driven by fierce maternal love, Ma devises an escape plan that hinges on Jack's bravery. This inventive and poignant novel celebrates resilience and the powerful bond between mother and child, exploring their journey from captivity to freedom.",
      rating:"⭐⭐⭐⭐",
      dateFinished:"04/18/2024",
      review:"Ah. This book had my head hurting for a little bit at the start as I was adjusting to the writing style. The author did a pretty good job of developing this book, though I feel like parts of the overall plot were lacking or just missing. It felt rushed towards the end as they worked towards their escape, but may have simply been the intention to make it seem like the outdoor world moves at a much faster pace. I wish there was a time jump to see how the boy was doing years later after being free for a good amount of time. I watched the movie with one of my friends who also read the book and would definitely just recommend sticking to the novel version. The movie did not develop the mom very well and also cut out different parts that actually progressing the timeline. Also, I can't forget the fact that the cinematics of the movie version were not done well...quite frankly if I hadn't been watching it with my friend, I would have stopped the movie maybe 20 minutes in. Overall, recommend the book since it does provide you a really unique insight to a child's mind as they're growing and living in a hell that that they don't even realize.",
      ghLink:"https://www.goodreads.com/book/show/31685789-room",
      genre:"Mental Health - Fiction"
    },

    {
      imgPath:silent_patient,
      isBlog:false,
      title:"The Silent Patient",
      author:"Alex Michaelides",
      description:"Alicia Berenson, a seemingly perfect artist, becomes notorious when she shoots her husband without explanation, and criminal psychotherapist Theo Faber is determined to break her silence, setting off a suspenseful and consuming quest to uncover the truth behind the shocking act of violence.",
      rating:"⭐⭐⭐⭐",
      dateFinished:"02/12/2023",
      review:"I honestly don't know how to feel about this book. Just finished it a few minutes ago and the word the best describes my feelings would be disturbed. As I was reading the book, I was trying to pinpoint the murderer and try to figure out the conclusion of the bok, but I would have never guessed how it ended. Quite shocked right now but it makes sense. Reflecting back on different parts of the book, I now realized I was confused by some of the odd statements that were made by Theo as I wasn't sure why some of the pieces weren't connecting. Was lowkey creeped out at parts of the book, but it all makes sense now. The author did a spectacular job of leading me on to create possible versions of the ending and then they way the way the connected everything back together at the book was very well done. Realize the time switch at the end was what really allowed for all the pieces to fall into place. Would I recommend this book for anyone to read...no...not because it was bad but more so of how disturbed I'm feeling right now. The plot really does go to show how far people are blinded by their own ego and what they will do to maintain the love they feel in their life...but that fact that he destroyed 3 people's life at the end of the book is unfathonabme. There was something off about Theo from the beginning but didn't realize until how off until I was literally flipping through the last pages of the book.",
      ghLink:"https://www.goodreads.com/book/show/54981009-the-last-thing-he-told-me?ref=nav_sb_ss_1_14",
      genre:"Psychological Thriller"
    }, 

    {
      imgPath:just_summer,
      isBlog:false,
      title:"Just for the Summer",
      author:"Abby Jimenez",
      description:"Justin has a unique curse: every woman he dates finds her soul mate immediately after they break up. When he connects with Emma, a traveling nurse with a similar problem, they hatch a plan to date, break up, and cancel out each other's bad luck. What starts as a summer fling quickly becomes more complicated when they face unexpected challenges, including Emma’s overbearing mother and Justin taking care of his siblings. As they grow closer, they start to wonder if their supposed 'curses' were actually bringing them together all along.",
      rating:"⭐⭐⭐",
      dateFinished:"06/15/2024",
      review:"This was a cute book! I liked the characters and plot development, though it was extremely repetitive and annoying at times. The character development for the heroine was alright, but ugh it was just annoyingly repetitive, like I'm being right now. I had higher expectations for Abby Jimenez as her book 'Yours Truly' was one of my top reads for quite some time, but this book simply not do it. Would recommend only if you have spare time and are able to push yourself to continue with reading through this book.",
      ghLink:"https://www.goodreads.com/book/show/195820807-just-for-the-summer",
      genre: "Romance",
      subtrope: "Small Town Romance"
    }, 

    {
      imgPath:butterfly_project,
      isBlog:false,
      title:"The Butterfly Project",
      author:"Emma Scott",
      description:"In *The Butterfly Project*, Zelda Rossi has spent a decade coping with guilt and grief by pouring her pain into a graphic novel about time-traveling vigilantes who stop tragic crimes. After facing rejection from comic book publishers, Zelda finds herself stranded in New York City, where she meets Beckett Copeland, a former convict battling his own demons after serving time for armed robbery. As they form an unexpected bond, Zelda and Beckett help each other confront their pasts, finding healing, forgiveness, and a chance at love. Together, they must decide whether to cling to their pain or embrace the possibility of a brighter future.",
      rating:"⭐",
      dateFinished:"06/26/2024",
      review:"DNF - Awful writing. I've never stopped reading a book so fast...and I genuinely tried. Probably the worst writing I've read in a really long time. I had previously read another book by Emma Scott that has I actually enjoyed but that was years ago so I decided to give this book a try because of the ratings it had (idk why it even has these ratings). The writing was so repetivitve, describing things that are very straightforward already...I don't even know what else to say besides avoid this book.",
      ghLink:"https://www.goodreads.com/book/show/33519394-the-butterfly-project",
      genre: "Romance", 
      subtrope: "Misc."
    }, 

    {
      imgPath: had_be_you,
      isBlog:false,
      title:"It Had to Be You",
      author:"Susan Elizabeth Phillips",
      description:"In this witty and entertaining story, *It Had to Be You*, Phoebe Somerville, a glamorous and unconventional woman who knows nothing about sports, unexpectedly inherits the Chicago Stars football team. As she tries to navigate the rough-and-tumble world of professional football, she butts heads with the team’s tough, no-nonsense head coach, Dan Calebow, who sees her as an unfit leader. Despite their clashes, sparks fly between Phoebe and Dan as they realize they might have more in common than they think—on and off the field. This is the kickoff to a beloved romance series where love and football collide.",
      rating:"⭐",
      dateFinished:"06/27/2024",
      review:"DNF - I randomly found this book while digging through goodreads. It had plenty of good reviews, which had me shocked when I started reading the book and found that author wrote a scene of an older man (like in his 30s) have a sexual encounter with a 16 year old. Immediatetly once getting to this point, which mind you is less than 20 pages in the story, I put the book down and go back to goodreads to figure out why people liked this book so much and how they got past that scene. I read a few reviews and found out the girl wasn't actually 16 but pretended to be...regardless that is extremely weird and offputting. Genuinely confused how people who gave this book a high rating. Not only was the scene weird, but the writing was so EXTRA. It felt like was I reading really bad poetry, which so much useless descriptions and run on sentences. Don't read this book. ",
      ghLink:"https://www.goodreads.com/book/show/73070.It_Had_to_Be_You",
      genre: "Romance",
      subtrope: "Workplace"
    }, 

    {
      imgPath: caught_up,
      isBlog:false,
      title:"Caught Up",
      author:"Liz Tomforde",
      description:"In this heartwarming romance, Kai Rhodes, a single dad and Chicago’s star pitcher, struggles to juggle his career and fatherhood. After his coach hires Miller Montgomery—his wild, free-spirited daughter—as his son’s nanny, Kai is drawn to her despite their differences. Miller, a celebrated pastry chef on a break, never planned to stay in Chicago, but as sparks fly, she starts to question if her summer fling with Kai could turn into something lasting.",
      rating:"⭐⭐⭐⭐",
      dateFinished:"06/04/2024",
      review:"Liz Tomforde's books are definitely a hit or miss for me. While I didn't enjoy her book Mile High at all, I quite honestly enjoyed reading this book. I thought the characters were refreshing and the dynamic between them was cute. I love how the heroine does have her own very prestine career and taking on a nannying gig was just for the fun of it rather than needing to rely on it for income. I also enjoyed the respect the characters had for one another. I really liked the hero and his protective side and how much character development he had throughout the novel. There isn't too much else to say other than I recommend this book.",
      ghLink:"https://www.goodreads.com/book/show/199335111-caught-up",
      genre: "Romance",
      subtrope: "Children in Tow"
    }, 

    {
      imgPath: looking_alaska,
      isBlog:false,
      title:"Looking for Alaska",
      author:"John Green",
      description:"In *Looking for Alaska*, Miles 'Pudge' Halter leaves behind his dull life in search of 'the Great Perhaps' at Culver Creek Boarding School. There, he meets Alaska Young—a beautiful, enigmatic, and self-destructive force of nature who captivates him completely. Alaska pulls Pudge into her wild world, transforming his once-safe life into a thrilling adventure. But after a tragic event, everything changes, and Pudge is left to grapple with questions of love, loss, and the meaning of life.",
      rating:"⭐⭐⭐⭐",
      dateFinished:"07/21/2024",
      review:"I kid you not, this is a book that has been sitting on my TBR list for a few years now. However, my cousin absolutely loves this book and has the hard copy so she lent it to me. Going into this book, I quite honestly didn't know what to expect. I thought it would be more mystery and less teenage rebel vibe. Though the novel itself is relatively short, I also found the plot to be quite a bit stretched out as it felt like a lot of the details that were included were irrelevant and didn't progress the timeline of the story in any way. Yet, I did enjoy the characters (especially Alaska) and the author did a good job of accurately portraying a high school group of friends and the rebelness of it. I'm glad I did finally read this extremely popular classic and would recommend someone to read, if only just to stay in the loop of the literacy world.\n Side note - this was the review I texted my cousin right after finishing the book: 'ahh just finished looking for alaska\ni have no idea how to feel about— writing was phenomenal and when she died, ugh that hurt, but i feel like there was something missing …but idk maybe that’s the point — sorta wish there was more to the story or more info about alaska cause some parts of the plot towards the beginning didn’t seem to accelerate the narrative\noverall, righting is 3.75 rounded up to 4!'",
      ghLink:"https://www.goodreads.com/book/show/99561.Looking_for_Alaska",
      genre: "Romance",
      subtrope: "Heart Breaking"
    }, 

    {
      imgPath: abed_salama,
      isBlog:false,
      title:"A Day in the Life of Abed Salama: Anayomy of a Jersusalem Tragedy",
      author:"Nathan Thrall",
      description:"*A Day in the Life of Abed Salama*, the Pulitzer Prize-winning book by Nathan Thrall, presents a powerful and immersive account of a tragic accident outside Jerusalem. When five-year-old Milad Salama's school bus crashes, his father, Abed, embarks on a desperate and bureaucratic-filled journey to find his son amidst the chaos. As Abed navigates the obstacles of being Palestinian in a divided region, the narrative weaves together the intersecting stories of Jewish and Palestinian lives, offering a poignant exploration of the Israeli-Palestinian conflict and its human impact.",
      rating:"⭐⭐⭐⭐⭐",
      dateFinished:"08/11/2024",
      review:"I've been raving about this book to everyone that I know. I will not lie, the writing did throw me off at the beginning, but I very quickly got used to it. It took me a couple of weeks to finish this book because simply reading it made me so sad. It made me sad that this book was written years ago yet were are the atrocities that Palestinians are experiencing are unfathomable, yet there are people that are purposefully going on their with their lives refusing to acknlowedge facts and history. This book was written by an American author and I very much enjoyed it simply because he layed down all the facts. It switches between the present and past to include a lot of history, policies, information about how colonialism has essentially lead to the awful tragedy that killed youngs kids and their teacher. It would be very easy for someone to pick up this book, having no knowledge the history of Palestine at all yet be able to side with those who have suffered due to colonialism. This was one of my first non fiction books that I've read and  I will not lie, it was a bit hard to keep track of all the history that was mentioned - yet that just goes to show that there is so much history that has occurred and it is necessary to read many sourcs to understand it. As I said in the beginning and I'll say again now, highly recommend that you read this non fiction novel to truly grasp what the lives of those who are suffering have been experiencing for years.",
      ghLink:"https://www.goodreads.com/book/show/77920745-a-day-in-the-life-of-abed-salama",
      genre: "Nonfiction",
    }, 

    {
      imgPath: make_you_mine,
      isBlog:false,
      title:"Make You Mine",
      author:"Laura Pavlov",
      description:"In this sizzling romance, Make You Mine, Jace King, a rugged firefighter and single dad, is both a family friend and the boss of his new nanny. Despite the intense attraction between them, Jace insists that acting on their feelings is off-limits—especially given their age difference and his connection to her family. But as their chemistry becomes undeniable, the rules start to blur, and the heat between them threatens to ignite something far beyond their control. Will they stick to the rules or let their forbidden desire break free?",
      rating:"⭐⭐⭐",
      dateFinished:"08/15/2024",
      review:"Hmmm there is not much to say about this book. I am writing the book nearly a month later and very little stands out about this book that I must remember. It was an age gap, children in tow trope and it met the expectations of these tropes to a satisfactory level, though nothing to rave about. With that being said, I just remember it being a long book and the dynamic of the characters were cute. That's it - to be honest, I don't think I would recommend this book.",
      ghLink:"https://www.goodreads.com/book/show/61329225-make-you-mine",
      genre: "Romance",
      subtrope: "Children in Tow"
    }, 

    {
      imgPath: tragic,
      isBlog:false,
      title:"Tragic",
      author:"Devney Perry",
      description:"In Tragic, Kaine Reynolds has retreated into isolation after a family tragedy, determined to face his grief alone. But when Piper Campbell, his determined new neighbor, arrives in Montana seeking a fresh start after a painful divorce, she’s not deterred by his gruff exterior. Intent on a no-strings fling to heal from her past, Piper sees Kaine as the perfect distraction. However, their unexpected affair leads to an unforeseen twist that threatens both their hearts and forces them to confront their deepest fears.",
      rating:"⭐⭐⭐⭐⭐",
      dateFinished:"08/17/2024",
      review:"Ugh this book made me so happy. I was in the mood to read a book with a sad character, happy ending and this once was absolutely perfect. I loved how the dynamic between the characters started immediately and developed consistently as the book progressed. The hero's love language is acts of service and I absolutely love that, considering he was still able to show his emotions despite being alone for a few years. I also very much enjoyed the start of the book and how it didn't take a significantly long time to figure out what was happening. And even knowing what led the hero to be at his state when then main characters met, there were little bits of information provided after the big reveal. I really enjoyed the heroine's personality throughout the book and that she was definitely a boss women. Though the way they come together was due to each of their unfortunate circumstances, I definitely enjoyed the growth of their relationship and how the flaws of it were also included too. I loved the book and it's definitely one of my top 5 favorite books of the year. Highly highly recommend.",
      ghLink:"https://www.goodreads.com/book/show/38317385-tragic",
      genre:"Romance",
      subtrope:"Heart Breaking"
    }, 

    {
      imgPath: paradise_problem,
      isBlog:false,
      title:"The Paradise Problem",
      author:"Christina Lauren",
      description:"In The Paradise Problem by Christina Lauren, buttoned-up heir Liam “West” Weston is poised to inherit a massive fortune from his family's grocery empire—but only if he’s been happily married for five years. His solution? To enlist his free-spirited ex-wife, Anna Green, to help him meet the family’s demands and secure the inheritance. While the fake marriage begins as a strategic move, Liam finds himself grappling with deeper feelings as he witnesses Anna’s genuine heart amidst the cutthroat world of wealth. As the line between pretense and reality blurs, Liam must decide if the cost of his inheritance is worth risking true love.",
      rating:"⭐⭐⭐⭐",
      dateFinished:"08/22/2024",
      review:"This book was pretty good. There honestly isn't too much to say besides it was a fun read and interesting to see how richy rich people are so careless and oblivious about everything that the majority of society face daily. The dynamic between the two main characters was fun and very refreshing to hear. I also really enjoyed how the authors brought in family struggles and internal debates with ones selves, just showing how no family is perfect. There really isn't much else to say. I would recommend this book, especially if you want to feel like your on private island witnessing the life of the filthy rich and seeing how everything is just image.",
      ghLink:"https://www.goodreads.com/book/show/199797582-the-paradise-problem",
      genre:"Romance",
      subtrope:"Fake Relationship"
    }, 

    {
      imgPath: redeemed,
      isBlog:false,
      title:"Redeemed",
      author:"Lauren Asher",
      description:"In *Redeemed*, Santiago Alatorre’s career collapses after a major scandal, forcing him into hiding. His life takes a turn when Chloe Carter, who’s on a quest to find her estranged father in Italy, ends up as his fake girlfriend. What begins as a temporary arrangement to manage Santiago’s problems soon evolves into a complicated and passionate connection. As their pretense grows more convincing, so do their feelings for each other, but Santiago’s own issues threaten to keep them apart. In this steamy standalone from the Dirty Air world, both must navigate their tangled emotions and past mistakes to find a path to true love.",
      rating:"⭐⭐",
      dateFinished:"08/30/2024",
      review:"I went into this book with very expectation and I very disappointed. I was looking for a book that was similar to Archer's Voice, and found this book repeatedly being recommend on Tik Tok, so I was very much drawn to read it. However, the thoughts of the characters were so incredibly repeatitive that I think a third of the book could have been cut out if the repition were to be taken out. The characters were cool and there was definitely a lot of potential for this to be a great novel, but it just simply was not. Quite honestly I read this book a week ago and don't remember much of it because it was just simply that insignificant. Looking back now, I don't think I ever actually finished the full book, I got maybe 3/4 of the way and then just couldn't do it anymore, and this was me trying incredibly hard to keep going. Anyway, long story short, I don't recommend this book at all.",
      ghLink:"https://www.goodreads.com/book/show/206024568-redeemed",
      genre:"Romance",
      subtrope:"Fake Relationship"
    }, 

    {
      imgPath: night_blossoms,
      isBlog:false,
      title:"The Night Blossoms",
      author:"Leylah Attar",
      description:"In Leylah Attar's The Night Blossoms, Vee Roza's life takes a dark turn when her husband, Rafael, goes missing following a heated argument. As Vee grapples with the dangers of a high-risk pregnancy, she is thrust into a perilous web of deceit. With secrets of her own and mounting suspicion, Vee must navigate a treacherous path to uncover the truth about Rafael’s disappearance. Is it the ultimate act of betrayal or a selfless sacrifice? This gripping romantic suspense thriller keeps readers on the edge of their seats until the chilling, unexpected conclusion.",
      rating:"⭐⭐⭐",
      dateFinished:"09/02/2024",
      review:"I was super excited excited when I saw this book as a greatly enjoyed 'Paper Swans' which was written by the same author (though quite honestly, I don't remember that book at all). The first half of the book was alright as it kept me engaged enough to want to continue reading to see how the past and the present versions clash together. However, I was greatly disappointed with the plot twist - there was simply just to much foreshadowing involved that made it less of a suprise and more of an expectation. Once I reached the plot twist, I realized that as I read this book, I was more interested in figuring out the timeline of their relationship and they mystery of it rather than solving the disappearance of the husband. Once the mystery was solved, it just seemed far too dramatic and unrealistic, making it much more enjoyable and even boring. Though moving beyond the plot, I definitely do enjoy the writing style of the author. With all that being said, I wouldn't recommend reading this book unless you have energy to spare as you force yourself through some parts of it.",
      ghLink:"https://www.goodreads.com/book/show/61387800-the-night-blossoms",
      genre:"Mystery"
    },

    {
      imgPath: midnight_library,
      isBlog:false,
      title:"The Midnight Library ",
      author:"Matt Haig",
      description:"In *The Midnight Library* by Matt Haig, Nora Seed finds herself in a magical library between life and death, where each book offers her a chance to explore lives she might have lived had she made different choices. As she revisits her regrets and tests out various paths, Nora discovers that not all her imagined lives are as perfect as she hoped. With the library and her own existence at risk, she must confront the ultimate question: what is the best way to live?",
      rating:"⭐⭐⭐⭐",
      dateFinished:"09/06/2024",
      review:"This book is truly one of those books that make you think about the life you are living. At some point, every one of us has thought of how our life would have been interest had we made this decision and this book truly puts all of those 'what if's' into perspective. Nora isn't a memorable character in any way whatsoever, but she is a relatable one. Her thought process as she continues exploring the different lives that she's had the opportunity to live seems like a natural though process where a lot of self reflection and realization happens, applicabale to anyone. This is the first time had a super strong urge to grab a highlight and simply high light all the qutoes that provide a fresh perspective about the choices we make and how they effect us. Though the ending was not surprising, the full circle moment does all for us to see the full character development at its finest. I would recommend this book for anyone who is interested in just thinking about the effects of their different choices and how their life would look like.",
      ghLink:"https://www.goodreads.com/book/show/52578297-the-midnight-library",
      genre:"Magical Realism"
    }, 

    {
      imgPath: silent_waters,
      isBlog:false,
      title:"The Silent Waters",
      author:"Brittainy Cherry",
      description:"The Silent Waters is a poignant story about the powerful impact of moments in our lives. As the narrator reflects on a life marked by both heartache and hope, we see how Brooks Griffin was a beacon during her darkest times. Their relationship, filled with both love and pain, becomes a journey through life's most significant moments—those that define us, challenge us, and ultimately shape our destiny. This narrative explores themes of self-love, loss, and the intricate tapestry of human connection.",
      rating:"⭐⭐⭐",
      dateFinished:"09/09/2024",
      review:"I started reading this book my first year of university and it's only fitting that I completely it to it's entirety right before my last year of undergrad. I have read most of the books in this series (Elements) and remember really enjoying everything about the novels, so when I saw that I hadn't marked this book as read on Goodreads, I immediately started reading it. A few pages into the book, I realized it was the book that I never finished. I was super excited and ready to get through it, but I was unfortuately disappointed. The writing and the plot of the book were great and it wasn't repetitive, but wow was it long. It was unnecessarily long for the content that it held. It felt like there was little to no character development around the middle part of the book and it took time for the development to kick back in. With that being said, I also was ironically bothered by how the ending seemed so rushed. One second Maggie was mute and the next she is delivering these relatively long monologues. For how long she was mute, the reaction of herself speaking as well as Brooks reaction (her boyfriend) was extremely underminded. Also, so much of the book was talking about her trauma and her inner thoughts and how they limited her from going out of her safe zone, however, when she actually did make that effort it seems unrealistically smooth. I wish Cherry included internal dialogue of the battle she still went through or how she adjusted because it just didn't make quite much sense to me. Finally, by the end of the book, the main characters were in their late 20s, yet it still felt like they were acting quite a bit younger - this simply could have addressed by decreasing the time jump. Anyway, long story (not short), I would recommend this book but don't go in with extremely high expectations.",
      ghLink:"https://www.goodreads.com/book/show/29963453-the-silent-waters",
      genre:"Romance",
      subtrope:"Heart Breaking"
    }, 

    {
      imgPath: drago,
      isBlog:false,
      title:"Drago",
      author:"Sarah Brianne",
      description:"In a gritty love story, Drago, the Caruso family's fierce protector, and Katarina, a vulnerable Luciano, become entangled in a perilous marriage fueled by vengeance and blood ties, a union fraught with tension, as they grapple with their roles as a vengeful bodyguard and the devil's daughter.",
      rating:"⭐⭐",
      dateFinished:"12/14/2022",
      review:"Did not like this book at all. There was potential but the author did not meet it. This was the first book I read from the series, sixth book in series, and it was very much meh. There was a lot of repetition about the Kat needing to befriend Drago in order for her family to win, but it made no sense. The progression between the hero and heroines was too fast and one simple action of affection done and suddenly they were in love....what??The one thing I liked about this book was the writing style of the author, which was descriptive and poetic, although a bit much at times. However, her writing style did not provide the ability to follow along with the plot easily and then the book just suddenly ends way too fast...idk if this because there are continuations to the seires or if the author simply got bored of her own writing...like I did. Short, not worth your time kind of book.",
      ghLink:"https://www.goodreads.com/book/show/40622772-drago",
      genre:"Romance",
      subtrope:"Mafia"
    }, 

    {
      imgPath: dark_romeo,
      isBlog:false,
      title:"My Dark Romeo",
      author:"Parker S. Huntington, L.J. Shen",
      description:"A fairy tale takes a dark turn as a reluctant Juliet refuses to marry her vengeful Romeo, setting the stage for a thrilling and unexpected story where Juliet refuses to be a pawn in his game and seeks to rewrite her own destiny.",
      rating:"⭐",
      dateFinished:"07/25/2023",
      review:"DNF - I'm ashamed to say I read as much as I did...half of the book. This was probably one of the worst books I read this year. I started this book with high expectations; I previously enjoyed both Shen and Huntington's Books so I didn't think there would be a reason that a collobaration of their book could be bad...I was incredibly wrong - thie book sucked so much. I kept reading to purely believing that it could get better or something interesting would happen (and because of pure boredom)...once again I was wrong. Absolutely horrible. The main characters were so childish, especially the heroine - literally not knowing how to act or think. The guy, Romeo, is just so annoying. The writing was also absolutely attrocious...was so repetivie, included unecessary information and went absolutely no where. I would give this book to my worst enemy to read...so they too can suffer.",
      ghLink:"https://www.goodreads.com/book/show/123008168-my-dark-romeo",
      genre:"Romance",
      subtrope:"Mafia"
    }
  ];
  
   // Function to handle sorting
   const handleSort = (criteria) => {
    setSortCriteria(criteria); // Update the sort criteria
  };

  // Filter books based on selected genre and subtrope
  const filteredBooks = books.filter((book) => {
    const genreMatch = selectedGenre === '' || book.genre === selectedGenre;
    const subtropeMatch = selectedSubtrope === '' || book.subtrope === selectedSubtrope;
    return genreMatch && subtropeMatch;
  });

  // Function to parse date strings in "month/day/year" format
  const parseDate = (dateStr) => {
    const [month, day, year] = dateStr.split('/').map(Number);
    if (isNaN(month) || isNaN(day) || isNaN(year)) {
      throw new Error(`Invalid date string: ${dateStr}`);
    }
    return new Date(year, month - 1, day); // month is 0-indexed
  };

  // Sort books based on sort criteria
  const sortedBooks = filteredBooks.sort((a, b) => {
    if (sortCriteria === 'date') {
      const dateA = parseDate(a.dateFinished);
      const dateB = parseDate(b.dateFinished);
      return dateA - dateB; // Sort by dateFinished in ascending order
    } else if (sortCriteria === 'rating') {
      return b.rating.length - a.rating.length; // Sort by rating in descending order
    } else {
      return 0; // No sorting applied
    }
  });

  return (
    <Container fluid className="project-section">
      <Container>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
            <Col md={4}>
              <FilterBar
                genres={genres}
                subtropes={subtropes}
                selectedGenre={selectedGenre}
                selectedSubtrope={selectedSubtrope}
                onGenreChange={setSelectedGenre} // Fixing the prop name
                onSubtropeChange={setSelectedSubtrope} // Fixing the prop name
              />
            </Col>
            <Col md={4}>
              <Dropdown onSelect={handleSort}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Sort by
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="date">Date Finished</Dropdown.Item>
                  <Dropdown.Item eventKey="rating">Rating</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
        </Row>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          {sortedBooks.map((book, index) => (
            <Col key={index} md={4} className="project-card">
              <ProjectCards
                imgPath={book.imgPath}
                isBlog={book.isBlog}
                title={book.title}
                description={book.description}
                author={book.author}
                rating={book.rating}
                dateFinished={book.dateFinished}
                review={book.review}
                ghLink={book.ghLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
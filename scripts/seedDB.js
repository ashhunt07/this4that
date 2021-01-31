const mongoose = require("mongoose");
const db = require("../models");

// This file inserts the users below
// Use: npm run seed

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/barteringapp"
);

const userSeed = [
  {
    _id: "564525252",
    firstname: "Neil",
    lastname: "deGrasse Tyson",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    email: "ntyson@haydenplanetarium.edu",
    city: "Austin",
    state: "Texas",
    traveldist: "100",
    phone: "1-212-769-5100",
    paypaluser:"neiltyson",
    skills: ["lawn care","landscaping", "tree trimming"],
    reviews: ["There's nothing here! Leave a review!"],
    photourl: "https://randomuser.me/api/portraits/men/6.jpg",
    bio: "My first job as a kid was pushing a lawnmower! Although my professional focuses have changed, I have always had a passion for landscaping. I have professional equipment and years of experience in yard maintenance, small tree trimming and shaping, and landscape design and maintenance. I'm available Saturday through Monday for your yard needs!",
    date: new Date(Date.now())
  },
  {
    _id: "354198163",
    firstname: "Peggy",
    lastname: "Hill",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    email: "mrspeggyhill@teachersofarlen.com",
    city: "Allen",
    state: "Texas",
    traveldist: "50",
    phone: "1-469-202-5775",
    paypaluser:"peggyhill",
    skills: ["tutoring","spanish tutoring"],
    reviews: ["There's nothing here! Leave a review!"],
    photourl: "https://randomuser.me/api/portraits/women/45.jpg",
    bio:"My name is Peggy and I am one semester away from finishing my Bachelor's of Science in Linguistics. I am fluent in Spanish (native speaker) and English, and have experience with Spanish and Latin American history, literature, linguistics, and writing skills. I can meet with you online or in person to help you improve your Spanish speaking and/or writing skills.",
    date: new Date(Date.now())
  },
  {
    _id: "asdrf54964186541",
    firstname: "Walter",
    lastname: "White",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    email: "heisenberg@bluesky.com",
    city: "San Antonio",
    state: "Texas",
    traveldist: "100",
    phone: "1-505-866-8650",
    paypaluser:"walterwhite",
    skills: ["financial planning","tax preparation", "accounting"],
    reviews: ["There's nothing here! Leave a review!"],
    photourl: "https://randomuser.me/api/portraits/men/13.jpg",
    bio:"Walter here. I was professionally employed for 35 years as an accountant and tax preparation specialist. I miss being able to help people with the financial planning and personal accounting questions, and I'm bored as retiree! I can offer everything from simple household budgeting advice and tax preparation to investment strategies and helping you understand your financial portfolio. Available for online meetings through Skype or Zoom.",
    date: new Date(Date.now())
  },
  {
    _id: "5a5sd4fa5fde889l",
    firstname: "Liz",
    lastname: "Lemon",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    email: "lizlemon@cbs.com",
    city: "Austin",
    state: "Texas",
    traveldist: "10",
    phone: "1-212-424-6677",
    paypaluser:"lizlemon",
    skills: ["reiki","energy healing", "reflexology"],
    reviews: ["There's nothing here! Leave a review!"],
    photourl: "https://randomuser.me/api/portraits/women/10.jpg",
    bio:"I am professionally employed as a school counselor, and have been an energy healer and reiki practitioner for over 10 years. I was recently certified in reflexology by the ARCB and am looking to get more practice under my belt. Reflexology is the application of appropriate pressure to specific points and areas on the feet, hands, or ears.These reflex points correspond to different body organs and systems, and pressing them creates real benefits for your health. I can also provide reiki and other energy healing services in tandem with reflexology. Sessions must be in person, but reiki alone may be done virtually as well.",
    date: new Date(Date.now())
  },
  {
    _id: "4588klfjasd5s5fasd",
    firstname: "Jon",
    lastname: "Snow",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
    email: "jsnow@nightswatch.com",
    city: "New Braunfels",
    state: "Texas",
    traveldist: "50",
    phone: "1-210-667-8907",
    paypaluser:"snowj",
    skills: ["blacksmithing","farrier", "welding"],
    reviews: ["There's nothing here! Leave a review!"],
    photourl: "https://randomuser.me/api/portraits/men/45.jpg",
    bio:"My name's Jon. I was the Forged in Fire Season 5, Episode 12 champion. That's right. I won $10,000 with my amazing blade skills. I'll teach you, but I have to charge. Or trade. That's what this website is, right? Actually, I won't teach you, but I will make things for you. Forging, welding, farrier and blacksmithing services available for trade or pay in New Braunfels and surrounding areas.",
    date: new Date(Date.now())
  },
  {
    _id: "235asd65df456",
    firstname: "Lucille",
    lastname: "Bluth",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    email: "lucille@bluthco.com",
    city: "Houston",
    state: "Texas",
    traveldist: "200",
    phone: "1-303-456-8976",
    paypaluser:"lucillebluth",
    skills: ["mixology", "bartending", "sommelier"],
    reviews: ["There's nothing here! Leave a review!"],
    photourl: "https://randomuser.me/api/portraits/women/15.jpg",
    bio:"I'm a chemist with a passion for spirits! Booze, that is. I may spend my days mixing things in a lab, and I treat a wet bar no differently. I can teach you about basic mixology, crafting your own cocktails, wine pairings and more. I am a Level Two Sommelier and a moonshine connoisseur. Available to meet online or in person.",
    date: new Date(Date.now())
  },
  {
    _id: "6rg45eth456",
    firstname: "Tony",
    lastname: "Soprano",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    email: "tsoprano@notamobster.com",
    city: "Boerne",
    state: "Texas",
    traveldist: "100",
    phone: "1-210-388-9076",
    paypaluser:"tonysoprano",
    skills: ["plumbing","handyman", "small home repair"],
    reviews: ["There's nothing here! Leave a review!"],
    photourl: "https://randomuser.me/api/portraits/men/21.jpg",
    bio:"I'm from New Jersey, but my family and I moved here to get away. From the city and the busy life. I've worked in sanitation most of my life and now I'm doin handyman type stuff. You know, plumbing and repairs and whatnot. I'm not a weirdo. It's ok to have me in your home. My buddies will vouch for me.",
    date: new Date(Date.now())
  },
  {
    _id: "thn415869dfgb416ajm",
    firstname: "Jeremy",
    lastname: "Henry",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
    email: "jhenry@itsjustjavascript.com",
    city: "San Antonio",
    state: "Texas",
    traveldist: "25",
    phone: "1-210-908-7865",
    paypaluser:"jeremyhenry",
    skills: ["magic","javascript", "wiring it up", "drilling down"],
    reviews: ["There's nothing here! Leave a review!"],
    photourl: "https://randomuser.me/api/portraits/lego/2.jpg",
    bio:"Hi I'm Jeremy. I'm a Principal Software Developer and an Adjunct Instructor for UTSA's Full Stack Coding Bootcamp. You'd think that would keep me busy enough, but that's just JavaScript. My real passion is magic. I'm available remotely and in person to teach you parlor tricks, card tricks, levitation, escapology, and a kid's party favorite: React. Remember, if you want opportunity to knock, you had better build a door - and learn to make it vanish. Abracadabra!",
    date: new Date(Date.now())
  },
  {
    _id: "gvuil482vq48asdf456",
    firstname: "Lisa",
    lastname: "Turtle",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    email: "lturtle@savedbythebell.com",
    city: "San Antonio",
    state: "Texas",
    traveldist: "20",
    phone: "1-210-772-1192",
    paypaluser:"lisasitter",
    skills: ["babysitting","childcare"],
    reviews: ["There's nothing here! Leave a review!"],
    photourl: "https://randomuser.me/api/portraits/women/4.jpg",
    bio:"I'm Lisa and I'm a senior at Jefferson High School. After graduation, I plan to study early childhood development at UT Austin. I have been babysitting since I was 14 and am CPR certified. I am available in the evenings during the week, and all day on the weekends. References available upon request.",
    date: new Date(Date.now())
  },
  {
    _id: "lojka456486g",
    firstname: "Homer",
    lastname: "Simpson",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
    email: "homersimpson@donuts.com",
    city: "San Marcos",
    state: "Texas",
    traveldist: "200",
    phone: "1-210-987-3489",
    paypaluser:"homers",
    skills: ["moving assistance","house painting","drywall"],
    reviews: ["There's nothing here! Leave a review!"],
    photourl: "https://randomuser.me/api/portraits/men/5.jpg",
    bio:"I've been a contractor for 15 years, but love helping people out when I can. I've got a big truck, some buddies, and some ladders. I can help you move, paint, and do drywall - you just provide the supplies. Available most weekends.",
    date: new Date(Date.now())
  },
  {
    _id: "87dnhtq537kde",
    firstname: "Marky",
    lastname: "Mark",
    email: "mm@thefunkybunch.com",
    city: "San Antonio",
    state: "Texas",
    traveldist: "20",
    phone: "1-210-867-5309",
    paypaluser:"markymarky",
    skills: ["lawn care","fence mending","landscaping"],
    reviews: ["There's nothing here! Leave a review!"],
    photourl: "https://randomuser.me/api/portraits/men/72.jpg",
    bio:"My name is Mark, but you can call me Marky. I spend most of my time with the Funky Bunch, but in my spare time, I love working outdoors. Lawn maintenance and lanscaping are my primary areas of expertise, but I also mend a mean fence. I'm available most week days, since I'm busy getting funky on the weekends.",
    date: new Date(Date.now())
  },
  {
    _id: "l092nhd72grklo27",
    firstname: "Leslie",
    lastname: "Knope",
    email: "lbknope@pawneeprd.com",
    city: "Boerne",
    state: "Texas",
    traveldist: "50",
    phone: "1-210-234-9987",
    paypaluser:"leslieknope",
    skills: ["lawn care","gardening","landscaping"],
    reviews: ["There's nothing here! Leave a review!"],
    photourl: "https://randomuser.me/api/portraits/women/86.jpg",
    bio:"Hi I'm Leslie, Deputy Director of the Parks and Recreation Deprtment. I have a passion for parks and the closest park to you is your own yard! I love helping people with lawn care and garden planning. I am a certified Master Gardener and can help you plan your edible, perennial, and pollinator gardens. Virtual and in person meetings available.",
    date: new Date(Date.now())
  },
  {
    _id: "23gf35768462nkdk",
    firstname: "Sandy",
    lastname: "Cheeks",
    email: "sandy@sbsp.com",
    city: "Helotes",
    state: "Texas",
    traveldist: "100",
    phone: "1-210-344-0021",
    paypaluser:"scheeks",
    skills: ["massage","reiki","energy healing","breath work"],
    reviews: ["There's nothing here! Leave a review!"],
    photourl: "https://randomuser.me/api/portraits/women/16.jpg",
    bio:"My name is Sandy. I've been an energy healer and massage therapist for 5 years. I specialize in reiki, breath work, and massage to heal your body, mind, and spirit. I am available to make house calls or host you in my private studio. References and credentials available upon request.",
    date: new Date(Date.now())
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
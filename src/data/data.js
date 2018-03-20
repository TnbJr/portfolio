import assessre from '../images/assessre.png';
import mio from '../images/mio.png';
import foods from '../images/health-foods.png';
import anchored from '../images/anchored.png';

const data = {
  menus: [
    { text: 'MY SKILLS',  link: '/skills' },
    { text: 'PORTFOLIO', link: '/portfolio' },
    { text: 'ABOUT ME', link: '/about-me' }
  ],
  portfolioItems: [

  	{
  		date: "Current",
      contentParagraphs: [
        "I am currently looking to explore new and exciting opportunities. I am open to work with both startups and established companies.",
        
      ],
  	},
  	{
  		date: "Jan 2018",
  		name: "Assess+RE",
      webLink:"https://www.assessre.com/",
  		image: assessre,
      contentParagraphs: ["Assess is a cloud-based commercial real estate investment analysis platform that quickly and easily value complex commercial properties.", "The primary goal for this project was to refactor both the backend and frontend to optimize the platform performance."],
      contentList: ["Utilized High Order Components making UI components reusable", "Developed landing page", "Added unit testing to React components"],
  		techTags: [ "Javascript", "Node.js", "React", "Python",  "Flask", "PostgresSQL"]
  	},
    {
      date: "Aug 2017",
      name: "Anchored In Love International",
      webLink:"http://www.anchoredinloveinternational.org/",
      image:anchored,
      contentParagraphs: ["Anchored in Love International is a non-profit that is dedicated to enriching the lives of underprivileged children across the globe.", "The primary goal for this project was to create a website that can collect donations and inform donors about upcoming events."],
      contentList: ["Built an responsive website for cross browser and multiple devices using HTML5/CSS3 and Bootstrap", "Integrated BrainTree/PayPal payment processing API to collect donations"],
      techTags: [ "Django", "Python", "Bootstrap", "jQuery", "HTML/CSS"]
    },
    {
      date: "Jun 2017",
      name: "Big Apple Testing",
      webLink:"http://www.bigappletesting.com/",
      image:"",
      contentParagraphs: ["Big Apple Testing performs special construction inspecting and material testing on behalf of New York’s leading engineering and development firms.", "The primary goal for this project was to automate the report creating process."],
      contentList: ["Developed a Python Script that scraped data from external sources", "Using both internal and external data created project proposals and inspections reports created by a Python script."],
      techTags: [ "Python", "Excel", "PostgresSQL"]
    },
    {
      date: "Aug 2016",
      name: "Doran Jones",
      webLink: "http://www.doranjones.com/",
      image: mio,
      contentParagraphs: ["Doran Jones is a IT Consulting firm specializing in IT transformations, software development, and QA/Software Testing for financial institutions.", "The primary goal for this project was to create internal tools for the clients traders and portfolio manager to assist in making trades."],
      contentList: ["Migrated the UI build system to Webpack, making iteration on front end features faster and easier", "Responsible for converting previous UI components to React.js using Redux for state management", "Designed a RESTful APIs in Python to allow consumption of Bloomberg data by clients internal web applications"],
      techTags: [ "Python", "Django", "Flask", "React", "Node.js", "Redux"]
    },
    {
      date: "Aug 2014",
      name: "Healthier You Foods ",
      webLink: "http://www.healthieryoufoods.com/",
      image:foods,
      contentParagraphs: ["Healthier You Foods is a health food store that provides natural halth products and health education.", "The primary goal for this project was to increase brand awareness."],
      contentList: ["Customized a WordPress theme using HTML, CSS, and jQuery", "Developed python scripts to analyze inventory and report low and out of stock products"],
      techTags: [ "Wordpress", "Python", "Django", "jQuery", "CSS"]
    },
  ]
};

export default data;
const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://jgdshkovi.github.io/portfolio',
  title: "I'JK",
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jagadeesh',
  role: 'aspiring ML Engineer/Data Scientist',
  description:
    "Jagadeesh Kovi is a passionate Data Science professional and Software Engineer with a proven track record of leveraging technology to drive innovation in the financial services sector. Graduating with a Master's in Data Science from Indiana University Bloomington, Jagadeesh possesses a rich academic foundation complemented by hands-on experience at industry-leading companies like FIS Global. With expertise spanning Python, Java, SQL, and cutting-edge technologies like Azure, he has played pivotal roles in modernizing core banking platforms, enhancing application efficiency, and translating intricate business requirements into tangible solutions. Adept at bridging the gap between technical intricacies and business objectives, Jagadeesh's commitment to excellence, combined with his analytical prowess, makes him a valuable asset in any forward-thinking organization.",
  resume: 'https://drive.google.com/file/d/1dIPGtgpAFZ5goYG5h6J9GT123S9I74la/view',
  social: {
    linkedin: 'https://linkedin.com/in/jgdshkovi',
    github: 'https://github.com/jgdshkovi',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Automated Web Scraping & Google Translate',
    description:
      `• Employed requests and BeautifulSoup(bs4) Python libraries to automate data extraction from provided URLs.
      • Implemented a robust website scraping solution with customizable parameters, including element types and
      scraping depth(up to 3), to efficiently organize and manage the extracted data.
      • To showcase, automated the translation of a large sample website to Hindi using Google Translate API.`,
      // [
      //   "• Employed requests and BeautifulSoup(bs4) Python libraries to automate data extraction from provided URLs."
      //   `• Implemented a robust website scraping solution with customizable parameters, including element types and
      //   scraping depth(up to 3), to efficiently organize and manage the extracted data.`,
      //   "• To showcase, automated the translation of a large sample website to Hindi using Google Translate API."],
    stack: ['Python', 'BeautifulSoup', 'Requests'],
    sourceCode: 'https://github.com/jgdshkovi/webscrape_and_translate',
    livePreview: 'https://jgdshkovi-abc.000webhostapp.com/',
  },
  {
    name: 'Toxic Comment Detection (on Twitter)',
    description:
      `• Successfully fine-tuned the BERT model (transfer learning) by leveraging the Jigsaw Toxic comment dataset from
      Kaggle with ∼159k observations, enhancing its performance for accurate toxic comment classification.
      • Implemented an integrated system that extracts tweets from the user’s timeline using the Twitter API and
      seamlessly passes them to the trained NLP model for analysis.
      • The trained model achieved an validation accuracy of 95.8%. Classify the tweets, and take appropriate action
      based on the returned toxicity score, contributing to a safer online environment.`,
    stack: ['Python', 'Flask', 'Tweepy', 'NLP', 'Libraries'],
    sourceCode: 'https://github.com/jgdshkovi/final_yr_proj',
    livePreview: '',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Programming Languages',
  'Python',
  'Java',
  'JavaScript',
  'SQL',
  'HTML/CSS',
  
  'Libraries & Frameworks',
  'Pandas',
  'NumPy',
  'Matplotlib',
  'Tableau',
  'AngularJS',
  'Flask',

  'Machine Learning',
  'CNN',
  'Linear & Logistic Regression',
  'KNN',
  // 'Data Cleaning',
  'EDA',
  'Computer Vision',
  
  'Technology',
  'Azure',
  'Git',
  // 'BitBucket',
  // 'Jenkins',
  'Docker',
  'RESTful API',
  'Ubuntu',
  'Google Colab',
  'CI/CD',
  'Problem Solving',
  'Communication',
  'MS Office Suite'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jagakovi@gmail.com',
}

const experiences = [
  {
    title: 'Software Engineer',
    company: 'FIS Global',
    location: 'Chennai, INDIA',
    duration: 'Oct 2021 - Nov 2022',
    overview: 'Decision Solutions, Core Banking Solutions, Angular, Agile/Scrum',
    responsibilities: [
      "Helped rewrite the ‘Customer Setup’ platform, modernizing the old IBM AS/400 mainframes using AngularJS.",
      "Seamlessly incorporated over 30 essential core banking modules - including ChexAdvisor, FraudChex, Customer Search, and Mergers/Acquisitions/Splits - enhancing the application’s functionality and efficiency.",
      "Reduced application access times by 60% through the implementation of GUI interfaces, reports, and dashboards.",
      "Engaged in cross-functional team collaboration, participated in product discussions and code reviews, and played a key role in both acceptance testing and go-live production builds."
    ],
  },
  {
    title: 'Summer Research Intern',
    company: 'Bennett University',
    location: 'Noida, INDIA',
    duration: 'May 2020 - June 2020',
    overview: 'PyTorch, Edge Computing, Custom k-means implementation',
    responsibilities: [
      "Successfully fine-tuned the BERT model (transfer learning) by leveraging the Jigsaw Toxic comment dataset from Kaggle with ∼159k observations, enhancing its performance for accurate toxic comment classification.",
      "Implemented an integrated system that extracts tweets from the user’s timeline using the Twitter API and seamlessly passes them to the trained NLP model for analysis.",
      "The trained model achieved an validation accuracy of 95.8%. Classify the tweets, and take appropriate action based on the returned toxicity score, contributing to a safer online environment."
    ],
  },
  // Add more work experience items as needed
];

export { header, about, projects, skills, contact, experiences }

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://jgdshkovi.github.io/portfolio',
  title: "I'JK",
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jagadeesh',
  // role: 'Jack of all trades and a master of some.',
  role1: 'Data Science@IU',
  role2: 'Ex-Software Engineer@FIS ',
  description:
    "Jagadeesh Kovi is a passionate Data Science professional and Software Engineer with a proven track record of leveraging technology to drive innovation in the financial services sector. Graduating with a Master's in Data Science from Indiana University Bloomington, Jagadeesh possesses a rich academic foundation complemented by hands-on experience at industry-leading companies like FIS Global. With expertise spanning Python, Java, SQL, and cutting-edge technologies like Azure, he has played pivotal roles in modernizing core banking platforms, enhancing application efficiency, and translating intricate business requirements into tangible solutions. Adept at bridging the gap between technical intricacies and business objectives, Jagadeesh's commitment to excellence, combined with his analytical prowess, makes him a valuable asset in any forward-thinking organization.",
  resume: 'https://drive.google.com/uc?export=download&id=1eZG3fTKeIKL_CyaPULa5h3xKX35xSt6t',
  social: {
    linkedin: 'https://linkedin.com/in/jgdshkovi',
    github: 'https://github.com/jgdshkovi',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: '(Currently developing) ChatBot using LangChain',
    description:
      `• Document Helper Bot, an LLM application designed to simplify information access (RAG) from docs through a Q&A interface. 
      Initially using OpenAI API during development but plan to integrate open-source models later.

      • Leverages LangChain’s power, goes beyond traditional solutions, and is customizable for specific data sets.`,
    stack: ['LangChain,', 'Pinecone VectorDB,', 'OpenAI LLM'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Weather Data GCP Pipeline',
    description:
      `• Designed and implemented an automated ETL pipeline on Google Cloud Platform for weather data management.
      Utilized Python, Pandas, and OpenWeather API for data extraction, transformation, and storage in BigQuery.
      
      • Deployed and scheduled daily data processing using GCP services like Cloud Functions and Cloud Scheduler.
      Created interactive data visualizations and dashboards using Looker Studio for weather data analysis.`,
    stack: ['ETL,', 'GCP Cloud Storage/Functions/Scheduler,', 'BigQuery,', 'Looker Studio'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Object Recognition on Historic IULMIA Ad Videos',
    description:
      `• Enhanced IU Libraries Moving Image Archive accessibility by leveraging DINO+SAM architecture and YOLOv8
      models for object detection and text recognition in historic television ads.
      
      • Improved historical footage object detection by 20% through unsupervised learning on labeled datasets from video
      frames, with room for enhancement via OCR and optimized open-set object detection class selection.`,
    stack: ['Grounding DINO + SAM,', 'Open-set object detection,', 'YOLO'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'OMR Sheet Processing and Answer Extraction',
    description:
      `• Developed an automated system for processing scanned answer sheets and extracting student responses. Achieved
      over 99% accuracy on validation dataset, processing all the forms in under 3 seconds.
      
      • Experimented & implemented Image preprocessing, contour detection, steganography, and custom
      barcode encoding/decoding. Designed the system to be efficient, robust & handle specific data constraints.`,
    stack: ['Python,', 'PIL,', 'OpenCV,', 'Morphological Ops'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Home Credit Default Risk Analysis',
    description:
      `• Designed and optimized an advanced Multi-Layer Perceptron (MLP) using back-propagation and gradient descent, achieving
      a crucial 68.26% test accuracy, contributing to Home Credit’s lending strategy refinement.
      
      • Employed feature selection techniques like grid search and cross-validation for hyperparameter tuning, enhancing the Deep
      Learning model to achieve a test F1 score (0.7311) and a public score (0.7537).
      
      • Executed a varied ensemble strategy with Random Forest, CatBoost, and XGBoost via stacking. Integrated a deep learning
      algorithm, boosting predictive accuracy by 10%.`,
    stack: ['Python,', 'Sklearn,', 'Feature Selection,', 'Hyperparameter tuning,', 'TensorFlow'],
    sourceCode: '',
    livePreview: '',
  },
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
    stack: ['Python,', 'BeautifulSoup,', 'Requests'],
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
    stack: ['Python,', 'Flask,', 'Tweepy,', 'NLP,', 'Libraries'],
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
  'PyTorch',
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
    title: 'Research Assistant (FADS)',
    company: 'Indiana University',
    location: 'Bloomington, Indiana',
    duration: 'May 2024 - Present',
    overview: 'Regulator Trends Analysis for Corporate Compliance Risk',
    responsibilities: [
      "• IU Faculty Assistance in Data Science (FADS) fellowship.",
      "• Working on developing a compliance risk analysis tool using NLP to identify regulatory enforcement trends.",
      "• Web scraping system to gather data from 10+ public enforcement newsletters, in the absence of RSS feeds.",
      "• Dashboard for real-time compliance insights & visualizations, using filters to correlate compliance areas over time."
    ],
  },
  {
    title: 'Software Engineer',
    company: 'FIS Global',
    location: 'Chennai, INDIA',
    duration: 'Oct 2021 - Nov 2022',
    overview: 'Decision Solutions, Core Banking Solutions, Angular, Agile/Scrum',
    responsibilities: [
      "• Helped rewrite the ‘Customer Setup’ platform, modernizing the old IBM AS/400 mainframes using AngularJS.",
      "• Seamlessly incorporated over 30 essential core banking modules - including ChexAdvisor, FraudChex, Customer Search, and Mergers/Acquisitions/Splits - enhancing the application’s functionality and efficiency.",
      "• Reduced application access times by 60% through the implementation of GUI interfaces, reports, and dashboards.",
      "• Engaged in cross-functional team collaboration, participated in product discussions and code reviews, and played a key role in both acceptance testing and go-live production builds."
    ],
  },
  {
    title: 'Summer Research Intern',
    company: 'Bennett University',
    location: 'Noida, INDIA',
    duration: 'May 2020 - June 2020',
    overview: 'PyTorch, Edge Computing, Custom k-means implementation',
    responsibilities: [
      "• Successfully fine-tuned the BERT model (transfer learning) by leveraging the Jigsaw Toxic comment dataset from Kaggle with ∼159k observations, enhancing its performance for accurate toxic comment classification.",
      "• Implemented an integrated system that extracts tweets from the user’s timeline using the Twitter API and seamlessly passes them to the trained NLP model for analysis.",
      "• The trained model achieved an validation accuracy of 95.8%. Classify the tweets, and take appropriate action based on the returned toxicity score, contributing to a safer online environment."
    ],
  },
  // Add more work experience items as needed
];

export { header, about, projects, skills, contact, experiences }

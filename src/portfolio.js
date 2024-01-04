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
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
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

export { header, about, projects, skills, contact }

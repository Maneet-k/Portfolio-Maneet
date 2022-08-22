import aboutpic from "./components/Access/MePic.jpeg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'JS.',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Manjit Kaur',
  role: 'Full-Stack developer',
  description:
    "I'm a Final year Engineering Student pursuing my Bachelor's degree at UIET, Panjab University, Chandigarh.I'm a Full-Stack Web Developer.",
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/manjit-kaur-5a34a6223/',
    github: 'https://github.com/Maneet-k',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'PUSTK STORE',
    description:
      "It's a react app that allows users to share their knowledgeful resources across the platform and users to get access of free pdfs, notes and other resources on a single website. This will also allow users to store their notes and knwledge at a single point for future references. Hence becoming a time management app.",
    stack: ['React', 'Multer', 'Sharp','MongoDB'],
    sourceCode: 'https://github.com/Maneet-k/pustak-store',
    livePreview: 'https://github.com/Maneet-k/pustak-store',
  },
  {
    name: 'TicTacToe',
    description:
      'Tic-tac-toe is played on a three-by-three grid by two players, who alternately place the marks X and O in one of the nine spaces in the grid.This website allows a user to play game when he is alone with the computer freely.',
    stack: ['swiper.js', 'npm', 'jawsdb','handlebars','express','nodejs'],
    sourceCode: 'https://github.com/Maneet-k/tictactoe',
    livePreview: 'https://maneet-k.github.io/tictactoe/',
  },
  {
    name: 'To-Do-List',
    description:
      'It makes a to do list for users where they can add new task, delete the completed task.To Do List: a list of things that one wants to get done or that need to get done',
    stack: ['html-css-javascript', 'Node.js', 'MongoDB', 'Express.js', 'ejs'],
    sourceCode: 'https://github.com/Maneet-k/todolist',
    livePreview: 'https://geturselfready.herokuapp.com/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Express',
  'MySQL',
  'MongoDB',
  'React',
  'BootStrap',
  'Node.js',
  'Material UI',
  'Git',
  'MERN',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'manjitkaurk797@gmail.com',
}

export { header, about, projects, skills, contact }

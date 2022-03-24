import logappimg from '../../../img/png-logapp.png'
import prevport from '../../../img/png-prevport.png'
import valhelp from '../../../img/png-valhelp.png'
import cvgen from '../../../img/png-cvgen.png'

export const modalLog = {
  id: 'project-logapp',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Log App',
  headLine: 'MERN',
  description: 'An app from which I learned how to implement a MERN stack. Create an account, create various logs and start typing what ever you want to log. Supports markdown.',
  buttonLabel: 'Visit',
  href: 'https://logmaker.herokuapp.com',
  // eslint-disable-next-line no-undef
  img: logappimg,
  alt: 'Log app',
  dark: true,
  primary: true,
  darkText: false
}

export const modalPrevPort = {
  id: 'project-prevport',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Previous Portfolio',
  headLine: 'HTML, CSS, JS',
  description: 'A very simple website that was part of an assignment in one of the courses I took in webdevelopment. Privatly hosted.',
  buttonLabel: 'Visit',
  href: 'http://62.20.202.130:81',
  // eslint-disable-next-line no-undef
  img: prevport,
  alt: 'Previous portfolio',
  dark: true,
  primary: true,
  darkText: false
}

export const modalValidation = {
  id: 'project-validation',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Validation Helper',
  headLine: 'LAMP',
  description: 'A LAMP-stack, that I used to aid me in one of my professional assignments with a client within Life Science. No link is provided because of possible sensitive data.',
  buttonLabel: '',
  href: '',
  // eslint-disable-next-line no-undef
  img: valhelp,
  alt: 'Validation helper',
  dark: true,
  primary: true,
  darkText: false
}

export const modalCvGen = {
  id: 'project-cvgen',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'CV Generator',
  headLine: 'Flask, Ngnix, Docker, LaTeX',
  description: 'Creates a CV using a LaTeX template according to one of my employers. Link is provided, but the app will not always be up as it is privatly hosted.',
  buttonLabel: 'Visit',
  href: 'http://62.20.202.130:85',
  // eslint-disable-next-line no-undef
  img: cvgen,
  alt: 'CV Generator',
  dark: true,
  primary: true,
  darkText: false
}
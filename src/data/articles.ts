export interface Article {
  id: number;
  title: string;
  content: string;
}

export const articles: Article[] = [
  { id: 1, title: "React Basics", content: "React is a JavaScript library for building user interfaces." },
  { id: 2, title: "Learning JavaScript", content: "JavaScript is the language of the web, and it's essential to learn." },
  { id: 3, title: "Front-End Frameworks", content: "Frameworks like React, Angular, and Vue.js help developers build applications faster." },
  { id: 4, title: "Introduction to HTML", content: "HTML is the standard markup language for creating web pages." },
  { id: 5, title: "CSS Fundamentals", content: "CSS is a language used to style HTML documents and define web page designs." },
  { id: 6, title: "State Management with Redux", content: "Redux is a state management library used with React for complex state logic." },
  { id: 7, title: "Understanding TypeScript", content: "TypeScript is a superset of JavaScript that introduces type checking to ensure code quality." },
  { id: 8, title: "The Future of Web Development", content: "Web development is evolving with new technologies like AI and serverless computing." },
  { id: 9, title: "APIs and REST", content: "Understanding APIs and RESTful services is vital for modern web development." },
  { id: 10, title: "Responsive Web Design", content: "Responsive web design ensures websites look good on all devices, from mobile to desktop." },
  { id: 11, title: "GraphQL vs REST", content: "GraphQL is an alternative to REST APIs that provides more flexibility in data fetching." },
  { id: 12, title: "Node.js for Backend Development", content: "Node.js allows developers to build scalable and fast server-side applications using JavaScript." },
  { id: 13, title: "Web Security Best Practices", content: "Web security is crucial; practices like HTTPS, data sanitization, and CORS must be followed." },
  { id: 14, title: "Testing with Jest", content: "Jest is a JavaScript testing framework for building robust and bug-free applications." },
  { id: 15, title: "Next.js and Server-Side Rendering", content: "Next.js is a React framework that provides server-side rendering and static site generation capabilities." },
];

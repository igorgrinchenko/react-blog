import { useState } from "react";
import { Container, Grid } from "@mui/material";
import ArticleCard from "../components/ArticleCard";
import CustomPagination from "../components/CustomPagination";

function Home() {
  const articles = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence",
      description:
        "How artificial intelligence is changing our everyday lives.",
      content:
        "Artificial intelligence is becoming an important part of modern technology. From voice assistants to autonomous systems, AI is changing many areas of our everyday lives.",
      category: "AI",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      date: "2026-09-18",
    },
    {
      id: 2,
      title: "React: Why Component-Based Development Matters",
      description: "An introduction to component-based development with React.",
      content:
        "React allows developers to build user interfaces from reusable components. Instead of creating one large application, developers can divide the interface into smaller and independent parts.",
      category: "React",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      date: "2026-09-16",
    },
    {
      id: 3,
      title: "JavaScript Features Every Developer Should Know",
      description:
        "Modern JavaScript features that make everyday development easier.",
      content:
        "Modern JavaScript provides developers with powerful features such as destructuring, spread syntax, arrow functions, modules and asynchronous programming.",
      category: "JavaScript",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
      date: "2026-09-14",
    },
    {
      id: 4,
      title: "How APIs Work in Modern Web Applications",
      description:
        "Understanding how frontend applications communicate with APIs.",
      content:
        "APIs allow different parts of a software system to communicate with each other. Modern web applications commonly use HTTP APIs to request and modify data.",
      category: "Web Development",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      date: "2026-09-12",
    },
    {
      id: 5,
      title: "Understanding HTTP Methods",
      description:
        "A practical introduction to GET, POST, PUT, PATCH and DELETE.",
      content:
        "HTTP methods describe the type of operation a client wants to perform on a server. GET is commonly used to retrieve data, while POST, PUT, PATCH and DELETE are used to modify resources.",
      category: "Web Development",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      date: "2026-09-10",
    },
    {
      id: 6,
      title: "CSS Grid vs Flexbox",
      description:
        "When should you use CSS Grid and when is Flexbox the better choice?",
      content:
        "CSS Grid and Flexbox are two powerful layout systems. Flexbox is especially useful for one-dimensional layouts, while Grid is designed for two-dimensional layouts.",
      category: "CSS",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2",
      date: "2026-09-08",
    },
    {
      id: 7,
      title: "Responsive Web Design Basics",
      description: "The essential principles behind responsive websites.",
      content:
        "Responsive web design allows websites to adapt to different screen sizes. Flexible layouts, responsive images and media queries help create better experiences across devices.",
      category: "CSS",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      date: "2026-09-06",
    },
    {
      id: 8,
      title: "What Is Frontend Development?",
      description:
        "An introduction to the technologies behind modern web interfaces.",
      content:
        "Frontend development focuses on everything users see and interact with in a web application. HTML, CSS and JavaScript form the foundation of frontend development.",
      category: "Web Development",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      date: "2026-09-04",
    },
    {
      id: 9,
      title: "Introduction to Git and GitHub",
      description:
        "Why version control is an essential part of modern development.",
      content:
        "Git allows developers to track changes in their projects and work safely with different versions of their code. GitHub adds collaboration and remote repository features.",
      category: "Development",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498",
      date: "2026-09-02",
    },
    {
      id: 10,
      title: "Web Accessibility Basics",
      description: "How to make websites more accessible to different users.",
      content:
        "Web accessibility means designing applications that can be used by people with different abilities. Semantic HTML, keyboard navigation and accessible forms are important foundations.",
      category: "Web Development",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
      date: "2026-08-31",
    },
    {
      id: 11,
      title: "Understanding React Props",
      description:
        "How props help React components communicate with each other.",
      content:
        "Props allow data to be passed from a parent component to a child component. They are one of the fundamental concepts used to create reusable React interfaces.",
      category: "React",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2",
      date: "2026-08-29",
    },
    {
      id: 12,
      title: "React State Explained",
      description: "A simple explanation of state and why it matters in React.",
      content:
        "State allows React components to remember information and update the interface when that information changes. The useState hook is commonly used for local component state.",
      category: "React",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      date: "2026-08-27",
    },
    {
      id: 13,
      title: "Async JavaScript and Promises",
      description:
        "Understanding asynchronous operations in modern JavaScript.",
      content:
        "JavaScript uses asynchronous programming to handle operations such as network requests without blocking the main thread. Promises and async/await make asynchronous code easier to work with.",
      category: "JavaScript",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      date: "2026-08-25",
    },
    {
      id: 14,
      title: "Working with Axios",
      description:
        "A practical introduction to making HTTP requests with Axios.",
      content:
        "Axios is a popular HTTP client for JavaScript applications. It provides a convenient API for sending requests, handling responses and working with request configuration.",
      category: "JavaScript",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
      date: "2026-08-23",
    },
    {
      id: 15,
      title: "What Is JSON?",
      description:
        "Understanding the data format used by many modern web APIs.",
      content:
        "JSON is a lightweight text format used to represent structured data. It is widely used for communication between frontend applications and backend services.",
      category: "Web Development",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
      date: "2026-08-21",
    },
    {
      id: 16,
      title: "Understanding REST APIs",
      description: "The basic principles behind RESTful web services.",
      content:
        "REST is an architectural approach for building networked applications. REST APIs commonly expose resources through URLs and use standard HTTP methods to operate on them.",
      category: "Web Development",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      date: "2026-08-19",
    },
    {
      id: 17,
      title: "CSS Variables in Modern Projects",
      description: "How CSS custom properties can simplify styling.",
      content:
        "CSS variables allow developers to store reusable values such as colors, spacing and font sizes. They make styles easier to maintain and update across larger projects.",
      category: "CSS",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
      date: "2026-08-17",
    },
    {
      id: 18,
      title: "Modern CSS Layout Techniques",
      description: "Useful CSS techniques for building clean interfaces.",
      content:
        "Modern CSS provides many tools for creating flexible layouts. Grid, Flexbox, gap, minmax and container queries can help developers build responsive interfaces with less code.",
      category: "CSS",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      date: "2026-08-15",
    },
    {
      id: 19,
      title: "Frontend Performance Optimization",
      description: "Practical techniques for making web applications faster.",
      content:
        "Frontend performance can be improved by optimizing images, reducing unnecessary JavaScript, lazy loading resources and avoiding unnecessary rendering work.",
      category: "Performance",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      date: "2026-08-13",
    },
    {
      id: 20,
      title: "Understanding Browser DevTools",
      description:
        "How developers use browser tools to debug web applications.",
      content:
        "Browser DevTools provide powerful tools for inspecting HTML, debugging JavaScript, analyzing network requests and measuring application performance.",
      category: "Development",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28",
      date: "2026-08-11",
    },
    {
      id: 21,
      title: "Introduction to TypeScript",
      description:
        "Why many JavaScript developers are moving toward TypeScript.",
      content:
        "TypeScript adds static typing and other development features to JavaScript. It can help developers catch errors earlier and make large codebases easier to maintain.",
      category: "TypeScript",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
      date: "2026-08-09",
    },
    {
      id: 22,
      title: "Clean Code Principles",
      description: "Simple principles for writing more maintainable code.",
      content:
        "Clean code is easier to understand, test and modify. Meaningful names, small functions and clear responsibilities can make a significant difference in larger applications.",
      category: "Development",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      date: "2026-08-07",
    },
    {
      id: 23,
      title: "Component Reusability in React",
      description: "How reusable components can improve React applications.",
      content:
        "Reusable components reduce duplication and make interfaces easier to maintain. Good component design starts with clear responsibilities and predictable inputs.",
      category: "React",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
      date: "2026-08-05",
    },
    {
      id: 24,
      title: "React Router Fundamentals",
      description: "How client-side routing works in React applications.",
      content:
        "React Router allows applications to display different components based on the current URL without requiring a full page reload.",
      category: "React",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766",
      date: "2026-08-03",
    },
    {
      id: 25,
      title: "State Management in Frontend Applications",
      description: "When local state is enough and when global state can help.",
      content:
        "Small components can often manage their own local state. Larger applications may benefit from shared state solutions when multiple parts of the interface need the same data.",
      category: "Development",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      date: "2026-08-01",
    },
    {
      id: 26,
      title: "Introduction to Web Security",
      description:
        "Basic security concepts every frontend developer should understand.",
      content:
        "Frontend developers should understand common web security concepts such as XSS, CSRF, secure authentication and safe handling of user input.",
      category: "Security",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
      date: "2026-07-30",
    },
    {
      id: 27,
      title: "How Authentication Works",
      description:
        "A beginner-friendly overview of authentication in web applications.",
      content:
        "Authentication allows applications to verify the identity of users. Modern systems commonly use sessions, tokens or other mechanisms to maintain authenticated state.",
      category: "Security",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      date: "2026-07-28",
    },
    {
      id: 28,
      title: "Building Better Developer Workflows",
      description:
        "Tools and habits that can make everyday development more efficient.",
      content:
        "A good development workflow combines version control, useful editor tools, automated checks and clear project organization. Small improvements can save significant time over a project.",
      category: "Development",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      date: "2026-07-26",
    },
    {
      id: 29,
      title: "The Evolution of Web Development",
      description:
        "How web development has changed from simple pages to modern applications.",
      content:
        "Web development has evolved from static HTML documents into complex applications with interactive interfaces, APIs, databases and sophisticated frontend frameworks.",
      category: "Web Development",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
      date: "2026-07-24",
    },
    {
      id: 30,
      title: "The Future of Frontend Development",
      description:
        "Exploring trends that may shape the next generation of web applications.",
      content:
        "Frontend development continues to evolve through new frameworks, browser capabilities, AI-assisted tools and improved development workflows. The core goal remains creating useful and accessible experiences.",
      category: "Web Development",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
      date: "2026-07-22",
    },
  ];

  const [currentArticles, setCurrentArticles] = useState([{}]);

  return (
    <Container maxWidth="lg" sx={{ pt: 10 }}>
      <Grid container spacing={3}>
        {currentArticles.map((article) => (
          <Grid key={article.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <ArticleCard article={article} />
          </Grid>
        ))}
      </Grid>

      <CustomPagination
        articles={articles}
        setCurrentArticles={setCurrentArticles}
      />
    </Container>
  );
}

export default Home;

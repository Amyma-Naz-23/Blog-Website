import React from 'react'
import BlogCard from './BlogCard'

export default function Mega() {
  const posts = [
    {
      id: '1',
      title: 'Future Of AI',
      description: "Artificial intelligence (AI) applications are software programs that use AI techniques to perform specific tasks. These tasks can range from simple, repetitive tasks to complex, cognitive tasks that require human-like intelligence.",
      date: "2024-12-18",
      imageUrl: "/ai.webp"
    },
    {
      id: '2',
      title: 'HTML And Web Development',
      description: "HTML is the document of the web, providing the structure and content necessary for web pages to be meaningful. You can find content for HTML such as courses, articles, collections, and other useful bits of information to help you build your knowledge of this crucial part of the web.",
      date: "2024-12-02",
      imageUrl: "/OIP.jpeg"
    },
    {
      id: '3',
      title: 'Different Programming Language',
      description: "Instead of looking for the best language, a better strategy is to analyze the most used language and its uses. According to the TIOBE Index, there are over 265 programming languages out there. There is a reason why there are so many languages.",
      date: "2024-11-12",
      imageUrl: "/prog.jpeg"
    },
    {
      id: '4',
      title: 'Computer Presentation',
      description: "Create impactful presentations with these IT PowerPoint templates. Perfect for tech professionals, students, and educators, these templates will help you convey your message in a clear and engaging way.",
      date: "2024-10-01",
      imageUrl: "/pres.jpg"
    },
    {
      id: '5',
      title: 'GitHub’s Impact on Modern Development',
      description: "As artificial intelligence and design tools become more integrated into coding workflows, GitHub’s role will only grow more dynamic. Features like Copilot are already blurring the lines between human creativity and machine assistance.",
      date: "2024-08-08",
      imageUrl: "git.webp"
    },
    {
      id: '6',
      title: 'Illustration of a Humanoid Robot',
      description: "A humanoid robot is a robot resembling the human body in shape. The design may be for functional purposes, such as interacting with human tools and environments, for experimental purposes.",
      date: "2024-07-17",
      imageUrl: "/robot.webp"
    },
    {
      id: '7',
      title: 'The Evolution of AI Communication',
      description: "A world driven by technology, artificial intelligence (AI) has emerged as one of the most transformative forces of the 21st century. Among the many advancements in AI, ChatGPT stands out as a groundbreaking innovation that redefines human-computer interaction.",
      date: "2024-03-05",
      imageUrl: "/commun.webp"
    },
    {
      id: '8',
      title: 'Intro Of Computer',
      description: "BASIC (Beginners' All-purpose Symbolic Instruction Code) is a family of general-purpose, high-level programming languages designed for ease of use. The original version was created by John G. Kemeny and Thomas E. Kurtz at Dartmouth College in 1963.",
      date: "2024-02-12",
      imageUrl: "/intro.jpg"
    },
    {
      id: '9',
      title: 'Binary number',
      description: "The binary system is a numeral system designed to represent numbers using only 0 and 1 as its digits. Each place in a binary numeral or number stands for a power of 2, like how each place in the decimal system stands for a power of 10. Binary number 11111111 is equal to 255.",
      date: "2024-01-08",
      imageUrl: "/binary.jpeg"
    },
    {
      id: '10',
      title: 'Digital Electronic',
      description: "Digital electronics is a field of electronics involving the study of digital signals and the engineering of devices that use or produce them. This is in contrast to analog electronics which work primarily with analog signals. Despite the name, digital electronics designs include important analog design considerations.",
      date: "2023-12-19",
      imageUrl: "/dig.jpg"
    },
    {
      id: '11',
      title: 'Next.js',
      description: "Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure. NextJS is optimized for production with easier setup for SSR, making it ideal for scalable applications.",
      date: "2023-11-11",
      imageUrl: "/next.jpeg"
    },
    {
      id: '12',
      title: 'Full Stack Developer',
      description: "A full stack framework is a collection of software tools that provides all the components needed to build a complete web application. This includes the front-end user interface, back-end server, and database management. The MERN stack is a specific type of full stack that uses MongoDB, Express.js, React, and Node.js.",
      date: "2023-07-18",
      imageUrl: "/full.jpg"
    }
  ];

  return (
    <div className='my-8'>
      <h1 className='text-4xl font-bold text-center my-8 text-blue-900 hover:text-red-600 animate-color-change'>
        {" "}
        Exploring The World Of AI and Technology
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {posts.map((post, index) => (
          <div className='fade-in' key={post.id}>
            <div className='blog-card'>
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

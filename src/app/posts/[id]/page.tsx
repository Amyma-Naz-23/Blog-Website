"use client"
import React from 'react'

import CommentSection from '@/components/CommentSection'
import Authore from '@/components/Authore';
const posts = [
  {
    id: '1',
    title: 'Future Of AI',
    description: "Artificial intelligence (AI) applications are software programs that use AI techniques to perform specific tasks. These tasks can range from simple, repetitive tasks to complex, cognitive tasks that require human-like intelligence.The rise of AI-generated content has raised concerns about intellectual property rights. Creators are expressing dismay over AI companies using their works without consent or compensation, viewing it as theft. This situation underscores the need for robust copyright protections to ensure fair use and support the creative industries. Ai integration into music is fostering new forms of creativity. Genres like hip-hop have embraced AI-generated compositions, leading to songs that are sometimes indistinguishable from human-created works. This trend is expected to continue, with AI playing a significant role in music production, curation, and critique. Additionally, as AI becomes more prevalent, there is a growing appreciation for live performances, such as theater and sports, which offer authentic, human experiences that AI cannot replicate.",
    date: "2024-12-18",
    image: "/ai.webp"
  },
  {
    id: '2',
    title: 'HTML And Web Development',
    description: "HTML is the document of the web, providing the structure and content necessary for web pages to be meaningful. You can find content for HTML such as courses, articles, collections, and other useful bits of information to help you build your knowledge of this crucial part of the web.HTML serves as the backbone of web content, providing the structure and layout of a webpage. It uses a system of tags to define elements such as headings, paragraphs, links, and images. Mastering HTML is essential for creating well-structured and accessible web pages.CSS complements HTML by controlling the presentation of web pages. It allows developers to apply styles to HTML elements, including colors, fonts, and layouts. Proficiency in CSS enables the creation of visually appealing and responsive designs that adapt to various screen sizes. ",
    date: "2024-12-02",
    image: "/OIP.jpeg"
  },
  {
    id: '3',
    title: 'Different Programming Language',
    description: "Instead of looking for the best language, a better strategy is to analyze the most used language and its uses. According to the TIOBE Index, there are over 265 programming languages out there. There is a reason why there are so many languages.",
    date: "2024-11-12",
    image: "/prog.jpeg"
  },
  {
    id: '4',
    title: 'Computer Presentation',
    description: "Create impactful presentations with these IT PowerPoint templates. Perfect for tech professionals, students, and educators, these templates will help you convey your message in a clear and engaging way.",
    date: "2024-10-01",
    image: "/pres.jpg"
  },
  {
    id: '5',
    title: 'GitHub’s Impact on Modern Development',
    description: "As artificial intelligence and design tools become more integrated into coding workflows, GitHub’s role will only grow more dynamic. Features like Copilot are already blurring the lines between human creativity and machine assistance.",
    date: "2024-08-08",
    image: "git.webp"
  },
  {
    id: '6',
    title: 'Illustration of a Humanoid Robot',
    description: "A humanoid robot is a robot resembling the human body in shape. The design may be for functional purposes, such as interacting with human tools and environments, for experimental purposes.",
    date: "2024-07-17",
    image: "/robot.webp"
  },
  {
    id: '7',
    title: 'The Evolution of AI Communication',
    description: "A world driven by technology, artificial intelligence (AI) has emerged as one of the most transformative forces of the 21st century. Among the many advancements in AI, ChatGPT stands out as a groundbreaking innovation that redefines human-computer interaction.",
    date: "2024-03-05",
    image: "/commun.webp"
  },
  {
    id: '8',
    title: 'Intro Of Computer',
    description: "BASIC (Beginners' All-purpose Symbolic Instruction Code) is a family of general-purpose, high-level programming languages designed for ease of use. The original version was created by John G. Kemeny and Thomas E. Kurtz at Dartmouth College in 1963.",
    date: "2024-02-12",
    image: "/intro.jpg"
  },
  {
    id: '9',
    title: 'Binary number',
    description: "The binary system is a numeral system designed to represent numbers using only 0 and 1 as its digits. Each place in a binary numeral or number stands for a power of 2, like how each place in the decimal system stands for a power of 10. Binary number 11111111 is equal to 255.",
    date: "2024-01-08",
    image: "/binary.jpeg"
  },
  {
    id: '10',
    title: 'Digital Electronic',
    description: "Digital electronics is a field of electronics involving the study of digital signals and the engineering of devices that use or produce them. This is in contrast to analog electronics which work primarily with analog signals. Despite the name, digital electronics designs include important analog design considerations.",
    date: "2023-12-19",
    image: "/dig.jpg"
  },
  {
    id: '11',
    title: 'Next.js',
    description: "Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure. NextJS is optimized for production with easier setup for SSR, making it ideal for scalable applications.",
    date: "2023-11-11",
    image: "/next.jpeg"
  },
  {
    id: '12',
    title: 'Full Stack Developer',
    description: "A full stack framework is a collection of software tools that provides all the components needed to build a complete web application. This includes the front-end user interface, back-end server, and database management. The MERN stack is a specific type of full stack that uses MongoDB, Express.js, React, and Node.js.",
    date: "2023-07-18",
    image: "/full.jpg"
  }
];

export default function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);


  if (!post) {
    return (
      <h2 className='bg-black text-white mt-10 text-center text-5xl'> Post Not Found</h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p className='mt-4 text-justify' key={index}> {para.trim()}</p>
    ));
  };

  return (
    <div className='max-w-3xl mx-auto p-6'>
      <h1 className='md:text-4xl text-3xl font-bold text-red-600 text-center'>
        {" "}
        {post.title}
      </h1>

      {post.image && (
        <img src={post.image} alt={post.title} className='w-full h-auto rounded-md mt-5' />
      )}

      <div className='mt-6 text-lg text-slate-700'>

        {renderParagraphs(post.description)}


      </div>

      <CommentSection postId={post.id} />
      <Authore />

    </div>
  )

}

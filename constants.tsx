import React from 'react';
import type { Project, Testimonial, WorkingProcessStep, NewsArticle, Skill } from './types';
// FIX: Removed GithubIcon and other non-existent icons from this import as they are not used in this file.
// The missing icons will be added to components/Section.tsx to fix the primary error.
// import { GithubIcon, LinkedInIcon, EnvelopeIcon, FileAltIcon } from './components/Section'; // Now Icons

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#process', label: 'Process' },
  { href: '#works', label: 'Works' },
  { href: '#contact', label: 'Contact' },
];

export const initialSkills: Skill[] = [
    { name: 'Angular', image: 'https://cdn.svgporn.com/logos/angular-icon.svg' },
    { name: 'React', image: 'https://cdn.svgporn.com/logos/react.svg' },
    { name: 'Node.js', image: 'https://cdn.svgporn.com/logos/nodejs-icon.svg' },
    { name: 'JavaScript', image: 'https://cdn.svgporn.com/logos/javascript.svg' },
    { name: 'HTML5', image: 'https://cdn.svgporn.com/logos/html-5.svg' },
    { name: 'CSS3', image: 'https://cdn.svgporn.com/logos/css-3.svg' },
    { name: 'Python', image: 'https://cdn.svgporn.com/logos/python.svg' },
    { name: 'SQL', image: 'https://cdn.svgporn.com/logos/postgresql.svg' },
    { name: 'Sass', image: 'https://cdn.svgporn.com/logos/sass.svg' },
    { name: 'NPM', image: 'https://cdn.svgporn.com/logos/npm-icon.svg' },
];

export const aboutMeLists = {
    strategy: ['Brand Building', 'Marketing', 'Communications'],
    skills: ['Angular', 'React', 'Node.js', 'JavaScript', 'HTML5', 'CSS3', 'Python', 'SQL'],
    advice: ['Change Management', 'Process Management', 'Organizational Development']
};

export const workingProcessSteps: WorkingProcessStep[] = [
    { step: '01.', title: 'Research', description: 'I start by learning and researching based on the client brief and resources to gain insights about the needs, goals, products, and requirements to do well.' },
    { step: '02.', title: 'Strategy', description: 'Then I start to plan and structure the project, process and budget based on the discovery phase before I start the development.' },
    { step: '03.', title: 'Development', description: 'After I completed all the processes, goals, and scope, I started to do the development process such as creating basic codes and programming.' },
];

export const initialProjects: Project[] = [
    { 
        id: 1,
        title: 'AcertusDelivers', 
        description: 'Contributed to building the real-time email and messaging system for customer order updates for a US-based automotive logistics company.', 
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
        longDescription: 'Developed a scalable microservices architecture using Node.js and RabbitMQ to handle thousands of concurrent order updates. Integrated with third-party email (SendGrid) and SMS (Twilio) APIs to ensure reliable and timely delivery of notifications. The system improved customer communication and reduced support inquiries by 40%.',
        repoUrl: 'https://github.com',
        liveUrl: '#'
    },
    { 
        id: 2,
        title: 'Toqqer CMS', 
        description: 'As part of ToqqerCms — an India-based start-up building a cross-OTT platform for content management.', 
        image: 'https://images.unsplash.com/photo-1574367150993-201f3a3fa8f8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
        longDescription: 'Engineered a multi-tenant CMS using Angular and a serverless backend on AWS. The platform allows content providers to manage and distribute their video assets across various OTT services. Implemented features like metadata management, transcoding pipelines, and user role-based access control.',
        repoUrl: 'https://github.com',
        liveUrl: '#'
    },
    { 
        id: 3,
        title: 'Toqqer Studio', 
        description: 'A comprehensive platform for content creators, similar to YouTube Studio. I worked on integrating backend APIs to showcase video metrics.', 
        image: 'https://images.unsplash.com/photo-1598791355521-b0c0a5246834?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
        longDescription: 'Built data visualization dashboards with Chart.js and D3.js to display complex video analytics, including watch time, audience retention, and revenue. Connected the frontend to a RESTful API to fetch and display real-time data, enabling creators to track their content performance effectively.',
        repoUrl: 'https://github.com',
        liveUrl: '#'
    },
    { 
        id: 4,
        title: 'Corporate Website Redesign', 
        description: 'A complete overhaul of a corporate website to improve user experience and modernize the design.', 
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
        longDescription: 'Led the front-end development for a major corporate website redesign. Implemented a responsive, component-based architecture with React, resulting in a 30% increase in user engagement and a 50% faster page load time. Collaborated with UX/UI designers to ensure a seamless and intuitive user journey.',
        repoUrl: 'https://github.com',
        liveUrl: '#'
    },
    { 
        id: 5,
        title: 'E-commerce Platform', 
        description: 'Developed a full-stack e-commerce solution with features like product catalog, shopping cart, and secure checkout.', 
        image: 'https://images.unsplash.com/photo-1522204521860-31da862cb5d8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
        longDescription: 'Built a feature-rich e-commerce platform from the ground up using the MERN stack. Integrated Stripe for secure payment processing and implemented a custom admin dashboard for managing products, orders, and customers. The platform is designed to be scalable and handle high traffic.',
        repoUrl: 'https://github.com',
        liveUrl: '#'
    }
];

export const initialStats = [
    { value: '2+', label: 'Years Experience' },
    { value: '15+', label: 'Completed Projects' },
    { value: '100%', label: 'Client Satisfaction' },
];

export const initialAboutMe = {
    p1: 'Experienced Angular Developer with over 2+ years of hands-on expertise in building dynamic, scalable web applications using the Angular framework. Adept at leveraging agile methodologies to deliver robust solutions and high-level overviews that drive business value.',
    p2: 'Proficient in both MEAN (MongoDB, Express.js, Angular, Node.js) and MERN (MongoDB, Express.js, React, Node.js) stacks, enabling seamless full-stack development and end-to-end project execution. Committed to continuous improvement, clean code principles, and delivering intuitive user experiences aligned with modern UI/UX standards.',
    profileImage: 'assets/img/profile.jpeg'
};

export const initialTestimonials: Testimonial[] = [
    { id: 1, name: 'John Doe', title: 'Project Manager, Acertus', quote: '"Rahul demonstrates an excellent understanding of user needs and all of his development work is creative and elegant in its simplicity. He responds well to feedback. A great developer to have on the team."', image: 'https://i.pravatar.cc/150?img=11' },
    { id: 2, name: 'Jane Smith', title: 'Product Owner, Toqqer', quote: '"Working with Rahul was a pleasure. His commitment to clean code and delivering intuitive user experiences is evident in the final product. Highly recommended for any web development project."', image: 'https://i.pravatar.cc/150?img=5' },
];

export const initialNewsArticles: NewsArticle[] = [
    { id: 1, title: 'The Rise of Server-Side Rendering in React', image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600' },
    { id: 2, title: 'Angular vs. React: A 2024 Comparison', image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600' },
    { id: 3, title: 'Mastering State Management in Modern Web Apps', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600' },
];

export const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/m-neelesh-rahul-0b759b161' },
    { label: 'Email', href: 'mailto:mekalaneeleshrahul@gmail.com' },
    { label: 'Resume', href: 'assets/resume/MekalaNeeleshRahulResume.pdf' },
];
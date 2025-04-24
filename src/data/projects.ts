import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Grofia - Grocery Ordering and Delivery Website',
    description: 'Grofilla is a full-stack grocery delivery platform with real-time order tracking, AI chatbot assistance, and smart product recommendations. It empowers both customers and shopkeepers with seamless grocery shopping and management.',
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: [ 'Spring Boot', 'React', 'MySQL','AWS'],
    demoLink: 'https://grofilla.vercel.app',
    githubLink: 'https://github.com/tejjhode/Grofilla',
  },
  {
    id: 2,
    title: 'RoomHunt - Room Rental Platform for Students ',
    description: 'RooHunt is a student-focused room rental platform designed to simplify the process of finding affordable and reliable accommodation. It offers smart filters, verified listings, and a user-friendly interface tailored specifically for students seeking hostels, PGs, or shared flats near their institutions.',
    image: 'https://res.cloudinary.com/dji3kx0ts/image/upload/v1745517154/Screenshot_2025-04-24_at_11.21.40_PM_qrvdnx.png',
    tags: ['React', 'MongoDB', 'Tailwind','Node.js'],
    demoLink: 'https://roomaroo-com.vercel.app/',
    githubLink: 'https://github.com/tejjhode/Roomaroo.com',
  },
  {
    id: 3,
    title: 'Krishi360: AI-Powered Crop Disease Detection ',
    description: 'Krishi360 is an AI-driven platform that helps farmers detect plant and crop diseases using images and provides instant, accurate treatment suggestions. It empowers users with early diagnosis and actionable remedies to protect crops and boost yield.',
    image: 'https://cipotato.org/wp-content/uploads/2020/03/Phone-App-2-PUT.jpg',
    tags: [ 'React', 'Node.js', 'MongoDB','Machine Learning'],
    demoLink: 'https://crop-disease-prediction.vercel.app/',
    githubLink: 'https://github.com/tejjhode/Crop_Disease_Prediction',
  },
  {
    id: 4,
    title: 'Yoga Pose Detection',
    description: 'Yoga Pose Detection is a computer vision-based system that detects and evaluates yoga poses in real time. It helps users improve posture accuracy and form during yoga sessions by providing instant feedback using pose estimation models.',
    image: 'https://quickpose.ai/wp-content/uploads/elementor/thumbs/Yoga-Pose-Estimation-qg4o60kjwrq39cjqyge7999dyp4j0xhwl33d6f3i8g.png',
    tags: ['React', 'Machine Learning', 'Tailwind'],
    demoLink: 'https://demo-tasks.example.com',
    githubLink: 'https://github.com/tejjhode/Yoga_Pose_Detection',
  }
];
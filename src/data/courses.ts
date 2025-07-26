export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: number;
  image: string;
  rating: number;
  students: number;
  topics: string[];
}

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Arduino Programming Fundamentals',
    description: 'Learn the basics of Arduino programming and electronics prototyping',
    instructor: 'Dr. Rajesh Kumar',
    duration: '4 weeks',
    level: 'Beginner',
    price: 2999,
    image: '/placeholder.svg',
    rating: 4.8,
    students: 1250,
    topics: ['Arduino IDE', 'C++ Basics', 'Digital I/O', 'Analog Sensors']
  },
  {
    id: '2',
    title: 'Raspberry Pi IoT Projects',
    description: 'Build amazing IoT projects using Raspberry Pi and Python',
    instructor: 'Priya Sharma',
    duration: '6 weeks',
    level: 'Intermediate',
    price: 4499,
    image: '/placeholder.svg',
    rating: 4.9,
    students: 890,
    topics: ['Python Programming', 'GPIO Control', 'IoT Protocols', 'Web Dashboard']
  },
  {
    id: '3',
    title: 'PCB Design Mastery',
    description: 'Master PCB design from schematic to manufacturing',
    instructor: 'Suresh Patel',
    duration: '8 weeks',
    level: 'Advanced',
    price: 6999,
    image: '/placeholder.svg',
    rating: 4.7,
    students: 456,
    topics: ['KiCad', 'Schematic Design', 'Layout Design', 'Manufacturing']
  },
  {
    id: '4',
    title: 'ESP32 WiFi & Bluetooth',
    description: 'Explore wireless communication with ESP32 microcontroller',
    instructor: 'Ankit Singh',
    duration: '5 weeks',
    level: 'Intermediate',
    price: 3799,
    image: '/placeholder.svg',
    rating: 4.6,
    students: 672,
    topics: ['WiFi Programming', 'Bluetooth LE', 'Web Server', 'Mobile App Integration']
  },
  {
    id: '5',
    title: 'Robotics with Arduino',
    description: 'Build and program robots using Arduino and sensors',
    instructor: 'Meera Reddy',
    duration: '10 weeks',
    level: 'Beginner',
    price: 5999,
    image: '/placeholder.svg',
    rating: 4.8,
    students: 934,
    topics: ['Motor Control', 'Sensor Integration', 'Navigation', 'Remote Control']
  },
  {
    id: '6',
    title: 'Advanced Embedded Systems',
    description: 'Deep dive into embedded systems programming and architecture',
    instructor: 'Dr. Vikram Gupta',
    duration: '12 weeks',
    level: 'Advanced',
    price: 8999,
    image: '/placeholder.svg',
    rating: 4.9,
    students: 234,
    topics: ['RTOS', 'Memory Management', 'Device Drivers', 'System Optimization']
  }
];
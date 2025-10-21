'use client';
import Carousel from '../../components/Carousel';

const projects = [
  { title: 'Project One', image: '/assets/images/project1.jpg' },
  { title: 'Project Two', image: '/assets/images/project2.jpg' },
  { title: 'Project Three', image: '/assets/images/project3.jpg' },
  { title: 'Project Four', image: '/assets/images/project4.jpg' },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen px-4 py-20 max-w-[1200px] mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">Portfolio</h2>
      <Carousel items={projects} />
    </div>
  );
}

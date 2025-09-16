'use client';

import { motion } from 'framer-motion';
import Countdown from './Countdown';

export default function Timeline() {
  const events = [
    { title: 'First Met', date: 'July 12, 2021', img: '/first.jpg', text: 'The day we met ❤️' },
    { title: 'First Trip', date: 'Oct 18, 2021', img: '/trip.jpg', text: 'Our first adventure 🌊' },
    { title: 'Anniversary', date: 'Feb 14, 2024', img: '/anni.jpg', text: 'Happy Anniversary 💕' },
  ];
  
  return (
    <div className='bg-pink-50 min-h-screen py-10 relative'>
      <audio src='/yoursong.mp3' autoPlay loop hidden />
      {/* floating hearts */}
      <div className='heart' style={{left:'10%'}}></div>
      <div className='heart' style={{left:'30%'}}></div>
      <div className='heart' style={{left:'50%'}}></div>
      <div className='heart' style={{left:'70%'}}></div>
      <h1 className='text-4xl font-bold text-center mb-10'>Our Story</h1>
      <div className='max-w-xl mx-auto space-y-8'>
        {events.map((e, i) => (
          <motion.div key={i} className='bg-white rounded-2xl shadow p-4' initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}}>
            <img src={e.img} alt={e.title} className='w-full rounded-xl mb-4'/>
            <h2 className='text-2xl font-semibold'>{e.title}</h2>
            <p className='text-gray-500 text-sm'>{e.date}</p>
            <p className='mt-2'>{e.text}</p>
          </motion.div>
        ))}
      </div>
      <Countdown />
      <button className='mt-6 mx-auto block px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600' onClick={() => alert('I love you more every day ❤️')}>Click for a surprise</button>
      <p className='text-center mt-12 text-xl'>Happy Anniversary ❤️</p>
    </div>
  );
}

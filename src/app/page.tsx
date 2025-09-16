"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import CustomCountdown from '../components/Countdown';
import LockScreen from '../components/LockScreen';
import { FaPlay, FaPause, FaGift } from 'react-icons/fa';
import { IoMdHeart } from 'react-icons/io';
import Slider from 'react-slick';

// Import CSS for react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Types
interface Milestone {
  date: string;
  title: string;
  description: string;
  image?: string;
}

interface LoveLetter {
  date: string;
  title: string;
  content: string;
  from: string;
}

export default function AnniversaryWebsite() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const [surpriseClickCount, setSurpriseClickCount] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);



  // Placeholder data - replace with your own
  const milestones: Milestone[] = [
    {
      date: '2021-01-19',
      title: 'First Meeting',
      description: 'The day our eyes first met and the world felt different',
      image: '/simran/IMG-20250916-WA0018.jpg'
    },
    {
      date: '2021-01-19',
      title: 'First Date',
      description: 'That magical Valentine\'s Day dinner where time stood still',
      image: '/simran/IMG-20250916-WA0005.jpg'
    },
    {
      date: '2020-09-17',
      title: 'First I Love You',
      description: 'Three little words that changed everything',
      image: '/simran/IMG-20250916-WA0006.jpg'
    },
    {
      date: '2024-04-09',
      title: 'Moving In Together',
      description: 'Breaking my leg and making memories in your home', 
      image: '/simran/IMG-20250916-WA0015.jpg'
    },
    {
      date: '2025-08-16',
      title: 'Our First Trip',
      description: 'Adventures at Qutab Minar, the city of love',
      image: '/simran/IMG-20250916-WA0008.jpg'
    },
    {
      date: '2023-12-31',
      title: 'New Year\'s Promise',
      description: 'Starting the new year with promises of forever',
      image: '/simran/IMG-20250916-WA0009.jpg'
    }
  ];

  const loveLetters: LoveLetter[] = [
    {
      date: '2022-03-01',
      title: 'To My Sunshine',
      content: 'Every morning I wake up grateful for you in my life. Your smile brightens my darkest days and your laugh is my favorite melody. I love how you make ordinary moments extraordinary just by being there.',
      from: 'Your Forever Love'
    },
    {
      date: '2022-07-15',
      title: 'My Heart\'s Home',
      content: 'They say home is where the heart is, and my heart is wherever you are. You\'ve shown me what unconditional love feels like, and I promise to love you with the same intensity every single day.',
      from: 'Your Soulmate'
    },
    {
      date: '2022-11-23',
      title: 'Thankful for You',
      content: 'On this day of gratitude, I want you to know that you are my greatest blessing. Thank you for loving me exactly as I am, for supporting my dreams, and for building this beautiful life with me.',
      from: 'Your Grateful Heart'
    },
    {
      date: '2023-02-14',
      title: 'Valentine\'s Promise',
      content: 'Another Valentine\'s Day, another year of falling deeper in love with you. I promise to keep choosing you, every single day, in every single way. You are my always and forever.',
      from: 'Your Valentine'
    },
    {
      date: '2023-09-10',
      title: 'Growing Together',
      content: 'We\'ve grown so much together this year. Through every challenge and every joy, we\'ve become stronger as a team. I\'m excited for all the adventures still waiting for us.',
      from: 'Your Partner in Everything'
    }
  ];

  const galleryImages = [
    '/simran/IMG-20250916-WA0003.jpg', '/simran/IMG-20250916-WA0005.jpg', '/simran/IMG-20250916-WA0006.jpg',
    '/simran/IMG-20250916-WA0007.jpg', '/simran/IMG-20250916-WA0008.jpg', '/simran/IMG-20250916-WA0009.jpg',
    '/simran/IMG-20250916-WA0010.jpg', '/simran/IMG-20250916-WA0011.jpg', '/simran/IMG-20250916-WA0012.jpg',
    '/simran/IMG-20250916-WA0013.jpg', '/simran/IMG-20250916-WA0014.jpg', '/simran/IMG-20250916-WA0015.jpg',
    '/simran/IMG-20250916-WA0016.jpg', '/simran/IMG-20250916-WA0017.jpg', '/simran/IMG-20250916-WA0018.jpg',
    '/simran/IMG-20250916-WA0019.jpg'
  ];



  // Handle music toggle
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log('Audio play failed:', e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle surprise reveal
  const handleSurpriseClick = () => {
    setSurpriseClickCount(prev => prev + 1);
    if (surpriseClickCount >= 2) {
      setShowSurprise(true);
    }
  };





  if (!isUnlocked) {
    return <LockScreen onUnlock={() => setIsUnlocked(true)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 relative overflow-x-hidden">
      {/* Glowing Hearts Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <IoMdHeart className="glowing-heart text-2xl" />
        <IoMdHeart className="glowing-heart text-3xl" />
        <IoMdHeart className="glowing-heart text-xl" />
        <IoMdHeart className="glowing-heart text-2xl" />
        <IoMdHeart className="glowing-heart text-xl" />
        <IoMdHeart className="glowing-heart text-3xl" />
        <IoMdHeart className="glowing-heart text-lg" />
        <IoMdHeart className="glowing-heart text-2xl" />
        <IoMdHeart className="glowing-heart text-xl" />
        <IoMdHeart className="glowing-heart text-3xl" />
        <IoMdHeart className="glowing-heart text-lg" />
        <IoMdHeart className="glowing-heart text-2xl" />
        <IoMdHeart className="glowing-heart text-xl" />
        <IoMdHeart className="glowing-heart text-lg" />
        <IoMdHeart className="glowing-heart text-2xl" />
        <IoMdHeart className="glowing-heart text-3xl" />
        <IoMdHeart className="glowing-heart text-xl" />
        <IoMdHeart className="glowing-heart text-lg" />
        <IoMdHeart className="glowing-heart text-2xl" />
        <IoMdHeart className="glowing-heart text-xl" />
      </div>


      {/* Background Music */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/placeholder-love-song.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Music Control Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-full shadow-lg transition-colors duration-300 music-button"
      >
        {isPlaying ? <FaPause className="text-xl" /> : <FaPlay className="text-xl ml-1" />}
      </motion.button>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="mb-8"
        >
          <IoMdHeart className="text-8xl md:text-9xl text-pink-500 floating-heart" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl font-bold text-pink-600 mb-6"
          style={{ fontFamily: 'Dancing Script, cursive' }}
        >
          Our Love Story
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg text-pink-700 mb-12 max-w-sm px-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          A journey of two hearts beating as one ❤️
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-colors duration-300"
        >
          Explore Our Journey 💕
        </motion.button>
      </motion.section>

      {/* Timeline Section */}
      <section id="timeline" className="relative z-10 py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-pink-600 mb-12" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Our Milestones 📸
          </h2>
          
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <TimelineItem key={index} milestone={milestone} index={index} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Love Letters Section */}
      <section className="relative z-10 py-12 px-4 bg-white/20 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-sm mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-pink-600 mb-12" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Love Letters 💌
          </h2>
          
          <Slider {...{
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: false,
            centerMode: true,
            centerPadding: '20px'
          }}>
            {loveLetters.map((letter, index) => (
              <div key={index} className="px-2">
                <LoveLetterCard letter={letter} index={index} />
              </div>
            ))}
          </Slider>
        </motion.div>
      </section>

      {/* Photo Gallery Section */}
      <section className="relative z-10 py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-sm mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-pink-600 mb-12" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Our Memories 📸
          </h2>
          
          <Slider {...{
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            fade: true
          }}>
            {galleryImages.map((image, index) => (
              <div key={index} className="focus:outline-none">
                <div className="polaroid-card mx-auto">
                  <div className="bg-white p-4 pb-16 shadow-2xl">
                    <div className="aspect-square mb-4 overflow-hidden border border-gray-200">
                      <Image 
                        src={image} 
                        alt={`Memory ${index + 1}`}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-700 font-medium" style={{ fontFamily: 'Dancing Script, cursive' }}>
                        Beautiful moment #{index + 1}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </section>

      {/* Countdown Section */}
      <section className="relative z-10 py-20 px-4 bg-white/30 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-pink-600 mb-8" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Counting to Forever ⏳
          </h2>
          <p className="text-xl text-pink-700 mb-12">Time until our special day</p>
          
          <CustomCountdown />
        </motion.div>
      </section>

      {/* Hidden Surprise Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSurpriseClick}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg mb-8"
          >
            <FaGift className="inline mr-2" />
            {surpriseClickCount === 0 && 'There&apos;s something special here...'}
            {surpriseClickCount === 1 && 'One more click... 🎁'}
            {surpriseClickCount === 2 && 'Click again for a surprise! ✨'}
          </motion.button>

          {showSurprise && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white/40 backdrop-blur-md rounded-3xl p-8 shadow-2xl"
            >
              <h3 className="text-3xl font-bold text-pink-600 mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>
                Special Surprise! 🎉
              </h3>
              <p className="text-lg text-pink-700 mb-6">
                I&apos;ve created something extra special just for you...
              </p>
              <a
                href="https://drive.google.com/your-special-album-or-video"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
              >
                Open Your Surprise 💝
              </a>
              <p className="text-sm text-pink-600 mt-4">
                (Replace the link above with your Google Drive album/video)
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-pink-600 text-lg mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Made with 💕 for the love of my life
          </p>
          <p className="text-pink-500 text-sm">
            Every day with you is a new adventure
          </p>
        </motion.div>
      </footer>
    </div>
  );
}

// Timeline Item Component
const TimelineItem: React.FC<{ milestone: Milestone; index: number }> = ({ milestone, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotate: -5 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: index % 2 === 0 ? 2 : -2 } : { opacity: 0, y: 50, rotate: -5 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ rotate: 0, scale: 1.05 }}
      className="polaroid-card mx-auto mb-8 max-w-sm"
    >
      <div className="bg-white p-4 pb-16 shadow-2xl transform transition-all duration-300">
        <div className="aspect-square mb-4 overflow-hidden border border-gray-200">
          <Image 
            src={milestone.image || ''} 
            alt={milestone.title}
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-800 mb-1" style={{ fontFamily: 'Dancing Script, cursive' }}>
            {milestone.title}
          </h3>
          <p className="text-xs text-gray-500 mb-2">{milestone.date}</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            {milestone.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// Love Letter Card Component
const LoveLetterCard: React.FC<{ letter: LoveLetter; index: number }> = ({ letter, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotate: -3 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: index % 2 === 0 ? 1 : -1 } : { opacity: 0, y: 50, rotate: -3 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ rotate: 0, scale: 1.02 }}
      className="polaroid-card max-w-xs mx-auto"
    >
      <div className="bg-white p-4 pb-12 shadow-2xl">
        <div className="aspect-square mb-4 overflow-hidden border border-gray-200">
          <Image 
            src={`/simran/IMG-20250916-WA${String(3 + (index % 16)).padStart(4, '0')}.jpg`} 
            alt={letter.title}
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-800 mb-2" style={{ fontFamily: 'Dancing Script, cursive' }}>
            {letter.title}
          </h3>
          <p className="text-xs text-gray-700 leading-relaxed mb-3">
            {letter.content.substring(0, 80)}...
          </p>
          <p className="text-xs text-gray-500 italic">
            - {letter.from}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
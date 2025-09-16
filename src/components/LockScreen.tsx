'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoMdHeart } from 'react-icons/io';

interface LockScreenProps {
  onUnlock: () => void;
}

export default function LockScreen({ onUnlock }: LockScreenProps) {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const password = 'simmu';
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Auto-focus input on mobile
    const timer = setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
        inputRef.current.click();
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toLowerCase() === password.toLowerCase()) {
      onUnlock();
    } else {
      setError(true);
      setInput('');
      setTimeout(() => setError(false), 2000);
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  return (
    <div className='min-h-screen relative flex items-center justify-center p-4'>
      <img 
        src='/simran/main.jpg' 
        alt='Background'
        className='absolute inset-0 w-full h-full object-cover'
      />
      <div className='absolute inset-0 bg-black/40'></div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: 50, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        className='bg-gradient-to-br from-white/80 via-pink-50/70 to-purple-50/70 backdrop-blur-2xl rounded-[3rem] p-12 shadow-[0_35px_60px_-15px_rgba(236,72,153,0.4)] border-2 border-pink-200/50 max-w-sm w-full text-center relative overflow-hidden z-10 transform hover:scale-105 transition-all duration-300'
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(252,231,243,0.8) 50%, rgba(243,232,255,0.8) 100%)',
          boxShadow: '0 35px 60px -15px rgba(236,72,153,0.4), inset 0 1px 0 rgba(255,255,255,0.6), 0 0 0 1px rgba(236,72,153,0.1)'
        }}
      >
        <div className='absolute -top-4 -right-4 w-8 h-8 bg-pink-400/30 rounded-full blur-sm'></div>
        <div className='absolute -bottom-6 -left-6 w-12 h-12 bg-purple-400/20 rounded-full blur-md'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-pink-100/10 to-transparent rounded-[3rem] opacity-50'></div>
        <div className='relative z-10'>
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1], 
            rotate: [0, 10, -10, 0],
            y: [0, -5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className='mb-8 relative'
        >
          <div className='absolute inset-0 bg-pink-400/30 blur-xl rounded-full transform scale-150'></div>
          <IoMdHeart className='text-9xl text-pink-500 mx-auto drop-shadow-2xl relative z-10' style={{
            filter: 'drop-shadow(0 0 20px rgba(236,72,153,0.6)) drop-shadow(0 0 40px rgba(236,72,153,0.3))'
          }} />
        </motion.div>
        
        <motion.h1 
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3' 
          style={{ fontFamily: 'Dancing Script, cursive' }}
        >
          Welcome My Love
        </motion.h1>
        <div className='w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full mb-6'></div>
        <p className='text-pink-800 mb-10 text-lg font-medium'>Enter your special nickname to unlock our story ❤️</p>
        
        <form onSubmit={handleSubmit} className='space-y-6'>
          <motion.input 
            ref={inputRef}
            type='text'
            inputMode='text'
            autoComplete='off'
            autoCapitalize='off'
            autoCorrect='off'
            spellCheck='false'
            className={`w-full px-6 py-4 bg-white/70 backdrop-blur-sm border-2 rounded-3xl text-center text-lg font-medium placeholder-pink-400 focus:outline-none focus:border-pink-500 focus:bg-white/80 focus:shadow-lg transition-all duration-300 ${
              error ? 'border-red-400 animate-pulse' : 'border-pink-300/50'
            }`}
            placeholder='Your nickname...'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => {
              // Ensure keyboard stays open on mobile
              if (inputRef.current) {
                inputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
            animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
            transition={{ duration: 0.5 }}
          />
          
          {error && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className='text-red-500 text-sm'
            >
              Try again, sweetheart ❤️
            </motion.p>
          )}
          
          <motion.button 
            type='submit'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='relative w-24 h-24 mx-auto bg-gradient-to-br from-pink-500 via-red-500 to-pink-600 text-white font-bold shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 rounded-full flex items-center justify-center'
          >
            <div className='flex flex-col items-center'>
              <IoMdHeart className='text-3xl mb-1' />
              <span className='text-xs font-semibold'>UNLOCK</span>
            </div>
          </motion.button>
        </form>
        </div>
      </motion.div>
    </div>
  );
}
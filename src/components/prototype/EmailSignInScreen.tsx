import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';
import {auth} from '../../firebase.ts';
import{signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import type firebase from 'firebase/compat/app';  

interface EmailSignInScreenProps {
  onNext: () => void;
  darkMode: boolean;
}

export function EmailSignInScreen({ onNext, darkMode }: EmailSignInScreenProps) {
  const [email, setEmail] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const[password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleAuth = async () =>{
    setError(''); 
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    try{
      if (isRegistering){
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("Account Created!");
      }
      else{
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Signed in!");
      }
      setEmail("");
    setPassword("");
    onNext();
    }
    catch (error: any){
        if (error.code === 'auth/invalid-credential') {
        setError('Invalid email or password.');
      } else if (error.code === 'auth/email-already-in-use') {
        setError('This email is already registered.');
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
      className={`h-full flex flex-col p-8 ${darkMode ? 'bg-[#121212]' : 'bg-white'}`}
    >
      {/* Progress */}
      <div className="flex gap-2 mb-8">
        <div className={`flex-1 h-1.5 rounded-full ${darkMode ? 'bg-[#F5C542]' : 'bg-yellow-400'}`}></div>
        <div className={`flex-1 h-1.5 rounded-full ${darkMode ? 'bg-[#2A2A2D]' : 'bg-gray-200'}`}></div>
        <div className={`flex-1 h-1.5 rounded-full ${darkMode ? 'bg-[#2A2A2D]' : 'bg-gray-200'}`}></div>
        <div className={`flex-1 h-1.5 rounded-full ${darkMode ? 'bg-[#2A2A2D]' : 'bg-gray-200'}`}></div>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full mx-auto mb-6 flex items-center justify-center">
            <Mail className="w-10 h-10 text-white" strokeWidth={2.5} />
          </div>
          <h2 className={`text-3xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {isRegistering? "Welcome!": "Welcome Back!"}
          </h2>
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            {isRegistering? "Create an account to find your fesitival crew": "Sign in to find your festival crew"}
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <div>
            <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-700'}`}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className={`w-full px-6 py-4 rounded-full border-2 focus:outline-none transition-colors ${
                darkMode 
                  ? 'bg-[#1C1C1E] border-[#2C2C30] focus:border-[#F5C542] text-[#F2F2F2] placeholder-[#7A7A80]'
                  : 'bg-white border-gray-200 focus:border-yellow-400 text-gray-900 placeholder-gray-400'
              }`}
            />
          </div>

          <div>
            <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-700'}`}>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              onChange = {(e) => setPassword(e.target.value)}
              className={`w-full px-6 py-4 rounded-full border-2 focus:outline-none transition-colors ${
                darkMode 
                  ? 'bg-[#1C1C1E] border-[#2C2C30] focus:border-[#F5C542] text-[#F2F2F2] placeholder-[#7A7A80]'
                  : 'bg-white border-gray-200 focus:border-yellow-400 text-gray-900 placeholder-gray-400'
              }`}
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="space-y-3"
      >
        {error && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm text-center font-medium mb-4"
            >
              {error}
            </motion.p>
          )}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleAuth}
          className={`w-full font-bold py-5 rounded-full text-lg shadow-lg transition-all ${
            email
              ? darkMode
                ? 'bg-[#F5C542] hover:bg-[#FFD76A] text-[#121212]'
                : 'bg-yellow-400 hover:bg-yellow-500 text-gray-900'
              : darkMode
                ? 'bg-[#232326] text-[#7A7A80] cursor-not-allowed'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          {isRegistering? "Create Account": "Continue"}
        </motion.button>
        <p className={`text-center text-sm ${darkMode ? 'text-[#7A7A80]' : 'text-gray-500'}`}>
          {isRegistering? "Already have an account?": "New here?"}
          <button
            onClick={()=> {setIsRegistering(!isRegistering); setEmail(""); setPassword("")}}
            className={`font-semibold ${darkMode ? 'text-[#F5C542]' : 'text-yellow-600'}`}>
              {isRegistering? " Sign in": "  Create Account"}
           </button>
        </p>
      </motion.div>
    </motion.div>
  );
}
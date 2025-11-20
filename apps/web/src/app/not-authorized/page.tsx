'use client';

import { LockClosedIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotAuthorizedPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white px-4 overflow-hidden">
      <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-pink-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-2xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white backdrop-blur-md shadow-2xl rounded-xl p-8 max-w-md w-full text-center space-y-6 border border-gray-200"
        role="alert"
        aria-labelledby="unauthorized-title"
        aria-describedby="unauthorized-description"
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center relative group"
        >
          <LockClosedIcon className="h-16 w-16 text-red-500 drop-shadow" />
          <div className="absolute top-full mt-2 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
            Access restricted 🔒
          </div>
        </motion.div>

        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          id="unauthorized-title"
          className="text-5xl font-extrabold text-red-600"
        >
          403
        </motion.h1>

        <h2 className="text-2xl font-semibold text-gray-800">Not Authorized</h2>

        <p
          id="unauthorized-description"
          className="text-gray-600 text-sm leading-relaxed"
        >
          Sorry, you don&apos;t have permission to access this page.
          <br />
          Please contact an administrator if you think this is a mistake.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link
            href="/"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md text-sm font-medium shadow-md hover:bg-blue-700 transition"
          >
            ⬅ Go Back Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

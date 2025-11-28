'use client';

import { Lock, Home, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotAuthorizedPage() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-rose-50 overflow-hidden">
      {/* Subtle Nepal-inspired background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Floating Lock Icon with Nepal Flag Colors */}
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block mb-10"
          >
            <div className="relative">
              {/* Blue outer glow (Nepal flag border) */}
              <div className="absolute inset-0 bg-blue-700 rounded-full blur-2xl opacity-50 scale-110" />
              
              {/* Crimson lock background */}
              <div className="relative p-8 bg-gradient-to-br from-red-600 to-red-700 rounded-3xl shadow-2xl">
                <Lock className="h-20 w-20 text-white drop-shadow-lg" />
              </div>
            </div>
          </motion.div>

          {/* 403 Heading */}
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
            className="text-9xl font-black bg-gradient-to-r from-blue-700 via-red-600 to-blue-700 bg-clip-text text-transparent"
          >
            403
          </motion.h1>

          {/* Main Message */}
          <div className="mt-8 max-w-md mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Access Restricted
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Sorry, you don't have permission to access this page.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              If you believe this is an error, please contact support.
            </p>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium px-8 py-6 text-lg shadow-lg"
            >
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-medium px-8 py-6 text-lg transition-all"
            >
              <Link href="/support">
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Support
              </Link>
            </Button>
          </motion.div>

          {/* Footer */}
          <div className="mt-16 text-center">
            <p className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-red-600 bg-clip-text text-transparent">
              MessengerNepal
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Secure • Fast • Proudly Nepali
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { contactInfo } from '@/lib/data';

export function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${contactInfo.phoneRaw}?text=Hello%20PPR%20Tax%20Consultancy,%20I%20would%20like%20to%20get%20a%20consultation.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-green-500/30"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <MessageCircle className="relative h-7 w-7 text-white" fill="white" />
    </motion.a>
  );
}

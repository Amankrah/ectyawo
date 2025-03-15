"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StoryStepProps {
  index?: number;
  activeIndex?: number;
  className?: string;
  type?: "default" | "quote" | "highlight" | "important";
  onInView?: () => void;
  children: React.ReactNode;
}

export const StoryStep: React.FC<StoryStepProps> = ({
  index = 0,
  activeIndex = 0,
  className = "",
  type = "default",
  onInView,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isActive = index <= activeIndex;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          if (onInView) onInView();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [onInView, isVisible]);

  // Different styling based on the type of content
  const containerStyles = {
    default: "bg-background pl-10 md:pl-6",
    quote: "bg-muted/10 border-l-4 border-primary/50 p-6 rounded-lg pl-10 md:pl-6",
    highlight: "border-l-4 border-primary pl-10 md:pl-6 py-2",
    important: "bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-6 pl-10 md:pl-6",
  };

  // Different animation variants based on the type
  const variants = {
    hidden: { 
      opacity: 0,
      y: 20,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    }),
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      variants={variants}
      custom={index}
      className={cn(
        "my-8 transition-all duration-500 relative",
        containerStyles[type],
        isActive ? "opacity-100" : "opacity-30",
        className
      )}
    >
      {/* Timeline marker dot */}
      <div className="absolute left-0 md:left-[-8px] top-3 w-4 h-4 rounded-full bg-primary/30 border-2 border-background z-10"></div>
      {children}
    </motion.div>
  );
};

export const StoryHighlight: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={cn("text-xl font-medium", className)}
    >
      {children}
    </motion.div>
  );
}; 
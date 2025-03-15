"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Animated text that reveals itself letter by letter
export const TypewriterText: React.FC<{
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}> = ({ text, className, speed = 40, delay = 0, onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;
    setDisplayedText("");
    
    const startTyping = () => {
      if (currentIndex <= text.length) {
        timeout = setTimeout(() => {
          setDisplayedText(text.substring(0, currentIndex));
          currentIndex++;
          
          if (currentIndex <= text.length) {
            startTyping();
          } else {
            setIsComplete(true);
            if (onComplete) onComplete();
          }
        }, speed);
      }
    };
    
    const delayTimeout = setTimeout(() => {
      startTyping();
    }, delay);
    
    return () => {
      clearTimeout(timeout);
      clearTimeout(delayTimeout);
    };
  }, [text, speed, delay, onComplete]);
  
  return (
    <span className={className}>
      {displayedText}
      {!isComplete && (
        <span className="inline-block w-2 h-4 ml-0.5 bg-primary/80 animate-pulse" />
      )}
    </span>
  );
};

// Animated gradient background
export const AnimatedBackground: React.FC<{
  colors?: string[];
  className?: string;
  children?: React.ReactNode;
}> = ({ 
  colors = ["from-primary/5", "via-primary/10", "to-primary/5"], 
  className,
  children 
}) => {
  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      <motion.div
        className={cn(
          "absolute inset-0 bg-gradient-to-r",
          ...colors
        )}
        animate={{
          backgroundPosition: ["0% center", "100% center"],
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

// Reveal text with an animation
export const RevealText: React.FC<{
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
}> = ({ children, direction = "up", delay = 0, className }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
      x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Focus spotlight effect
export const Spotlight: React.FC<{
  active?: boolean;
  children: React.ReactNode;
  className?: string;
}> = ({ active = true, children, className }) => {
  return (
    <div className={cn("relative transition-all duration-500", className)}>
      {active && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 bg-radial-gradient from-primary/5 to-transparent -z-10"
        />
      )}
      <div 
        className={cn(
          "transition-all duration-500",
          active ? "scale-105 contrast-125" : "contrast-75 opacity-70"
        )}
      >
        {children}
      </div>
    </div>
  );
};

// Parallax scroll effect
export const ParallaxContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  speed?: number;
}> = ({ children, className, speed = 0.5 }) => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div 
      className={cn("relative overflow-hidden", className)}
      style={{
        transform: `translateY(${scrollY * speed}px)`
      }}
    >
      {children}
    </div>
  );
}; 
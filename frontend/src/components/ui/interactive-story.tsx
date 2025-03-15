"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface InteractiveStoryProps {
  title?: string;
  className?: string;
  children: React.ReactNode;
  showControls?: boolean;
  autoProgress?: boolean;
  autoProgressDelay?: number;
  onComplete?: () => void;
}

// Define the props that StoryStep expects, so we can inject them
interface StoryStepChildProps {
  index: number;
  activeIndex: number;
  onInView?: () => void;
}

export function InteractiveStory({
  title,
  className,
  children,
  showControls = true,
  autoProgress = false,
  autoProgressDelay = 5000,
  onComplete,
}: InteractiveStoryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const childrenArray = React.Children.toArray(children);
  const storyContainerRef = useRef<HTMLDivElement>(null);
  
  // Count how many steps we have in the story
  const totalSteps = childrenArray.length;
  
  // Progress to the next step
  const nextStep = () => {
    if (activeIndex < totalSteps - 1) {
      setActiveIndex(prev => prev + 1);
      // Scroll to the newly activated step
      const nextElement = storyContainerRef.current?.children[activeIndex + 1];
      if (nextElement) {
        nextElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else if (!isDone) {
      setIsDone(true);
      if (onComplete) onComplete();
    }
  };
  
  // Go back to the previous step
  const prevStep = () => {
    if (activeIndex > 0) {
      setActiveIndex(prev => prev - 1);
      // Scroll to the newly activated step
      const prevElement = storyContainerRef.current?.children[activeIndex - 1];
      if (prevElement) {
        prevElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };
  
  // Auto-progress functionality
  useEffect(() => {
    if (!autoProgress || isDone) return;
    
    const timer = setTimeout(() => {
      if (activeIndex < totalSteps - 1) {
        nextStep();
      }
    }, autoProgressDelay);
    
    return () => clearTimeout(timer);
  }, [autoProgress, activeIndex, totalSteps, autoProgressDelay, isDone]);
  
  // Enhance each child with the required props
  const enhancedChildren = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<StoryStepChildProps>, {
        index,
        activeIndex,
        onInView: () => {
          if (index > activeIndex) {
            setActiveIndex(index);
          }
        },
      });
    }
    return child;
  });
  
  // The visual progress indicators
  const ProgressDots = () => (
    <div className="flex justify-center space-x-2 mt-6 mb-8">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <button
          key={index}
          onClick={() => {
            setActiveIndex(index);
            const targetElement = storyContainerRef.current?.children[index];
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }}
          className={cn(
            "w-3 h-3 rounded-full transition-all duration-300",
            index <= activeIndex 
              ? "bg-primary" 
              : "bg-muted hover:bg-muted-foreground/50"
          )}
          aria-label={`Go to story step ${index + 1}`}
        />
      ))}
    </div>
  );
  
  return (
    <div className={cn("my-12", className)}>
      {title && (
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
      )}
      
      <ProgressDots />
      
      <div ref={storyContainerRef} className="space-y-6 relative">
        {/* Visual connection line between story elements */}
        <div className="absolute left-8 md:left-4 top-0 bottom-0 w-0.5 bg-primary/10 z-0 h-full" />
        
        {/* The story content */}
        {enhancedChildren}
      </div>
      
      {showControls && (
        <div className="flex justify-between mt-8">
          <Button 
            onClick={prevStep} 
            variant="outline" 
            disabled={activeIndex === 0}
            className="px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 mr-2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Previous
          </Button>
          
          <Button 
            onClick={nextStep} 
            disabled={isDone}
            className="px-4"
          >
            {isDone ? "Story Complete" : activeIndex === totalSteps - 1 ? "Finish" : "Next"}
            {!isDone && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 ml-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            )}
          </Button>
        </div>
      )}
    </div>
  );
} 
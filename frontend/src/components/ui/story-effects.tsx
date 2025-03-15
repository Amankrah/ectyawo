"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Dialogue bubble for conversations
export const DialogueBubble: React.FC<{
  speaker: string;
  side?: "left" | "right";
  children: React.ReactNode;
  className?: string;
}> = ({ speaker, side = "left", children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "relative max-w-[85%] rounded-2xl p-4 my-3",
        side === "left" 
          ? "bg-muted/20 border-muted border ml-0 mr-auto rounded-bl-none" 
          : "bg-primary/10 ml-auto mr-0 rounded-br-none",
        className
      )}
    >
      <div className="font-semibold text-sm mb-1 opacity-60">
        {speaker}
      </div>
      <div>{children}</div>
      <div 
        className={cn(
          "absolute w-4 h-4 bottom-0",
          side === "left" 
            ? "left-0 -translate-x-2 bg-muted/20 border-muted border border-t-0 border-r-0" 
            : "right-0 translate-x-2 bg-primary/10 border-t-0 border-l-0"
        )}
        style={{
          clipPath: side === "left" 
            ? "polygon(0 0, 100% 100%, 0 100%)" 
            : "polygon(100% 0, 100% 100%, 0 100%)"
        }}
      />
    </motion.div>
  );
};

// Emotional indicator (represents emotion in the story)
export const EmotionIndicator: React.FC<{
  emotion: "surprise" | "frustration" | "inspiration" | "determination" | "reflection";
  intensity?: number;
  className?: string;
}> = ({ emotion, intensity = 1, className }) => {
  const emotionColors = {
    surprise: "bg-yellow-500",
    frustration: "bg-red-500",
    inspiration: "bg-blue-500",
    determination: "bg-purple-500",
    reflection: "bg-green-500"
  };

  const emotionIcons = {
    surprise: "⚡",
    frustration: "😤",
    inspiration: "💡",
    determination: "🔥",
    reflection: "🤔"
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: 1, 
        scale: [0.5, 1.2, 1],
      }}
      transition={{ 
        duration: 0.5,
        times: [0, 0.6, 1]
      }}
      className={cn(
        "inline-flex items-center justify-center rounded-full w-8 h-8 text-white mx-2",
        emotionColors[emotion],
        className
      )}
      style={{ 
        opacity: 0.3 + (intensity * 0.7) 
      }}
    >
      {emotionIcons[emotion]}
    </motion.div>
  );
};

// Visual transition for scene changes
export const SceneTransition: React.FC<{
  title?: string;
  className?: string;
}> = ({ title, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={cn("relative my-8 py-3 text-center", className)}
    >
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent to-primary/10" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-transparent to-primary/10" />
      
      {title ? (
        <motion.span
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative inline-block px-4 py-1 text-sm font-medium bg-background/80 backdrop-blur-sm rounded-full"
        >
          {title}
        </motion.span>
      ) : (
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      )}
    </motion.div>
  );
};

// Thought bubble for inner monologue
export const ThoughtBubble: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn(
        "relative bg-background border border-dashed border-primary/30 p-4 my-4 rounded-lg italic text-muted-foreground",
        className
      )}
    >
      <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-background border border-dashed border-primary/30" />
      <div className="absolute -top-4 -left-4 w-2 h-2 rounded-full bg-background border border-dashed border-primary/30" />
      {children}
    </motion.div>
  );
}; 
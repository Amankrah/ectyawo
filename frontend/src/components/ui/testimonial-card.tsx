"use client"

import * as React from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

interface TestimonialProps {
  quote: string
  author: string
  role: string
  organization: string
  initials?: string
  headshot?: string
  linkedinUrl?: string
}

export function TestimonialCard({ quote, author, role, organization, initials, headshot, linkedinUrl }: TestimonialProps) {
  const authorContent = (
    <div className="flex items-center gap-4 pt-4 border-t">
      {headshot ? (
        <Image
          src={headshot}
          alt={author}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full object-cover"
        />
      ) : (
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
          {initials}
        </div>
      )}
      <div>
        <div className="font-semibold">{author}</div>
        <div className="text-sm text-muted-foreground">
          {role}, {organization}
        </div>
      </div>
    </div>
  )

  return (
    <Card className="p-6 h-full flex flex-col">
      <div className="flex-1">
        <div className="mb-4">
          <QuoteIcon className="h-8 w-8 text-muted-foreground/50" />
        </div>
        <blockquote className="text-lg text-muted-foreground mb-4">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>
      {linkedinUrl ? (
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
          {authorContent}
        </a>
      ) : (
        authorContent
      )}
    </Card>
  )
} 
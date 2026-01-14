import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Coffee } from "lucide-react";

// LinkedIn icon component using Simple Icons SVG path
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-12 md:py-16">
        <div className="grid gap-12 md:gap-16">
          {/* Speaker booking CTA */}
          <div className="text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold">Ready to Transform Your Event?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Book me for keynotes, workshops, and training on food systems transformation
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Button asChild size="lg">
                <Link href="/speaking#booking">Book Me as a Speaker</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Navigation */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/speaking" className="hover:text-primary transition-colors">Speaking</Link></li>
                <li><Link href="/research" className="hover:text-primary transition-colors">Research</Link></li>
                <li><Link href="/insights" className="hover:text-primary transition-colors">Insights</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
                <li>
                  <Link
                    href="https://foodpulse.kit.com/0bacd8cebd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    Newsletter
                    <span className="text-xs">↗</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="https://foodpulse.kit.com/products/cup-of-tea"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    Buy Me a Tea
                    <span className="text-xs">↗</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider">Connect</h4>
              <div className="flex gap-4">
                <Link
                  href="https://www.linkedin.com/in/etornam-c-tsyawo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </Link>
                <Link
                  href="https://foodpulse.kit.com/0bacd8cebd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="Newsletter"
                >
                  <Mail className="h-5 w-5" />
                </Link>
                <Link
                  href="https://foodpulse.kit.com/products/cup-of-tea"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="Support with a cup of tea"
                >
                  <Coffee className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Etornam C. Tsyawo. All rights reserved.</p>
              <p className="text-center sm:text-right">
                Transforming Food Systems Through Research & Education
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 
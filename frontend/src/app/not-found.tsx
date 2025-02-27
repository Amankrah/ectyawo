import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="container max-w-3xl py-24 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold mb-6">Page Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      
      <Link href="/">
        <Button>
          Return to Home
        </Button>
      </Link>
    </div>
  );
} 
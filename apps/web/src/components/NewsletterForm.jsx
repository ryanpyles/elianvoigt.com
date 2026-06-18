import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient';

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Email is required');
      return;
    }

    setIsLoading(true);

    try {
      await pb.collection('newsletter_subscribers').create({
        email,
        firstName: firstName || undefined,
        subscribed: true,
      }, { $autoCancel: false });

      toast.success('Welcome to the archive');
      setEmail('');
      setFirstName('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      if (error.data?.email) {
        toast.error('This email is already subscribed');
      } else {
        toast.error('Failed to subscribe. Please try again');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
      <div className="space-y-2">
        <Label htmlFor="newsletter-email" className="text-sm font-medium">
          Email address
        </Label>
        <Input
          id="newsletter-email"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-input border-border text-foreground placeholder:text-muted-foreground"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="newsletter-name" className="text-sm font-medium">
          First name <span className="text-muted-foreground">(optional)</span>
        </Label>
        <Input
          id="newsletter-name"
          type="text"
          placeholder="Your name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="bg-input border-border text-foreground placeholder:text-muted-foreground"
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-accent text-accent-foreground hover:bg-accent/90 active:scale-[0.98] transition-all duration-200"
      >
        {isLoading ? 'Joining...' : 'Join the Reader List'}
      </Button>
    </form>
  );
}

export default NewsletterForm;
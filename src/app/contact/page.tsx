'use client';
import { useState } from 'react';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      });
      setSuccess(true);
    } catch {
      alert('Error sending message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Contact Me</h2>
      {success ? (
        <p className="text-green-500 font-semibold">Message sent successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
          <input name="name" required placeholder="Your Name" className="p-3 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary" />
          <input type="email" name="email" required placeholder="Your Email" className="p-3 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary" />
          <textarea name="message" required placeholder="Your Message" className="p-3 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary" rows={5}></textarea>
          <button type="submit" disabled={loading} className="px-6 py-3 bg-primary text-white rounded hover:bg-primary/90 transition">
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
}
    
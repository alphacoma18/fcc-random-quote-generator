"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
const API_URL = "https://api.quotable.io/random";
export function QuoteGenerator() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const generateNewQuote = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setQuote({ text: data.content, author: data.author });
  };
  useEffect(() => {
    generateNewQuote();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary to-primary-foreground px-4 py-12 md:py-24">
      <div className="bg-background p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center space-y-4" id="quote-box">
          <div className="text-2xl font-bold" id="text">{quote.text}</div>
          <div className="text-lg text-muted-foreground" id="author">{quote.author}</div>
          <div className="flex flex-col gap-2 md:flex-row md:justify-between">
            <Button onClick={generateNewQuote} id="new-quote">
              <RefreshCwIcon className="w-5 h-5 mr-2" />
              New Quote
            </Button>
            <a
              href={`https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`}
              target="_blank"
              rel="noopener noreferrer"
              id="tweet-quote"
              className="flex items-center gap-1 px-4 py-2 text-white bg-foreground rounded-md"
            >
              <TwitterIcon className="w-5 h-5" />
              Tweet
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function RefreshCwIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  );
}


function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

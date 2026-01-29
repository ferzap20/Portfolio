import { useState, useEffect } from 'react';
import { PortfolioContent } from '../types/content';

export function useContent() {
  const [content, setContent] = useState<PortfolioContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch('/content.json')
      .then((res) => res.json())
      .then((data) => {
        setContent(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { content, loading, error };
}

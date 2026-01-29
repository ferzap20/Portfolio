/**
 * CUSTOM HOOKS FOR DATA FETCHING
 *
 * This file contains all custom React hooks for fetching portfolio data from Supabase.
 * Each hook handles its own loading state, error handling, and data transformation.
 *
 * EDITING GUIDE:
 *  - Each hook follows the same pattern: useState for data/loading/error, useEffect for fetching
 *  - Modify fetch queries by changing the .from() table name and .select() fields
 *  - Add error logging in catch blocks for debugging
 *  - Hooks use dependency arrays to prevent infinite loops
 *
 * ERROR HANDLING:
 *  - Errors are logged to console but don't crash the app
 *  - Components should check for error states and display fallback UI
 *  - Supabase errors have descriptive messages in error.message
 *
 * CACHING:
 *  - Each hook refetches data on component mount
 *  - To implement caching, use React Query or SWR library
 *  - For now, hooks are simple and fresh on every component that uses them
 */

import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

/* ========== TYPE DEFINITIONS ========== */

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  year: number;
  role: string;
  tools: string[];
  blurb: string;
  hero_image_url: string;
  problem: string;
  approach: string[];
  outcome: string;
  gallery_urls: string[];
  process_steps: string[];
  order_index: number;
}

export interface Experiment {
  id: string;
  title: string;
  summary: string;
  external_link: string | null;
  order_index: number;
}

export interface ProcessArticle {
  id: string;
  category: 'Design Ops' | 'Management';
  title: string;
  description: string;
  overview: string;
  steps: string[];
  artifacts_links: string[];
  pdf_url: string | null;
  order_index: number;
}

export interface ResearchCase {
  id: string;
  title: string;
  context: string;
  method: string;
  key_insight: string;
  notes_link: string | null;
  order_index: number;
}

export interface GalleryItem {
  id: string;
  image_url: string;
  caption: string;
  alt_text: string;
  section: string;
  order_index: number;
}

export interface PortfolioMetadata {
  id: string;
  site_title: string;
  tagline: string;
  email: string;
  location: string;
  country: string;
  resume_url: string;
}

/* ========== CASE STUDIES HOOK ========== */
/**
 * Fetches all active case studies from database
 * Returns sorted by order_index (ascending)
 *
 * USAGE:
 *  const { data, loading, error } = useCaseStudies();
 *  if (loading) return <div>Loading...</div>;
 *  if (error) return <div>Error: {error.message}</div>;
 *  return <div>{data.map(case => <Card key={case.id} case={case} />)}</div>;
 *
 * TO MODIFY:
 *  - Change .select() to fetch fewer fields for performance
 *  - Add .filter() to exclude certain cases
 *  - Change .order() to sort differently
 */
export function useCaseStudies() {
  const [data, setData] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: caseStudies, error: fetchError } = await supabase
          .from('case_studies')
          .select('*')
          .eq('is_active', true)
          .order('order_index', { ascending: true });

        if (fetchError) throw fetchError;

        setData(caseStudies as CaseStudy[]);
        setError(null);
      } catch (err) {
        console.error('Error fetching case studies:', err);
        setError(err instanceof Error ? err : new Error(String(err)));
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}

/* ========== SINGLE CASE STUDY HOOK ========== */
/**
 * Fetches a single case study by slug
 * Used on case study detail pages
 *
 * USAGE:
 *  const { data, loading, error } = useCaseStudy('skyreal-vr-interaction-design');
 */
export function useCaseStudy(slug: string) {
  const [data, setData] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: caseStudy, error: fetchError } = await supabase
          .from('case_studies')
          .select('*')
          .eq('slug', slug)
          .eq('is_active', true)
          .maybeSingle();

        if (fetchError) throw fetchError;

        setData(caseStudy as CaseStudy);
        setError(null);
      } catch (err) {
        console.error(`Error fetching case study ${slug}:`, err);
        setError(err instanceof Error ? err : new Error(String(err)));
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  return { data, loading, error };
}

/* ========== EXPERIMENTS HOOK ========== */
/**
 * Fetches all IA experiments
 * Returns sorted by order_index
 *
 * USAGE:
 *  const { data: experiments, loading, error } = useExperiments();
 */
export function useExperiments() {
  const [data, setData] = useState<Experiment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: experiments, error: fetchError } = await supabase
          .from('ia_experiments')
          .select('*')
          .eq('is_active', true)
          .order('order_index', { ascending: true });

        if (fetchError) throw fetchError;

        setData(experiments as Experiment[]);
        setError(null);
      } catch (err) {
        console.error('Error fetching experiments:', err);
        setError(err instanceof Error ? err : new Error(String(err)));
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}

/* ========== PRODUCT PROCESSES HOOK ========== */
/**
 * Fetches product process articles by category
 * Categories: 'Design Ops' or 'Management'
 *
 * USAGE:
 *  const { data: designOps } = useProcesses('Design Ops');
 *  const { data: management } = useProcesses('Management');
 */
export function useProcesses(category: 'Design Ops' | 'Management') {
  const [data, setData] = useState<ProcessArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!category) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: processes, error: fetchError } = await supabase
          .from('product_processes')
          .select('*')
          .eq('category', category)
          .eq('is_active', true)
          .order('order_index', { ascending: true });

        if (fetchError) throw fetchError;

        setData(processes as ProcessArticle[]);
        setError(null);
      } catch (err) {
        console.error(`Error fetching processes for category ${category}:`, err);
        setError(err instanceof Error ? err : new Error(String(err)));
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return { data, loading, error };
}

/* ========== UX RESEARCH HOOK ========== */
/**
 * Fetches all UX research cases
 * Returns sorted by order_index
 *
 * USAGE:
 *  const { data: research, loading, error } = useResearch();
 */
export function useResearch() {
  const [data, setData] = useState<ResearchCase[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: research, error: fetchError } = await supabase
          .from('ux_research_cases')
          .select('*')
          .eq('is_active', true)
          .order('order_index', { ascending: true });

        if (fetchError) throw fetchError;

        setData(research as ResearchCase[]);
        setError(null);
      } catch (err) {
        console.error('Error fetching research cases:', err);
        setError(err instanceof Error ? err : new Error(String(err)));
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}

/* ========== GALLERY HOOK ========== */
/**
 * Fetches gallery items by section
 * Default section: 'Brand/Web'
 * Returns sorted by order_index
 *
 * USAGE:
 *  const { data: gallery } = useGallery('Brand/Web');
 */
export function useGallery(section: string = 'Brand/Web') {
  const [data, setData] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: gallery, error: fetchError } = await supabase
          .from('gallery_items')
          .select('*')
          .eq('section', section)
          .eq('is_active', true)
          .order('order_index', { ascending: true });

        if (fetchError) throw fetchError;

        setData(gallery as GalleryItem[]);
        setError(null);
      } catch (err) {
        console.error(`Error fetching gallery for section ${section}:`, err);
        setError(err instanceof Error ? err : new Error(String(err)));
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [section]);

  return { data, loading, error };
}

/* ========== PORTFOLIO METADATA HOOK ========== */
/**
 * Fetches portfolio metadata (site title, email, location, etc.)
 * Should be called once at app initialization
 * Results can be cached in context/state management
 *
 * USAGE:
 *  const { data: metadata } = usePortfolioMetadata();
 */
export function usePortfolioMetadata() {
  const [data, setData] = useState<PortfolioMetadata | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: metadata, error: fetchError } = await supabase
          .from('portfolio_metadata')
          .select('*')
          .maybeSingle();

        if (fetchError) throw fetchError;

        setData(metadata as PortfolioMetadata);
        setError(null);
      } catch (err) {
        console.error('Error fetching portfolio metadata:', err);
        setError(err instanceof Error ? err : new Error(String(err)));
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}

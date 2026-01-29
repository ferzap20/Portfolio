/*
  # Create Portfolio Database Schema

  1. New Tables
    - `portfolio_metadata`: Site-wide settings (title, tagline, email, location, resume URL)
    - `case_studies`: Portfolio case studies with full project details
    - `ia_experiments`: Interactive design experiments and tests
    - `product_processes`: Design ops and product management process articles
    - `ux_research_cases`: User research case studies and methodologies
    - `gallery_items`: Brand/web design gallery images

  2. Security
    - Enable RLS on all tables
    - All data is publicly readable (portfolio showcase)
    - Only service role can modify data (via admin API)

  3. Indexes
    - Add indexes on order_index for fast sorting
    - Add category index on product_processes
*/

-- Portfolio metadata table
CREATE TABLE IF NOT EXISTS portfolio_metadata (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  site_title text NOT NULL DEFAULT 'Fernando Zapata',
  tagline text NOT NULL DEFAULT 'Product Designer / XR Interaction Designer',
  email text NOT NULL DEFAULT 'fernandozapata@protonmail.com',
  location text NOT NULL DEFAULT 'Les Lilas - 93260',
  country text NOT NULL DEFAULT 'France',
  resume_url text NOT NULL DEFAULT '/fernando_zapata_cv_-_eng.pdf',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Case studies table
CREATE TABLE IF NOT EXISTS case_studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  year integer NOT NULL,
  role text NOT NULL,
  tools jsonb DEFAULT '[]'::jsonb,
  blurb text NOT NULL,
  hero_image_url text NOT NULL,
  problem text NOT NULL,
  approach jsonb DEFAULT '[]'::jsonb,
  outcome text NOT NULL,
  gallery_urls jsonb DEFAULT '[]'::jsonb,
  process_steps jsonb DEFAULT '[]'::jsonb,
  order_index integer DEFAULT 999,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- IA experiments table
CREATE TABLE IF NOT EXISTS ia_experiments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  summary text NOT NULL,
  external_link text,
  order_index integer DEFAULT 999,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Product processes table (Design Ops and Management)
CREATE TABLE IF NOT EXISTS product_processes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category text NOT NULL CHECK (category IN ('Design Ops', 'Management')),
  title text NOT NULL,
  description text NOT NULL,
  overview text NOT NULL,
  steps jsonb DEFAULT '[]'::jsonb,
  artifacts_links jsonb DEFAULT '[]'::jsonb,
  pdf_url text,
  order_index integer DEFAULT 999,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- UX research cases table
CREATE TABLE IF NOT EXISTS ux_research_cases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  context text NOT NULL,
  method text NOT NULL,
  key_insight text NOT NULL,
  notes_link text,
  order_index integer DEFAULT 999,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Gallery items table
CREATE TABLE IF NOT EXISTS gallery_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url text NOT NULL,
  caption text NOT NULL,
  alt_text text NOT NULL,
  section text NOT NULL DEFAULT 'Brand/Web',
  order_index integer DEFAULT 999,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE portfolio_metadata ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE ia_experiments ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_processes ENABLE ROW LEVEL SECURITY;
ALTER TABLE ux_research_cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;

-- Create public read-only policies for all tables
CREATE POLICY "Portfolio metadata is publicly readable"
  ON portfolio_metadata FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Case studies are publicly readable"
  ON case_studies FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

CREATE POLICY "Experiments are publicly readable"
  ON ia_experiments FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

CREATE POLICY "Product processes are publicly readable"
  ON product_processes FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

CREATE POLICY "Research cases are publicly readable"
  ON ux_research_cases FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

CREATE POLICY "Gallery items are publicly readable"
  ON gallery_items FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- Create indexes for faster queries
CREATE INDEX idx_case_studies_order ON case_studies(order_index);
CREATE INDEX idx_ia_experiments_order ON ia_experiments(order_index);
CREATE INDEX idx_product_processes_category ON product_processes(category);
CREATE INDEX idx_product_processes_order ON product_processes(order_index);
CREATE INDEX idx_ux_research_order ON ux_research_cases(order_index);
CREATE INDEX idx_gallery_items_order ON gallery_items(order_index);

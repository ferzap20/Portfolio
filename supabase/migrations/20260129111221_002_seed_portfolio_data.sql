/*
  # Seed Portfolio Database with Example Data

  1. Sample Data
    - Portfolio metadata
    - 3 example case studies
    - 3 example experiments
    - 3 example product processes (Design Ops and Management)
    - 3 example research cases
    - 6 example gallery items

  Note: Replace image URLs and content with actual portfolio data after initial setup.
*/

-- Insert portfolio metadata
INSERT INTO portfolio_metadata (site_title, tagline, email, location, country, resume_url)
VALUES (
  'Fernando Zapata',
  'Product Designer / XR Interaction Designer',
  'fernandozapata@protonmail.com',
  'Les Lilas - 93260',
  'France',
  '/fernando_zapata_cv_-_eng.pdf'
)
ON CONFLICT DO NOTHING;

-- Insert sample case studies
INSERT INTO case_studies (slug, title, year, role, tools, blurb, hero_image_url, problem, approach, outcome, gallery_urls, process_steps, order_index, is_active)
VALUES 
(
  'skyreal-vr-interaction-design',
  'SkyReal VR: Core Interaction Design',
  2023,
  'UX/XR Designer',
  '["Figma", "Unity", "Unreal Engine"]'::jsonb,
  'Designed intuitive spatial interactions for enterprise VR platform',
  '/placeholder-case-1.jpg',
  'Enterprise VR users struggled with complex gesture controls and unintuitive navigation in 3D space',
  '[
    "User research and personas: 20+ stakeholder interviews to understand pain points",
    "Prototype 5 interaction paradigms: gesture, voice, menu-based, hand tracking, controller hybrid",
    "User testing with target users: iterate on preferred paradigm",
    "Design specifications: deliver detailed interaction flows and assets to engineering"
  ]'::jsonb,
  'Implemented gesture-first interaction model reducing learning curve by 40%, adopted by all new enterprise clients',
  '["https://via.placeholder.com/800x600", "https://via.placeholder.com/800x600"]'::jsonb,
  '["Research phase", "Ideation workshops", "Prototyping", "User testing", "Specifications"]'::jsonb,
  1,
  true
),
(
  'appia-finance-design-system',
  'APPIA: Finance App Design System',
  2021,
  'UI/UX Designer',
  '["Figma", "React", "Tailwind CSS"]'::jsonb,
  'Built comprehensive design system for fintech web application',
  '/placeholder-case-2.jpg',
  'Design inconsistencies across features and slow handoff between design and engineering teams',
  '[
    "Audit existing UI components and patterns across all features",
    "Define design tokens: colors, typography, spacing, shadows, corner radius",
    "Create comprehensive component library in Figma with variants",
    "Deliver Figma-to-code specs and token mappings for engineering team"
  ]'::jsonb,
  'Design system reduced component implementation time by 30% and improved visual consistency across all features',
  '["https://via.placeholder.com/800x600", "https://via.placeholder.com/800x600"]'::jsonb,
  '["Audit phase", "Token definition", "Component library", "Engineering handoff"]'::jsonb,
  2,
  true
),
(
  'competir-learning-platform-ux',
  'Competir: Learning Platform UX',
  2014,
  'UX Researcher',
  '["Figma", "Sketch", "Paper prototyping"]'::jsonb,
  'Optimized children learning platform through research-driven design',
  '/placeholder-case-3.jpg',
  'Learning platform had low engagement metrics and high user drop-off rates',
  '[
    "Conducted 15 user interviews with children and educators",
    "A/B tested 3 UI variations and gamification approaches",
    "Created user flows and wireframes based on research findings",
    "Iterated design based on testing feedback"
  ]'::jsonb,
  'Increased daily active users by 35% and reduced drop-off rate by 25% through improved UI and gamification',
  '["https://via.placeholder.com/800x600", "https://via.placeholder.com/800x600"]'::jsonb,
  '["User research", "A/B testing", "Wireframing", "Iteration"]'::jsonb,
  3,
  true
);

-- Insert sample experiments
INSERT INTO ia_experiments (title, summary, external_link, order_index, is_active)
VALUES
(
  'VR Hand Tracking Gesture Library',
  'Designed and tested 12 natural hand gestures for VR interaction without controllers',
  'https://example.com/vr-gestures',
  1,
  true
),
(
  'Spatial UI Prototyping in Unreal',
  'Prototyped 3D menu systems and spatial UI patterns for immersive environments',
  'https://example.com/spatial-ui',
  2,
  true
),
(
  'AR Object Placement UX Study',
  'Researched optimal interaction models for placing virtual objects in real environments',
  'https://example.com/ar-placement',
  3,
  true
);

-- Insert sample product processes
INSERT INTO product_processes (category, title, description, overview, steps, artifacts_links, pdf_url, order_index, is_active)
VALUES
(
  'Design Ops',
  'Component System Maintenance',
  'Quarterly process for auditing and updating shared component library',
  'Review component usage patterns, identify inconsistencies, define updates, communicate changes to team',
  '[
    "Audit all components across current projects for usage patterns",
    "Identify misalignment with design tokens and established patterns",
    "Create improvement proposals with before/after comparisons",
    "Present to design team for feedback and prioritization",
    "Update Figma library and documentation with change history"
  ]'::jsonb,
  '["https://example.com/component-audit", "https://example.com/component-specs"]'::jsonb,
  '/design-ops-components.pdf',
  1,
  true
),
(
  'Design Ops',
  'Design Critique Process',
  'Weekly structured critique sessions for design quality and consistency',
  'Rotate facilitators, present work, collect feedback, document decisions',
  '[
    "Prepare designs: 3-5 screens maximum per session for focused feedback",
    "Present context: problem statement, research findings, design rationale",
    "Facilitate structured feedback: strengths, concerns, questions format",
    "Document decisions and action items in shared repository",
    "Follow up next week with implementation status"
  ]'::jsonb,
  '["https://example.com/critique-template"]'::jsonb,
  NULL,
  2,
  true
),
(
  'Management',
  'Product Roadmap Planning',
  'Quarterly planning process for alignment on priorities and initiatives',
  'Gather input from stakeholders, define OKRs, create quarterly roadmap',
  '[
    "Conduct interviews with product, engineering, sales, customer success",
    "Synthesize insights into core themes and opportunities",
    "Define OKRs for quarter with associated design initiatives",
    "Create roadmap artifacts: timeline, resource allocation, dependencies",
    "Present and align with cross-functional leadership"
  ]'::jsonb,
  '["https://example.com/roadmap-template", "https://example.com/okr-framework"]'::jsonb,
  '/product-roadmap.pdf',
  1,
  true
),
(
  'Management',
  'Feature Success Metrics Definition',
  'Process for defining and tracking success metrics for launched features',
  'Identify KPIs, set baselines, establish measurement infrastructure',
  '[
    "Define feature success criteria before launch",
    "Identify 3-5 primary KPIs and secondary metrics",
    "Establish baseline measurements and targets",
    "Set up analytics tracking and dashboard",
    "Review results 4-6 weeks post-launch and iterate"
  ]'::jsonb,
  '["https://example.com/metrics-framework", "https://example.com/dashboard-template"]'::jsonb,
  NULL,
  2,
  true
);

-- Insert sample research cases
INSERT INTO ux_research_cases (title, context, method, key_insight, notes_link, order_index, is_active)
VALUES
(
  'VR Onboarding User Research',
  'Enterprise VR platform adoption struggled with steep learning curve',
  'User testing with 12 enterprise users, contextual interviews, task analysis',
  'Users needed guided tutorial path with progressive complexity, not instant free-form interaction',
  'https://example.com/vr-onboarding-notes',
  1,
  true
),
(
  'Mobile Banking Accessibility Study',
  'App had high abandonment rate among older demographic users',
  'Accessibility audit, moderated sessions with 8 users 50+, task-based testing',
  'Increased text sizes, clearer labels, simplified transaction flows improved completion by 65%',
  'https://example.com/banking-accessibility-notes',
  2,
  true
),
(
  'Gamification Impact Analysis',
  'Learning platform experimenting with motivational mechanics',
  'A/B testing with 5000 users, cohort analysis, engagement metrics tracking',
  'Leaderboards decreased intrinsic motivation in collaborative learning contexts vs. progress tracking',
  'https://example.com/gamification-notes',
  3,
  true
);

-- Insert sample gallery items
INSERT INTO gallery_items (image_url, caption, alt_text, section, order_index, is_active)
VALUES
(
  '/placeholder-gallery-1.jpg',
  'SkyReal VR spatial menu system design',
  'Three-dimensional menu interface floating in virtual space',
  'Brand/Web',
  1,
  true
),
(
  '/placeholder-gallery-2.jpg',
  'APPIA finance app interface exploration',
  'Mobile interface showing transaction history and balance display',
  'Brand/Web',
  2,
  true
),
(
  '/placeholder-gallery-3.jpg',
  'Design system component variations',
  'Grid of button, card, and input component states',
  'Brand/Web',
  3,
  true
),
(
  '/placeholder-gallery-4.jpg',
  'User research synthesis board',
  'Research findings organized in affinity diagram format',
  'Brand/Web',
  4,
  true
),
(
  '/placeholder-gallery-5.jpg',
  'VR interaction prototype in Unreal Engine',
  'First-person view of hand tracking gesture recognition',
  'Brand/Web',
  5,
  true
),
(
  '/placeholder-gallery-6.jpg',
  'Mobile app wireframe exploration',
  'Low-fidelity sketches of mobile onboarding flow',
  'Brand/Web',
  6,
  true
);

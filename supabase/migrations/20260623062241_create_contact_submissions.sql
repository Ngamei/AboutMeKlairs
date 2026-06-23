CREATE TABLE contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  full_name text NOT NULL,
  email text NOT NULL,
  company_project text,
  contact_reason text,
  message text,
  relevant_link text,
  preferred_contact text,
  timeline text,
  consent boolean DEFAULT false
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "allow_insert_anonymous" ON contact_submissions
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "allow_insert_authenticated" ON contact_submissions
  FOR INSERT TO authenticated WITH CHECK (true);

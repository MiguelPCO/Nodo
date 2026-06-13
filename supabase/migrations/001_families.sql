CREATE TABLE IF NOT EXISTS families (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name        text NOT NULL,
  created_by  uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at  timestamptz DEFAULT now()
);

ALTER TABLE families ENABLE ROW LEVEL SECURITY;

-- Crear familia (INSERT)
CREATE POLICY "family_insert" ON families FOR INSERT
  WITH CHECK (created_by = auth.uid());

-- NOTE: family_select policy added in 002_family_members.sql (depends on that table)

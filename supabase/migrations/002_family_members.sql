CREATE TABLE IF NOT EXISTS family_members (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  family_id   uuid NOT NULL REFERENCES families(id) ON DELETE CASCADE,
  user_id     uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role        text NOT NULL DEFAULT 'owner'
                   CHECK (role IN ('owner','editor','viewer')),
  joined_at   timestamptz DEFAULT now(),
  UNIQUE (family_id, user_id)
);

ALTER TABLE family_members ENABLE ROW LEVEL SECURITY;

-- families SELECT policy (here because it depends on family_members)
CREATE POLICY "family_select" ON families FOR SELECT
  USING (
    id IN (
      SELECT family_id FROM family_members WHERE user_id = auth.uid()
    )
  );

-- Ver miembros de tu propia familia
CREATE POLICY "members_select" ON family_members FOR SELECT
  USING (
    family_id IN (
      SELECT family_id FROM family_members WHERE user_id = auth.uid()
    )
  );

-- Unirte como owner al crear tu familia
CREATE POLICY "members_insert_self" ON family_members FOR INSERT
  WITH CHECK (user_id = auth.uid());

-- Solo el owner puede cambiar roles / invitar / expulsar
CREATE POLICY "members_delete_owner" ON family_members FOR DELETE
  USING (
    family_id IN (
      SELECT family_id FROM family_members
      WHERE user_id = auth.uid() AND role = 'owner'
    )
  );

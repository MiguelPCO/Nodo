CREATE TABLE IF NOT EXISTS capsules (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  family_id   uuid NOT NULL REFERENCES families(id) ON DELETE CASCADE,
  name        text NOT NULL CHECK (char_length(name) <= 120),
  occasion    text NOT NULL
                   CHECK (occasion IN ('bebe','pareja','abuelos','viaje','familia','libre')),
  cover_url   text,
  open_date   date,
  status      text NOT NULL DEFAULT 'open'
                   CHECK (status IN ('open','sealed')),
  created_by  uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at  timestamptz DEFAULT now(),
  updated_at  timestamptz DEFAULT now()
);

ALTER TABLE capsules ENABLE ROW LEVEL SECURITY;

-- Ver cápsulas de tu familia
CREATE POLICY "capsule_select" ON capsules FOR SELECT
  USING (
    family_id IN (
      SELECT family_id FROM family_members WHERE user_id = auth.uid()
    )
  );

-- Crear cápsula si eres owner o editor
CREATE POLICY "capsule_insert" ON capsules FOR INSERT
  WITH CHECK (
    family_id IN (
      SELECT family_id FROM family_members
      WHERE user_id = auth.uid() AND role IN ('owner','editor')
    )
    AND created_by = auth.uid()
  );

-- Editar cápsula si eres owner (cualquier campo) o editor (solo propia)
CREATE POLICY "capsule_update_owner" ON capsules FOR UPDATE
  USING (
    family_id IN (
      SELECT family_id FROM family_members
      WHERE user_id = auth.uid() AND role = 'owner'
    )
  );

CREATE POLICY "capsule_update_editor_own" ON capsules FOR UPDATE
  USING (
    created_by = auth.uid()
    AND family_id IN (
      SELECT family_id FROM family_members
      WHERE user_id = auth.uid() AND role = 'editor'
    )
  );

-- Eliminar cápsula solo owner
CREATE POLICY "capsule_delete" ON capsules FOR DELETE
  USING (
    family_id IN (
      SELECT family_id FROM family_members
      WHERE user_id = auth.uid() AND role = 'owner'
    )
  );

-- Actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER capsules_updated_at
  BEFORE UPDATE ON capsules
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

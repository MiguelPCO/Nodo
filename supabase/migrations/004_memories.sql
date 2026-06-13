CREATE TABLE memories (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  capsule_id  uuid NOT NULL REFERENCES capsules(id) ON DELETE CASCADE,
  family_id   uuid NOT NULL REFERENCES families(id) ON DELETE CASCADE,
  type        text NOT NULL CHECK (type IN ('photo', 'note')),
  storage_key text,      -- ruta en Supabase Storage (null para notas)
  caption     text,      -- pie de foto o texto de la nota
  created_by  uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at  timestamptz DEFAULT now()
);

ALTER TABLE memories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "memory_select" ON memories FOR SELECT
  USING (
    family_id IN (
      SELECT family_id FROM family_members WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "memory_insert" ON memories FOR INSERT
  WITH CHECK (
    family_id IN (
      SELECT family_id FROM family_members WHERE user_id = auth.uid()
    )
    AND created_by = auth.uid()
  );

CREATE POLICY "memory_delete" ON memories FOR DELETE
  USING (
    created_by = auth.uid()
    OR family_id IN (
      SELECT family_id FROM family_members
      WHERE user_id = auth.uid() AND role = 'owner'
    )
  );

-- Storage policies para bucket capsule-media
-- Ejecutar en Supabase SQL Editor (requiere bucket ya creado)

CREATE POLICY "storage_members_upload" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'capsule-media'
    AND auth.uid() IN (
      SELECT user_id FROM family_members
      WHERE family_id = (storage.foldername(name))[1]::uuid
    )
  );

CREATE POLICY "storage_members_select" ON storage.objects
  FOR SELECT USING (
    bucket_id = 'capsule-media'
    AND auth.uid() IN (
      SELECT user_id FROM family_members
      WHERE family_id = (storage.foldername(name))[1]::uuid
    )
  );

CREATE POLICY "storage_members_delete" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'capsule-media'
    AND auth.uid() IN (
      SELECT user_id FROM family_members
      WHERE family_id = (storage.foldername(name))[1]::uuid
        AND role IN ('owner', 'editor')
    )
  );

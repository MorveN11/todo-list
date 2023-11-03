CREATE TABLE IF NOT EXISTS
  tasks (
    id UUID DEFAULT gen_random_uuid () PRIMARY KEY,
    title TEXT,
    completed BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
  );

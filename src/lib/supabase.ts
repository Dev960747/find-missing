import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-project-url.supabase.co';
const supabaseAnonKey = 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Person = {
  id: string;
  created_at: string;
  name: string;
  age: number;
  last_seen_location: string;
  photo_url: string;
  status: 'missing' | 'found';
  contact_info: string;
  description: string;
};

export type Match = {
  id: string;
  created_at: string;
  missing_person_id: string;
  found_location: string;
  match_confidence: number;
  reporter_contact: string;
  status: 'pending' | 'confirmed' | 'false_positive';
};
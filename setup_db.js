import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function setupDatabase() {
  console.log('Testing Supabase Connection...');
  const { data, error } = await supabase.from('buses').select('*');

  if (error) {
    console.error('Error connecting to Supabase:', error.message);
    console.log('👉 Tip: Make sure you ran the SQL queries in the Supabase SQL Editor first!');
  } else {
    console.log('✅ Connection successful! Current buses in DB:', data);
  }
}

setupDatabase();
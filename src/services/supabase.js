import {createClient} from "@supabase/supabase-js";

export const supabaseUrl = "https://eqrgciaavedhpthhsxev.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxcmdjaWFhdmVkaHB0aGhzeGV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM5NDYzODYsImV4cCI6MjAyOTUyMjM4Nn0.CIIXeFezZ0kmpR-tVgnDTbMcS5jafrn8aOuie10rtLQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

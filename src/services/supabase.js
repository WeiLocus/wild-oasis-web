import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pailwlkfdhultwskkxvu.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhaWx3bGtmZGh1bHR3c2treHZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc2MDgxMDYsImV4cCI6MjAwMzE4NDEwNn0.qizsF8mDCyjD8UABzTsQ3LxqQT7idqRd2L26SOBwXA8";
const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase
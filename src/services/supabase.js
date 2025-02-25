import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://xcsimzafwrxfititeusm.supabase.co'

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhjc2ltemFmd3J4Zml0aXRldXNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0NjU3NTIsImV4cCI6MjA1NjA0MTc1Mn0.Tcrl34Bg5JxSAiKnl1OGvizoOcLy_ddNxtJt9w1WAn0'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase

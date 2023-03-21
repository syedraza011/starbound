import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';

// make requests and update data from javascript to the supabase instance
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_API_KEY
);

// useSupabase will contain all session information about the logged in user
// the session will be based on the supabase session
const useSupabase = () => {
    const [session, setSession] = useState(supabase.auth.session())

    // when session information changes, update the session
    supabase.auth.onAuthStateChange(async (_event, session) => {
        setSession(session)
    });

    // return the supabase hook with the new session and supabase client
    return { session, supabase }
};

export default useSupabase;
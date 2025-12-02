// FIX: Moved the triple-slash directive to be the very first line of the file, as required for TypeScript to correctly process it.
/// <reference types="vite/client" />

import { createClient } from '@supabase/supabase-js';

// CORREÇÃO CRÍTICA PARA AMBIENTES DE SANDBOX:
// Usando variáveis de ambiente do Vite para buscar as chaves reais do Supabase.
// Essas chaves precisam ser definidas no arquivo .env (ex: VITE_SUPABASE_URL=..., VITE_SUPABASE_ANON_KEY=...)

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("Supabase URL and Anon Key are missing. App will run in mock mode where possible.");
}

export const supabase = createClient(
    supabaseUrl || 'https://placeholder.supabase.co',
    supabaseAnonKey || 'placeholder'
);
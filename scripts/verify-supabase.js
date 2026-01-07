
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read .env.local manually
const envPath = path.resolve(__dirname, '../.env.local');
// Check if file exists
if (!fs.existsSync(envPath)) {
    console.error('❌ .env.local file not found at ' + envPath);
    process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf-8');

const getEnvVar = (key) => {
    const match = envContent.match(new RegExp(`${key}=(.*)`));
    return match ? match[1].trim() : null;
};

const supabaseUrl = getEnvVar('VITE_SUPABASE_URL');
const supabaseAnonKey = getEnvVar('VITE_SUPABASE_ANON_KEY');

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('❌ Missing credentials in .env.local');
    console.log('Content:', envContent);
    process.exit(1);
}

console.log(`🔑 Key used: ${supabaseAnonKey.substring(0, 10)}... (Length: ${supabaseAnonKey.length})`);

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function verify() {
    console.log('🔄 Connecting to Supabase...');
    console.log(`📌 URL: ${supabaseUrl}`);

    const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .limit(1);

    if (error) {
        console.error('❌ Connection Failed:', error.message);
        if (error.code === '42P01') {
            console.error('💡 Hint: The "testimonials" table does not exist. Did you run the SQL script?');
        }
        // Check if it might be an issue with the key format
        if (supabaseAnonKey.startsWith('sb_publishable')) {
            console.log('ℹ️ You are using a "sb_publishable" key. If this fails, try using the JWT string (anon key) which starts with "ey..." from Supabase settings > API.');
        }
    } else {
        console.log('✅ Connection Successful!');
        console.log(`📊 Found ${data.length} records.`);
        if (data.length > 0) {
            console.log('📝 Sample:', data[0].name);
        } else {
            console.log('⚠️ Table is empty. Please run the SQL script to seed data.');
        }
    }
}

verify();

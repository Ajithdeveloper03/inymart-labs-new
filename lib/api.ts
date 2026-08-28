export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || (process.env.NODE_ENV === 'production' ? 'https://inymartlabs.com/php-backend/api' : 'http://localhost/php-backend/api');

// Note: In production, we use the absolute URL to ensure the API is reachable even if the frontend is hosted elsewhere (e.g. Vercel).
// User needs to place the 'php-backend' folder in their htdocs/www directory and ensure it's accessible at this URL.

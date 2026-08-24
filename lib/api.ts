export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || (process.env.NODE_ENV === 'production' ? '/php-backend/api' : 'http://localhost/php-backend/api');

// Note: In production on Hostinger/cPanel, '/php-backend/api' correctly resolves relative to the current domain.
// User needs to place the 'php-backend' folder in their htdocs/www directory and ensure it's accessible at this URL.

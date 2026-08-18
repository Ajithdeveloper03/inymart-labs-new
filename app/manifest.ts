import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Inymart Labs | Digital Marketing Agency',
    short_name: 'Inymart Labs',
    description: 'Partner with our digital marketing agency in Tamil Nadu to unlock your business\'s potential.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/logo.webp',
        sizes: '192x192',
        type: 'image/webp',
      },
      {
        src: '/logo.webp',
        sizes: '512x512',
        type: 'image/webp',
      }
    ],
  };
}

/**
 * Facts below were cross-checked against the live “beri kopi Jatinangor”
 * listing on Google Maps (checked 9 Nov 2026). Items that could not be
 * verified are intentionally left out rather than invented.
 */
export const business = {
  name: 'Beri Kopi',
  fullName: 'Beri Kopi Jatinangor',
  shortName: 'Beri Kopi',
  tagline: 'Your daily coffee, your happy place.',
  region: 'Jatinangor, Sumedang, Jawa Barat',
  regionShort: 'Jatinangor',
  address: {
    line1: 'Dekat Pondok Kusuma Orange, Cikeruh',
    line2: 'Kec. Jatinangor, Kabupaten Sumedang, Jawa Barat 45363',
    full: 'Dekat Pondok Kusuma Orange, Cikeruh, Kec. Jatinangor, Kabupaten Sumedang, Jawa Barat 45363',
  },
  hours: {
    label: 'Buka 24 jam',
    note: 'Sesuai info Google Maps — konfirmasi sebelum berkunjung.',
    verifiedVia: 'Google Maps',
  },
  rating: {
    score: 4.6,
    count: 201,
    source: 'Google Maps',
  },
  priceRange: 'Rp4.000 – Rp36.000',
  maps: {
    searchQuery: 'beri kopi Jatinangor',
    directionsUrl:
      'https://www.google.com/maps/search/?api=1&query=beri%20kopi%20Jatinangor%20Cikeruh%20Sumedang',
    embedUrl:
      'https://maps.google.com/maps?q=beri%20kopi%20Jatinangor%20Cikeruh%20Sumedang&z=16&hl=id&output=embed',
  },
  instagram: {
    label: 'Instagram',
    displayName: 'Beri Kopi Jatinangor',
    // The official handle was not present in the supplied assets or Maps
    // listing. This opens Instagram's keyword search rather than guessing.
    url: 'https://www.instagram.com/explore/search/keyword/?q=beri%20kopi%20jatinangor',
  },
  contactNote:
    'Nomor WhatsApp, email, dan akun Instagram resmi belum terverifikasi. Gunakan Google Maps untuk lokasi & jam buka.',
} as const

export type Business = typeof business

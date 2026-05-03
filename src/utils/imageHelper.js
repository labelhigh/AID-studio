// Generate consistent placeholder images using picsum.photos seeded URLs
export function picsumUrl(seed, width = 1200, height = 800) {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`
}

// Curated seeds for different case types
export const caseSeeds = {
  ux: ['healthcare', 'enterprise', 'developer', 'legal', 'finance', 'education',
       'manufacturing', 'customer', 'supply', 'creative', 'media', 'hr',
       'city', 'security', 'hospital', 'agriculture'],
  ui: ['design-system', 'dashboard', 'conversation'],
  threed: ['brand3d', 'metaverse'],
  aivideo: ['brandfilm', 'motion'],
}

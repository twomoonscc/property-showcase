/** @type {{ label: string, top: string, left: string }} */
export const mainPin = {
  label: 'AURA Residences',
  top: '45%',
  left: '48%',
}

/** @type {import('@/lib/types').POIPin[]} */
export const poiPins = [
  { label: 'The Atlas Restaurant', category: 'restaurant', icon: '🍴', top: '38%', left: '55%' },
  { label: "St. Catherine's College",  category: 'school',     icon: '🎓', top: '52%', left: '38%' },
  { label: 'Metro Station',            category: 'transport',  icon: '🚇', top: '60%', left: '51%' },
  { label: 'Riverside Park',           category: 'park',       icon: '🌿', top: '35%', left: '42%' },
  { label: 'Café Nero',               category: 'restaurant', icon: '☕', top: '55%', left: '60%' },
]

/** @type {import('@/lib/types').OverlayPOI[]} */
export const overlayItems = [
  { icon: '🍴', label: 'Fine Dining',    distance: '2 min',  bgColor: 'rgba(239,100,50,0.12)' },
  { icon: '🚇', label: 'Metro',          distance: '4 min',  bgColor: 'rgba(96,165,250,0.1)' },
  { icon: '🌿', label: 'Riverside Park', distance: '6 min',  bgColor: 'rgba(74,222,128,0.1)' },
  { icon: '🎓', label: 'Schools',        distance: '8 min',  bgColor: 'rgba(74,222,128,0.1)' },
  { icon: '✈️', label: 'Airport',        distance: '22 min', bgColor: 'rgba(201,169,110,0.12)' },
]

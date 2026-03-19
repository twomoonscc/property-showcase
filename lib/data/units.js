/** @type {import('@/lib/types').Unit[]} */
export const seedUnits = [
  { id: '1A',  status: 'sold',      type: '2 Bed / 1 Bath',       area: '88 m²',  level: 1,  aspect: 'East',       price: 'Sold' },
  { id: '1B',  status: 'sold',      type: '1 Bed / 1 Bath',       area: '62 m²',  level: 1,  aspect: 'West',       price: 'Sold' },
  { id: '2A',  status: 'sold',      type: '3 Bed / 2 Bath',       area: '142 m²', level: 2,  aspect: 'North-East', price: 'Sold' },
  { id: '2B',  status: 'available', type: '2 Bed / 2 Bath',       area: '108 m²', level: 2,  aspect: 'South',      price: '$1,840,000' },
  { id: '3A',  status: 'reserved',  type: '2 Bed / 1 Bath',       area: '92 m²',  level: 3,  aspect: 'North',      price: '$1,560,000' },
  { id: '3B',  status: 'available', type: '3 Bed / 2 Bath',       area: '148 m²', level: 3,  aspect: 'East',       price: '$2,100,000' },
  { id: '4A',  status: 'sold',      type: '1 Bed / 1 Bath',       area: '64 m²',  level: 4,  aspect: 'West',       price: 'Sold' },
  { id: '4B',  status: 'available', type: '2 Bed / 2 Bath',       area: '112 m²', level: 4,  aspect: 'North-West', price: '$1,920,000' },
  { id: '5A',  status: 'available', type: '3 Bed / 2 Bath',       area: '155 m²', level: 5,  aspect: 'North-East', price: '$2,240,000' },
  { id: '5B',  status: 'reserved',  type: '2 Bed / 1 Bath',       area: '90 m²',  level: 5,  aspect: 'South-East', price: '$1,620,000' },
  { id: '6A',  status: 'sold',      type: '1 Bed / 1 Bath',       area: '61 m²',  level: 6,  aspect: 'East',       price: 'Sold' },
  { id: '6B',  status: 'available', type: '3 Bed / 3 Bath',       area: '180 m²', level: 6,  aspect: 'North',      price: '$2,880,000' },
  { id: '14A', status: 'available', type: '3 Bed / 2 Bath',       area: '142 m²', level: 14, aspect: 'North-East', price: '$2,400,000' },
  { id: '14B', status: 'reserved',  type: '2 Bed / 2 Bath',       area: '110 m²', level: 14, aspect: 'South',      price: '$1,980,000' },
  { id: '20A', status: 'available', type: 'Penthouse / 4 Bed',    area: '310 m²', level: 20, aspect: '360°',       price: '$6,200,000' },
  { id: '20B', status: 'available', type: '3 Bed / 3 Bath',       area: '195 m²', level: 20, aspect: 'North',      price: '$3,400,000' },
]

const statusCycle = ['available', 'available', 'sold', 'reserved', 'sold', 'available']

/**
 * @param {number} total
 * @returns {import('@/lib/types').Unit[]}
 */
export function generateFloorplanUnits(total) {
  const units = [...seedUnits]
  for (let i = units.length; i < total; i++) {
    const s = statusCycle[i % statusCycle.length]
    units.push({
      id: (i + 1) + 'X',
      status: s,
      type: '2 Bed / 2 Bath',
      area: '102 m²',
      level: i + 1,
      aspect: 'Various',
      price: s === 'sold' ? 'Sold' : '$1,750,000',
    })
  }
  return units
}

export const allUnits = generateFloorplanUnits(32)

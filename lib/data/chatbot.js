export const agentName = 'AURA AI'

export const welcomeMessage =
  "Welcome to AURA Residences. I'm your AI guide — trained on every detail of the building, its residences, and the surrounding neighbourhood. What would you like to know?"

export const suggestions = [
  'Pricing & availability',
  'Construction timeline',
  'Amenities',
  'Book a viewing',
]

const replies = {
  pricing:
    'Residences at AURA start from $1.2M for a one-bedroom and rise to $6.2M for the penthouse. We have several competitively priced units still available. Would you like to see the full availability?',
  availability:
    'We currently have 14 residences available across levels 2–20, including our spectacular Level 20 collection. Would you like to view the interactive floor plan?',
  construction:
    "Construction is progressing excellently — we're currently at Level 17 of 28. We remain on track for our Q3 2027 completion and handover date.",
  amenities:
    "AURA features a rooftop infinity pool, private concierge, residents' sky lounge on Level 20, a wellness centre, secure basement parking, and smart home integration throughout every residence.",
  book: "I'd love to arrange a private viewing for you! Please select a date and time in the calendar above, or I can connect you directly with Sophia, our Head of Sales.",
  default:
    "That's a great question. Our sales team would be best placed to give you a detailed answer. Shall I connect you with one of our agents, or would you like to book a private viewing?",
}

/**
 * @param {string} message
 * @returns {string}
 */
export function getBotReply(message) {
  const m = message.toLowerCase()
  if (m.includes('price') || m.includes('cost') || m.includes('much')) return replies.pricing
  if (m.includes('availab') || m.includes('unit') || m.includes('floor')) return replies.availability
  if (m.includes('construct') || m.includes('timeline') || m.includes('complet') || m.includes('finish')) return replies.construction
  if (m.includes('ameniti') || m.includes('pool') || m.includes('gym') || m.includes('facility')) return replies.amenities
  if (m.includes('book') || m.includes('viewing') || m.includes('visit') || m.includes('tour')) return replies.book
  if (m.includes('pric')) return replies.pricing
  if (m.includes('construct')) return replies.construction
  if (m.includes('ameniti')) return replies.amenities
  return replies.book
}

/**
 * @typedef {'available' | 'reserved' | 'sold'} UnitStatus
 */

/**
 * @typedef {Object} Unit
 * @property {string} id
 * @property {UnitStatus} status
 * @property {string} type
 * @property {string} area
 * @property {number} level
 * @property {string} aspect
 * @property {string} price
 */

/**
 * @typedef {'done' | 'current' | 'upcoming'} MilestoneState
 */

/**
 * @typedef {Object} Milestone
 * @property {string} date
 * @property {string} label
 * @property {string} sublabel
 * @property {MilestoneState} state
 */

/**
 * @typedef {Object} Agent
 * @property {string} name
 * @property {string} role
 * @property {string} bio
 * @property {string} initials
 * @property {string} [email]
 * @property {string} [phone]
 * @property {string} [whatsapp]
 */

/**
 * @typedef {Object} POIPin
 * @property {string} label
 * @property {string} category
 * @property {string} icon
 * @property {string} top
 * @property {string} left
 */

/**
 * @typedef {Object} OverlayPOI
 * @property {string} icon
 * @property {string} label
 * @property {string} distance
 * @property {string} bgColor
 */

/**
 * @typedef {Object} TimeSlot
 * @property {string} time
 * @property {boolean} unavailable
 */

/**
 * @typedef {Object} BookingFormData
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} email
 * @property {string} phone
 * @property {string} [message]
 * @property {string} [selectedDate]
 * @property {string} [selectedTime]
 */

/**
 * @typedef {Object} ContactFormData
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} email
 * @property {string} message
 */

/**
 * @typedef {Object} ChatMessage
 * @property {string} id
 * @property {string} text
 * @property {'bot' | 'user'} role
 */

/**
 * @typedef {Object} MaterialSwatch
 * @property {string} id
 * @property {string} name
 * @property {string} title
 * @property {string} gradient
 */

/**
 * @typedef {Object} RenderHotspot
 * @property {string} id
 * @property {string} label
 * @property {string} sub
 * @property {string} top
 * @property {string} left
 */

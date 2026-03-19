/**
 * @param {number} value
 * @param {string} [locale='en-AU']
 * @returns {string}
 */
export function formatCurrency(value, locale = 'en-AU') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}
